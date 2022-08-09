import {
    Box,
    Button,
    Flex,
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from "@chakra-ui/react";
import { useState } from "react";

export default function daoresources() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    function submitForm(){
        console.log("ello");
    }

    return (
        <Box>
            <Tabs>
                <TabList>
                    <Tab>Advocate Application</Tab>
                    <Tab>Grant Application</Tab>
                    <Tab>Advocate Grant Form</Tab>
                    <Tab>Advocate Reimbursement</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel><iframe onSubmit={submitForm} class="clickup-embed clickup-dynamic-height" src="https://forms.clickup.com/37437860/f/13pgd4-4007/RXO7DCQPT5XCA8X7R7" onwheel="" width="100%" height="100%"></iframe><script async src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js"></script></TabPanel>
                    <TabPanel><iframe class="clickup-embed clickup-dynamic-height" src="https://forms.clickup.com/37437860/f/13pgd4-3987/1HEIW31922QZ1CRS64" onwheel="" width="100%" height="100%"></iframe><script async src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js"></script></TabPanel>
                    <TabPanel><iframe class="clickup-embed clickup-dynamic-height" src="https://forms.clickup.com/37437860/f/13pgd4-7227/SPBI1F0O1M7LXTL5LH" onwheel="" width="100%" height="100%"></iframe><script async src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js"></script></TabPanel>
                    <TabPanel><iframe class="clickup-embed clickup-dynamic-height" src="https://forms.clickup.com/37437860/f/13pgd4-7140/XHKARLTPHSZ7JBMVD2" onwheel="" width="100%" height="100%"></iframe><script async src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js"></script></TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
}