import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack>
      <VStack direction='row'>
        <Box bg='white' borderRadius='9px' >
          <Image
            borderRadius='9px'
            boxSize='100%'
            src={imageSrc}
            alt={title}
          />
          <Text color='black' style={{ fontWeight: '14px'}} p={2}>{title}</Text>

          <Text color='#64748b' p={2} noOfLines={2}>{description}</Text>
          <Text color='black' p={2}>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>

        </Box>
      </VStack>

    </HStack>
  );
};

export default Card;
