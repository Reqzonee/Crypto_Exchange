import React from "react";
import { Text, Input, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
    // Here you can submit the formDataObj to your backend
  };

  return (
    <form className="form" onSubmit={handleSubmit} style={{width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div>
      <Text className="title" fontSize="28px" color="royalblue" fontWeight="600" letterSpacing="-1px" pb="10px">
        Sign Up
      </Text>
      <Text className="message" color="rgba(88, 87, 87, 0.822)" fontSize="14px">
        Please fill in this form to create an account.
      </Text>
      <div className="flex" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label>
          Username:
          <Input className="input" type="text" name="username" placeholder="Username" />
        </label>
        <label>
          Email:
          <Input className="input" type="email" name="email" placeholder="Email" />
        </label>
        <label>
          Password:
          <Input className="input" type="password" name="password" placeholder="Password" />
        </label>
        <label>
          Confirm Password:
          <Input className="input" type="password" name="confirmPassword" placeholder="Confirm Password" />
        </label>
      </div>
      <Button className="submit" type="submit" bg="royalblue" borderRadius="10px" color="#fff" fontSize="16px" _hover={{ bg: "rgb(56, 90, 194)" }} mt="10px">
        Sign Up
      </Button>
      <Text className="signin" textAlign="center" fontSize="14px">
        Already have an account? <a href="#" style={{ color: "royalblue" }}><Link to="/signin">SignIn</Link></a>
      </Text>
      </div>
    </form>
  );
};

export default SignUpForm;
