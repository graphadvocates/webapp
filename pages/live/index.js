import { Divider, VStack } from "@chakra-ui/react";
import Calendar from "../../components/Calendar";
import LiveStream from "../../components/LiveStream";

export default function live() {
    return (
        <VStack>
            <LiveStream />
            <Calendar />
        </VStack>
    );
}
