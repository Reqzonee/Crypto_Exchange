import React from "react";
import { Box, Text } from "@chakra-ui/react";
import btcVideo from "../assets/eth.mp4";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor="blackAlpha.900" w="full" h="85vh" position="relative">
      <motion.div
        style={{
          height: "60vh",
        }}
        // animate={{
        //   translateY: "20px",
        // }}
        // transition={{
        //   duration: 1,
        //   repeat: Infinity,
        //   repeatType: "reverse",
        // }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "150%",
            height: "150%",
            objectFit: "contain",
            filter: "grayscale(1)",
          }}
        >
          <source src={btcVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      <Text
        fontSize="6xl"
        textAlign="center"
        fontWeight="thin"
        color="whiteAlpha.700"
        mt="150"
        fontFamily="sans-serif"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="1"
      >
        {/* Xcrypto */}
      </Text>
    </Box>
  );
};

export default Home;
