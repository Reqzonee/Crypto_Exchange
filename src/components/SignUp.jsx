import React from "react";
import { Box, Flex, Text, Input, Button } from "@chakra-ui/react";

const SignUpForm = () => {
  return (
    <Box className="form" maxW="350px" bg="#fff" p="20px" borderRadius="20px">
      <Text className="title" fontSize="28px" color="royalblue" fontWeight="600" letterSpacing="-1px" pos="relative" alignItems="center" pl="30px">
        Sign Up
        <Box pos="absolute" content="" h="16px" w="16px" borderRadius="50%" left="0px" bg="royalblue"></Box>
        <Box pos="absolute" content="" h="18px" w="18px" borderRadius="50%" left="0px" bg="royalblue" animation="pulse 1s linear infinite"></Box>
      </Text>
      <Text className="message" color="rgba(88, 87, 87, 0.822)" fontSize="14px">
        Please fill in this form to create an account.
      </Text>
      <Flex className="flex" direction="column" gap="10px">
        <label>
          <Input className="input" type="text" placeholder="Username" />
          <span>Username</span>
        </label>
        <label>
          <Input className="input" type="email" placeholder="Email" />
          <span>Email</span>
        </label>
        <label>
          <Input className="input" type="password" placeholder="Password" />
          <span>Password</span>
        </label>
        <label>
          <Input className="input" type="password" placeholder="Confirm Password" />
          <span>Confirm Password</span>
        </label>
      </Flex>
      <Button className="submit" bg="royalblue" borderRadius="10px" color="#fff" fontSize="16px" _hover={{ bg: "rgb(56, 90, 194)" }}>
        Sign Up
      </Button>
      <Text className="signin" textAlign="center" fontSize="14px">
        Already have an account? <a href="#" color="royalblue">Sign in</a>
      </Text>
    </Box>
  );
};

export default SignUpForm;
