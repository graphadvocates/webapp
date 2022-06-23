import {
    Box,
} from "@chakra-ui/react";
import MainNavigation from "../../components/layout/MainNavigation";
import ProfileList from "../../components/ProfileList";


function advocates(props){
    return(
        <Box>
            <MainNavigation />
            <ProfileList profiles={props.advocateProfiles}/>
        </Box>
    );
}

export default advocates;


//This is server-side code
export async function getStaticProps(context) {

    const { Clickup } = require("clickup.js");
    const token = "pk_54085711_UPTD4BLL3SPMJI2VUD5BYK359WQ0HRQA"; //100req/min API access token
    const clickup = new Clickup(token);
    var advocateProfs = [];
  
    try {
      //profile list id = 146225010
      //member list id = 13pgd4-7347
      //advocate list id = 13pgd4-7367
      
      //get advocate profiles
      data = await clickup.lists.getTasks("13pgd4-7367", 0);
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
      revalidate: 1, // In seconds
    };
  
}