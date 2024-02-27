import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Center, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";

const Coins = () => {
  const url = `https://api.coingecko.com/api/v3`;

  const [coins, setCoins] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [page, setpage] = useState(1);

  const [currency, setcurrency] = useState("inr");

  const currencysymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setpage(page);
    setloading(true);
  };

  const btns = new Array(132).fill(1);


  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${url}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        console.log(data);
        setloading(false);
      } catch (error) {
        seterror(true);
        setloading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent message={"Error while Fetching Coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Center h="100vh">
          {" "}
          {/* Centering the Loader vertically */}
          <Loader />
        </Center>
      ) : (
        <>
        <RadioGroup value={currency}>
          <HStack spacing={"4"}>
            <Radio value={"inr"}> INR </Radio>
            <Radio value={"usd"}> USD </Radio>
            <Radio value={"eur"}> EUR </Radio>
          </HStack>
        </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
                key={i.id}
                name={i.name}
                img={i.image}
                symbol={i.symbol}
                id={i.id}
                price={i.current_price}
                rank={i.trust_score_rank}
                currencysymbol={currencysymbol}
              />
            ))}
          </HStack>


          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
