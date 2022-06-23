// /api/clickup-api
// const { Clickup } = require("clickup.js");
// const clickup = new Clickup(token);

// async function handler(req, res) {
//     if (req.method == "GET") {
//         try {
//             //profile list id = 146225010
//             const { body } = await clickup.lists.getTasks("146225010");
//             res.status(201).json({body});
//         } catch (error) {
//             console.log("Error", error.message);
//         }
//     }
// }

export default handler;
