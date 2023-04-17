import { Flex, HStack, Text, Box, VStack, Divider } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import AliceCar from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const MotionFlex = motion(Flex);

function CarouselComp(props) {
  const [activeIndex, setActiveSlide] = useState(0);
  const [carouselPadding, setCarouselPadding] = useState(); // used for calculcate padding
  const refCar = useRef();

  //Timezone display options
  const options = (timeZone) => ({
    timeZone,
    timeZoneName: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCarouselPadding(window.innerWidth / 2 - 170);
    }
  }, []);

  const items = props.events.map((event, index) => {
    const formattedDate = new Date(event.start.dateTime).toLocaleString(
      'en-US',
      options(event.start.timeZone)
    );

    const ref = useRef();
    return (
      <Flex w="400px" h="200px" p="0 10px" key={index} boxShadow="md">
        <Flex w="100%" h="100%" position="relative">
          <Flex
            w="100%"
            h="100%"
            p={4}
            onClick={() => console.log(ref)}
            ref={ref}
            borderRadius="md"
            overflow="hidden"
            bg={activeIndex === index ? 'gray.200' : 'gray.600'}
            boxShadow={
              activeIndex === index
                ? 'inset 0 0 15px rgba(0, 0, 0, 0.8)'
                : 'inset 0 0 45px rgba(0, 0, 0, 1.0)'
            }
            color="blackAlpha.800"
          >
            <VStack spacing={4}>
              <Text noOfLines={1} fontFamily={'Open Sans'} fontSize={18}>
                {event.summary}
              </Text>
              <Divider border={'1px'} borderColor={'blackAlpha.800'} />
              <Text fontSize={16} fontWeight={600}>
                {formattedDate}
              </Text>
              <Text align={'center'} as={'i'}>
                {event.location}
              </Text>
            </VStack>
          </Flex>
        </Flex>
      </Flex>
    );
  });

  const renderDotsItem = ({ isActive }) => {
    return isActive ? (
      <Flex
        cursor="pointer"
        m="0 5px"
        borderRadius="50px"
        w="12px"
        h="12px"
        bgColor="#D3004A"
        transition="0.5s"
      />
    ) : (
      <Flex
        cursor="pointer"
        m="0 5px"
        borderRadius="50px"
        w="12px"
        h="12px"
        bgColor="#bababb"
        transition="0.5s"
      />
    );
  };

  const onSlideChange = () => {
    setActiveSlide(refCar.current.state.activeIndex);
  };

  return (
    <AliceCar
      ref={refCar}
      paddingLeft={carouselPadding}
      paddingRight={carouselPadding}
      disableButtonsControls
      autoWidth
      // infinite
      mouseTracking
      touchTracking
      items={items}
      renderDotsItem={renderDotsItem}
      activeIndex={activeIndex}
      onSlideChanged={onSlideChange}
    />
    /* <Flex pointerEvents="none" pt="180px" w="100%" position="absolute">
        <Icon
          pointerEvents="visible"
          onClick={() => refCar.current && (refCar.current as any).slidePrev()}
          color="#D3004A"
          cursor="pointer"
          w="60px"
          h="60px"
          as={IoIosArrowBack}
        />
        <Icon
          pointerEvents="visible"
          onClick={() => refCar.current && (refCar.current as any).slideNext()}
          color="#D3004A"
          ml="auto"
          cursor="pointer"
          w="60px"
          h="60px"
          as={IoIosArrowForward}
        />
      </Flex> */
    // </Flex>
  );
}

export default CarouselComp;
