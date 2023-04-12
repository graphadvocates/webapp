import { Divider,Text, VStack } from "@chakra-ui/react";

export default function Calendar() {
    return (
        <VStack>
            <Text textStyle={"h3"} p={10}>
                Upcoming Events
            </Text>
            <Divider p={"2"} />
            <iframe
                src="https://calendar.google.com/calendar/embed?src=info%40graphadvocates.com&ctz=America%2FLos_Angeles"
                width="800"
                height="600"
                scrolling="no"
            ></iframe>{" "}
            <iframe
                src="https://calendar.google.com/calendar/embed?src=itrajguqklm6d4iq5tvaq28tpc%40group.calendar.google.com&ctz=America%2FLos_Angeles"
                width="800"
                height="600"
                scrolling="no"
            ></iframe>
        </VStack>
    );
}
