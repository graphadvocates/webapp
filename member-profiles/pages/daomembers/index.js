import ProfileList from "../../components/ProfileList.jsx";

function DAOmembers(props) {
    return (
        <div>
            <ProfileList profiles={props.memberProfiles} />
        </div>
    );
}

export default DAOmembers;

//This is server-side code
export async function getStaticProps(context) {
    const token = process.env.CLICKUP_API_KEY;
    
    const { Clickup } = require("clickup.js");
    const clickup = new Clickup(token);
    var memberProfs = [];

    try {
        //profile list id = 146225010
        //member list id = 13pgd4-7347
        //advocate list id = 13pgd4-7367

        //get member profiles
        var data = await clickup.views.getTasks("13pgd4-7347", 0);
        // var data = await clickup.lists.getTasks("146225010");
        memberProfs = data.body.tasks;
    } catch (error) {
        console.log("Error::", error.message);
    }

    return {
        props: {
            memberProfiles: memberProfs,
        },

        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 60 seconds
        revalidate: 100, // In seconds
    };
}
