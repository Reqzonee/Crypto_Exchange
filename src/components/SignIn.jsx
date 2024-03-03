import React from "react";
import { Text, Input, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SignInForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
    // Here you can submit the formDataObj to your backend
  };

  return (
    <form className="form" onSubmit={handleSubmit} style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div>
        <Text className="title" fontSize="28px" color="royalblue" fontWeight="600" letterSpacing="-1px" pb="10px">
          Sign In
        </Text>
        <Text className="message" color="rgba(88, 87, 87, 0.822)" fontSize="14px">
          Please enter your credentials to sign in.
        </Text>
        <div className="flex" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label>
            Email:
            <Input className="input" type="email" name="email" placeholder="Email" />
          </label>
          <label>
            Password:
            <Input className="input" type="password" name="password" placeholder="Password" />
          </label>
        </div>
        <Button className="submit" type="submit" bg="royalblue" borderRadius="10px" color="#fff" fontSize="16px" _hover={{ bg: "rgb(56, 90, 194)" }} mt="10px">
          Sign In
        </Button>
        <Text className="signup" textAlign="center" fontSize="14px">
          Don't have an account? <Link to="/signup" style={{ color: "royalblue" }}>Sign Up</Link>
        </Text>
      </div>
    </form>
  );
};

export default SignInForm;
