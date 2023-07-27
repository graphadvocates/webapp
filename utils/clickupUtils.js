export async function getDaoMembers(pageNumber) {
	const token = process.env.CLICKUP_API_KEY;

	const { Clickup } = require("clickup.js");
	const clickup = new Clickup(token);
	let memberProfs = [];

	//profile list id = 146225010
	//member list id = 13pgd4-7347
	//advocate list id = 13pgd4-7367

	//get member profiles
	var data = await clickup.views.getTasks("13pgd4-7347", pageNumber);
	// memberProfs = data.body.tasks;
	const tasks = data.body.tasks;

	tasks.map((profile, idx) => {
		const tmpProf = {};
		const nameField = profile.custom_fields.find((field) => {
			return field.id === "b8bca308-5797-4fc7-9038-0dcec7851b39";
		});
		const discordField = profile.custom_fields.find((field) => {
			return field.id === "760ac8c2-c4a2-4d75-868c-b41575373ee3";
		});
		const imgURL = profile.custom_fields.find((field) => {
			return field.id === "d2d56a31-fe9f-428b-9430-f3318372cfc5";
		});

		//Check value of field
		tmpProf.name_val = nameField.hasOwnProperty("value")
			? nameField.value
			: "Graph";
		tmpProf.discordName = discordField.hasOwnProperty("value")
			? discordField.value
			: "Graph";
		tmpProf.imgURL_val = imgURL.hasOwnProperty("value")
			? imgURL.value
			: "assets/Logos/defaultProf.png";

		memberProfs.push(tmpProf);
	});

	return memberProfs;
}

//View of Active-Advocates -> 13pgd4-17291
//View of Completed Grants -> 13pgd4-14721
export async function getHomeStats() {
	//@todo - This seems to be the fastest way to get the list size
	// Each request consists of 30 tasks
	const advocate_lowerBound = 270;
	const grantCount_lowerBound = 10;

	//establish clickup client
	const token = process.env.CLICKUP_API_KEY;
	const { Clickup } = require("clickup.js");
	const clickup = new Clickup(token);

	const advocateData = await taskCountLoop(
		clickup,
		"13pgd4-17291",
		advocate_lowerBound
	);
	const activeAdvocateStat =
		(advocateData.index - 1) * 30 + advocateData.tasklist.length;

	//Get number of grants issued
	const grantData = await taskCountLoop(
		clickup,
		"13pgd4-14721",
		grantCount_lowerBound
	);
	const numofGrants = (grantData.index - 1) * 30 + grantData.tasklist.length;

	//Get amount of money spent
	const grantAmounts = grantData.tasklist
		.flatMap(function (obj) {
			return obj.custom_fields.filter(function (innerObj) {
				return innerObj.id === "54802e7d-95e3-4c97-b755-f9e71d62c5ed";
			});
		})
		.map((obj) => {
			return obj.value;
		});

	let totalSum = 0;

	for (let i = 0; i < grantAmounts.length; i++) {
		if (grantAmounts[i] !== null && !isNaN(parseFloat(grantAmounts[i]))) {
			totalSum += parseFloat(grantAmounts[i]);
		}
	}
	totalSum = Math.floor(totalSum);

	return {
		activeAdvocates: activeAdvocateStat,
		numberOfGrants: numofGrants,
		GRTissued: totalSum,
	};
}

async function taskCountLoop(clickupClient, ViewID, lowerBound) {
	let varPageIndex = Math.floor(lowerBound / 30);
	let tasks = [];
	while (true) {
		const data = await clickupClient.views.getTasks(ViewID, varPageIndex);
		//if no items, we're done searching
		if (data.body.tasks.length === 0) {
			break;
		}
		//Otherwise save fetched data
		tasks = data.body.tasks;
		varPageIndex++;
	}

	return {
		index: varPageIndex,
		tasklist: tasks,
	};
}

/**
 * Get completed Tasks
 */
export async function getCompletedGrants() {
	const token = process.env.CLICKUP_API_KEY;

	const { Clickup } = require("clickup.js");
	const clickup = new Clickup(token);
	let result = [];

	//completed Task List ID: 13pgd4-14721
	var data = await clickup.views.getTasks("13pgd4-14721", 0);
	const tasks = data.body.tasks;

	tasks.map((profile, idx) => {
		const tmpProf = {};
		const grantName = profile.name;
		const forumLink = profile.custom_fields.find((field) => {
			return field.id === "54aebea8-029b-4976-8630-41dd6e19b9e2";
		});
		const projectVision = profile.custom_fields.find((field) => {
			return field.id === "93e57fd2-86b7-483a-9b8b-03fd97b91802";
		});
		const projectCategoryObject = profile.custom_fields.find((field) => {
			return field.id === "302c7cfa-f12b-435e-afd2-3a1abbe1e875";
		});
		const projectShortDescription = profile.custom_fields.find((field) => {
			return field.id === "74ec988c-99e2-4169-b142-98d440fd6fc3";
		});

		//Check value of field
		tmpProf.grantName = grantName ?? "Completed Grant";
		tmpProf.forumLink = forumLink.hasOwnProperty("value")
			? forumLink.value
			: "https://forum.graphadvocates.com";
		tmpProf.projectVision = projectVision.hasOwnProperty("value")
			? projectVision.value
			: "Completed Grant Vision";
		tmpProf.projectShortDescription = projectShortDescription.hasOwnProperty(
			"value"
		)
			? projectShortDescription.value
			: "Completed Grant Vision";

		//Get project category
		tmpProf.projectCategory = "Completed Grant Vision";
		if (projectCategoryObject.hasOwnProperty("value")) {
			const categories = projectCategoryObject.type_config.options;
			tmpProf.projectCategory = categories[+projectCategoryObject.value].name;
		}

		result.push(tmpProf);
	});

	return result;
}
