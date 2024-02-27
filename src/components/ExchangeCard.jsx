import { VStack } from "@chakra-ui/react";
import React from "react";
import { Image, Heading, Text } from "@chakra-ui/react";

const ExchangeCard = ({ name, img, rank, url }) => {
  return (
    <div>
      <a href={url} target="blank">
        <VStack w={"60"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"}
        css={{
            "&:hover":{
                transform:"scale(1.1)"
            }
        }}>
          <Image
            src={img}
            w={"10"}
            h={"10"}
            objectFit={"contain"}
            alt={"Exchange"}
          />

          <Heading size={"md"} noOfLines={1}>{rank}</Heading>

          <Text noOfLines={1}>{name}</Text>
        </VStack>
      </a>
    </div>
  );
};

export default ExchangeCard;
