import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
    const cardConfig = {
        color: 'black',
        backgroundColor: 'white',
        borderRadius: '10px'
    };

  return (
    <VStack style={cardConfig}>
        <Image src={imageSrc} alt={title} borderRadius={10} />
        <VStack spacing={3} p={3} alignItems={"flex-start"} >
            <Heading size="md" >{title}</Heading>
            <Text color={"dark-grey"} fontWeight={"lighter"} fontSize={"sm"} >{description}</Text>
            <HStack style={{cursor: 'pointer'}}>
                <a href="#" title={`Go to ${title}`}>
                  See more
                  <FontAwesomeIcon icon={faArrowRight} size="1x" style={{marginLeft:'5px'}}/>
                </a>
            </HStack>
        </VStack>
    </VStack>
  );
};

export default Card;