import {
    Box, Heading,
} from "@chakra-ui/react";
import ProfileList from "../../components/ProfileList";


function advocates(props){
    return(
        <Box>
            <Heading m={5}>Advocates</Heading>
            <ProfileList profiles={props.advocateProfiles}/>
        </Box>
    );
}

export default advocates;


//This is server-side code
export async function getStaticProps(context) {
    const token = process.env.CLICKUP_API_KEY;
    const { Clickup } = require("clickup.js");
    const clickup = new Clickup(token);
    var advocateProfs = [];
  
    try {
      //profile list id = 146225010
      //member list id = 13pgd4-7347
      //advocate list id = 13pgd4-7367
      
      //get advocate profiles
      // TODO: Need to pagify to display all advocates
      var data = await clickup.views.getTasks("13pgd4-7367", 0);
      advocateProfs = data.body.tasks;

    } catch (error) {
        console.log("Error::", error.message);
    }

    return {
      props: {
        advocateProfiles: advocateProfs
      },
  
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 60 seconds
      revalidate: 1000, // In seconds
    };
  
}