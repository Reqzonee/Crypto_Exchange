import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  HStack,
  Image,
  Progress,
  Radio,
  RadioGroup,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import axios from "axios";
import { useParams } from "react-router-dom";
import { server } from "../index";
import ErrorComponent from "./ErrorComponent";
import { Chart } from "chart.js";
import ChartComponent from "./ChartComponent";

const CoinDetails = () => {
  const url = `https://api.coingecko.com/api/v3`;

  const [coin, setCoin] = useState({});
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [currency, setcurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const currencysymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const btns=["24h","7d","14d","30d","60d","200d","1y","max"];

  const switchChartStats = (key)=>{
switch (key) {
  case "24h":
    setDays("24h");
    setloading(true);
    break;
  case "7d":
    setDays("7d");
    setloading(true);
    break;
  case "14d":
    setDays("14d");
    setloading(true);
    break;
  case "30d":
    setDays("30d");
    setloading(true);
    break;
  case "60d":
    setDays("60d");
    setloading(true);
    break;
  case "200d":
    setDays("200d");
    setloading(true);
    break;
  case "1y":
    setDays("365d");
    setloading(true);
    break;
  case "max":
    setDays("max");
    setloading(true);
    break;
  default:
    setDays("24h");
    setloading(true);
    break;
}
  }

  const params = useParams();
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${url}/coins/${params.id}`);
        // console.log(data);
        const {data:chartData} = await axios.get(`${url}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);
        // console.log(chartData);
        setCoin(data);
        setChartArray(chartData.prices);
        setloading(false);
      } catch (error) {
        seterror(true);
        setloading(false);
      }
    };
    fetchCoin();
  }, [params.id, currency, days]);

  if (error) return <ErrorComponent message={"Error while Fetching Coin"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Center h="100vh">
        {/* {" "} */}
        {/* Centering the Loader vertically */}
        <Loader />
      </Center>
      ) : (
        <>
          <Box width={"full"} borderWidth={1}>
            <ChartComponent arr={chartArray} currency={currencysymbol} days={days}/>
          </Box>

          <HStack p="4" overflowX={"auto"}>
{
  btns.map((i)=>(
    <Button key={i} onClick={()=>switchChartStats(i)}>{i}</Button>
  ))
}
          </HStack> 

          <RadioGroup value={currency} onChange={setcurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}> INR </Radio>
              <Radio value={"usd"}> USD </Radio>
              <Radio value={"eur"}> EUR </Radio>
            </HStack>
          </RadioGroup>

          <VStack spacing={"4"} p="16" alignItems={"flex-start"}>
            <Text fontSize={"small"} alignSelf="center" opacity={0.7}>
              Last Updated on{" "}
              {Date(coin.market_data.last_updated).split("G")[0]}
            </Text>

            <Image
              src={coin.image.large}
              w={"16"}
              h={"16"}
              objectFit={"contain"}
            />

            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>
                {currencysymbol}
                {coin.market_data.current_price[currency]}
              </StatNumber>

              <StatHelpText>
                <StatArrow
                  type={
                    coin.market_data.price_change_percentage_24h > 0
                      ? "increase"
                      : "decrease"
                  }
                ></StatArrow>
                {coin.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>

            <Badge fontSize={"2xl"} bgColor={"blackAlpha.800"} color={"white"}>
              {`#${coin.market_cap_rank}`}
            </Badge>

            <CustomBar
              high={`${currencysymbol}${coin.market_data.high_24h[currency]}`}
              low={`${currencysymbol}${coin.market_data.low_24h[currency]}`}
            />

            <Box w={"full"} p="4">
              <Item title={"Max Supply"} value={coin.market_data.max_supply}/>
              <Item title={"Circulating Supply"} value={coin.market_data.circulating_supply}/>
              <Item title={"Market Cap"} value={`${currencysymbol}${coin.market_data.market_cap[currency]}`}/>
              
              <Item title={"All Time Low"} value={`${currencysymbol}${coin.market_data.atl[currency]}`}/>
              <Item title={"All Time High"} value={`${currencysymbol}${coin.market_data.ath[currency]}`}/>


            </Box>
          </VStack>
        </>
      )}
    </Container>
  );
};

const Item=({title, value})=>(
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>{title}</Text>
    <Text>{value}</Text>
  </HStack>
)

const CustomBar = ({ high, low }) => (
  <VStack w={"full"}>
    <Progress value={50} colorScheme={"teal"} w={"full"} />
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme={"red"} />
      <Text fontSize={"small"}>24H Range</Text>
      <Badge children={low} colorScheme={"green"} />
    </HStack>
  </VStack>
);

export default CoinDetails;
