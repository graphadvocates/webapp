import { google } from "googleapis";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	gql,
} from "@apollo/client";

const getBlockNumbers = gql`
	query getDayBlocks {
		dayBlocks(first: 29, orderBy: endBlockNum, orderDirection: desc, skip: 1) {
			day
			endBlockNum
		}
	}
`;

const get30DayPrice = gql`
	query token30Day(
		$num1: Int = 0
		$num2: Int = 0
		$num3: Int = 0
		$num4: Int = 0
		$num5: Int = 0
		$num6: Int = 0
		$num7: Int = 0
		$num8: Int = 0
		$num9: Int = 0
		$num10: Int = 0
		$num11: Int = 0
		$num12: Int = 0
		$num13: Int = 0
		$num14: Int = 0
		$num15: Int = 0
		$num16: Int = 0
		$num17: Int = 0
		$num18: Int = 0
		$num19: Int = 0
		$num20: Int = 0
		$num21: Int = 0
		$num22: Int = 0
		$num23: Int = 0
		$num24: Int = 0
		$num25: Int = 0
		$num26: Int = 0
		$num27: Int = 0
		$num28: Int = 0
		$num29: Int = 0
	) {
		currentPrice: token(id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7") {
			lastPriceUSD
		}
		tokenPrice1: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num1 }
		) {
			lastPriceUSD
		}
		tokenPrice2: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num2 }
		) {
			lastPriceUSD
		}
		tokenPrice3: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num3 }
		) {
			lastPriceUSD
		}
		tokenPrice4: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num4 }
		) {
			lastPriceUSD
		}
		tokenPrice5: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num5 }
		) {
			lastPriceUSD
		}
		tokenPrice6: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num6 }
		) {
			lastPriceUSD
		}
		tokenPrice7: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num7 }
		) {
			lastPriceUSD
		}
		tokenPrice8: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num8 }
		) {
			lastPriceUSD
		}
		tokenPrice9: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num9 }
		) {
			lastPriceUSD
		}
		tokenPrice10: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num10 }
		) {
			lastPriceUSD
		}
		tokenPrice11: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num11 }
		) {
			lastPriceUSD
		}
		tokenPrice12: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num12 }
		) {
			lastPriceUSD
		}
		tokenPrice13: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num13 }
		) {
			lastPriceUSD
		}
		tokenPrice14: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num14 }
		) {
			lastPriceUSD
		}
		tokenPrice15: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num15 }
		) {
			lastPriceUSD
		}
		tokenPrice16: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num16 }
		) {
			lastPriceUSD
		}
		tokenPrice17: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num17 }
		) {
			lastPriceUSD
		}
		tokenPrice18: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num18 }
		) {
			lastPriceUSD
		}
		tokenPrice19: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num19 }
		) {
			lastPriceUSD
		}
		tokenPrice20: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num20 }
		) {
			lastPriceUSD
		}
		tokenPrice21: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num21 }
		) {
			lastPriceUSD
		}
		tokenPrice22: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num22 }
		) {
			lastPriceUSD
		}
		tokenPrice23: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num23 }
		) {
			lastPriceUSD
		}
		tokenPrice24: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num24 }
		) {
			lastPriceUSD
		}
		tokenPrice25: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num25 }
		) {
			lastPriceUSD
		}
		tokenPrice26: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num26 }
		) {
			lastPriceUSD
		}
		tokenPrice27: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num27 }
		) {
			lastPriceUSD
		}
		tokenPrice28: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num28 }
		) {
			lastPriceUSD
		}
		tokenPrice29: token(
			id: "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
			block: { number: $num29 }
		) {
			lastPriceUSD
		}
	}
`;

async function grt30dayPriceAvg() {
	const client = new ApolloClient({
		uri:
			"https://gateway.thegraph.com/api/" +
			process.env.BRAINFRIED_API_KEY +
			"/subgraphs/id/Dgr3WsqFY8SoKW4RgzkCwyim4K4R4iejBxB1EVYEG2LN",
		cache: new InMemoryCache(),
	});
	const client2 = new ApolloClient({
		uri:
			"https://gateway.thegraph.com/api/" +
			process.env.BRAINFRIED_API_KEY +
			"/subgraphs/id/G3JZhmKKHC4mydRzD6kSz5fCWve5WDYYCyTFSJyv3SD5",
		cache: new InMemoryCache(),
	});

	try {
		//Get 29 block numbers
		const result = await client.query({ query: getBlockNumbers });
		const endBlockNums = result.data.dayBlocks.map((block) =>
			parseInt(block.endBlockNum)
		);

		// get pricing for today + 29 previous days
		const variables = {};
		for (let i = 0; i < endBlockNums.length; i++) {
			variables[`num${i + 1}`] = endBlockNums[i];
		}

		const res = await client2.query({
			query: get30DayPrice,
			variables: variables,
		});

		let returnAvg = 0;
		for (const key in res.data) {
			returnAvg += parseFloat(res.data[key].lastPriceUSD);
		}
		returnAvg /= 30;

		//Get the current time
		var date = new Date();
		var hours = ("0" + date.getUTCHours()).slice(-2);
		var minutes = ("0" + date.getUTCMinutes()).slice(-2);
		var seconds = ("0" + date.getUTCSeconds()).slice(-2);
		var timeString = hours + ":" + minutes + ":" + seconds + " UTC";
		const currentPrice = res.data["currentPrice"].lastPriceUSD;

		// Return the calculated average
		return [timeString, currentPrice.toString(), returnAvg.toString()];
	} catch (err) {
		console.log(err);
		return 0;
	}
}

export default async function handler(req, res) {
	if (req.query.API_KEY !== process.env.API_KEY) {
		return res.status(401).send("You are not authorized to access this api.");
	}

	try {
		//Query for price data get avg
		const relst = await grt30dayPriceAvg();

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
