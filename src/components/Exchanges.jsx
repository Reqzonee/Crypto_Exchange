import React, { useEffect, useState } from "react";
import axios from "axios";
import { Center, Container, HStack } from "@chakra-ui/react";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";
import ErrorComponent from "./ErrorComponent";

const Exchanges = () => {
  const url = `https://api.coingecko.com/api/v3`;

  const [exchanges, setexchanges] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${url}/exchanges`);
        setexchanges(data);
        setloading(false);
      } catch (error) {
        seterror(true);
        setloading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error) return <ErrorComponent message={"Error while Fetching request"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Center h="100vh">
          {" "}
          {/* Centering the Loader vertically */}
          <Loader />
        </Center>
      ) : (
        <HStack wrap={"wrap"} justifyContent={"space-evenly"} align="center" justify="center">
          {exchanges.map((i) => (
            <ExchangeCard
              key={i.id}
              name={i.name}
              img={i.image}
              rank={i.trust_score_rank}
              url={i.url}
            />
          ))}
        </HStack>
      )}
    </Container>
  );
};

export default Exchanges;
