import { Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';


const CoinCard = ({ name, img, symbol, id, price, currencysymbol="₹"}) => {
  return (
    <div>
      <Link to={`/coin/${id}`}>
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

          <Heading size={"md"} noOfLines={1}>{symbol}</Heading>

          <Text noOfLines={1}>{name}</Text>
          <Text noOfLines={1}>{price ? `${currencysymbol}${price}`:"NA"}</Text>
        </VStack>
      </Link>
    </div>
  );
};


export default CoinCard
