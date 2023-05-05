import { google } from "googleapis";

function grt30dayAvg() {
	var data = [];
	var currPriceData = "0";

	var date = new Date();
	var hours = ("0" + date.getUTCHours()).slice(-2);
	var minutes = ("0" + date.getUTCMinutes()).slice(-2);
	var seconds = ("0" + date.getUTCSeconds()).slice(-2);
	var timeString = hours + ":" + minutes + ":" + seconds + " UTC";

	/**
	 * The query can be run once/hour on the free api plan
	 *  - This will get an array of 30 grt prices with a daily interval bewteen each one (29days + today).
	 *  - Ordered from oldest to newest.
	 **/
	try {
		var response = fetch(
			"https://api.coingecko.com/api/v3/coins/the-graph/market_chart?vs_currency=usd&days=7&interval=daily"
		);
		if (response == "error code: 1020") {
			throw new Error("error code: 1020 - API Limitation?");
		} else if ("status" in JSON.parse(response)) {
			const msg = JSON.parse(response);
			throw new Error(JSON.stringify(msg));
		}
		data = JSON.parse(response).prices;
	} catch (e) {
		console.log("Caught Exception: " + e);
	}

	const dataLength = data.length;
	let totalPriceSum = 0.0;
	for (var key in data) {
		totalPriceSum += +data[key][1];
		currPriceData = data[key][1]; //only need the last one
	}

	let result = dataLength == 0 ? 0 : totalPriceSum / dataLength;

	return [timeString, currPriceData, result];
}

export default async function handler(req, res) {
	try {
		//Query for price data get avg
		const relst = grt30dayAvg();

		const auth = new google.auth.JWT({
			scopes: ["https://www.googleapis.com/auth/spreadsheets"],
			email: process.env.GOOGLE_CLIENT_EMAIL,
			keyFile: null,
			key: process.env.GOOGLE_PRIVATE_KEY.split(String.raw`\n`).join("\n"),
		});

		const sheets = google.sheets({ version: "v4", auth });
		const sheetId = "1bJieV66IHoQf13-JPqAAkMN6XMArlHF_LQWYtVZDJbw";
		const sheetName = "Sheet1";
		const range = "Sheet1!D2:F2"; // range of cells to write data to
		const rowIndex = 2; // row number to insert the new row before
		const values = [relst];
		const resource = {
			values,
		};

		// insert a new row that shifts existing data down
		const insertDimensionRequest = {
			insertDimension: {
				range: {
					sheetId: Number(sheetId),
					dimension: "ROWS",
					startIndex: rowIndex - 1,
					endIndex: rowIndex,
				},
				inheritFromBefore: false,
			},
		};

		const updateDimensionResponse = await sheets.spreadsheets.batchUpdate({
			spreadsheetId: sheetId,
			requestBody: {
				requests: [insertDimensionRequest],
			},
		});

		//Insert new data
		const response = await sheets.spreadsheets.values.update({
			spreadsheetId: sheetId,
			range,
			valueInputOption: "USER_ENTERED",
			resource,
		});

		// console.log(`Updated ${response.data.updates.updatedCells} cells.`);
		res.status(200).json({ message: "Data written to Google Sheets." });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to write data to Google Sheets." });
	}
}
