import React, { useState } from "react";
import { Text, Input, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

      const result = await axios.post("http://localhost:3001/signup", {username, email, password,confirmPassword})
      .then(result => {console.log(result)
        navigate('/signin')
    })
    .catch(err => console.log(err))

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
          <Input className="input" type="text" name="username" placeholder="Username" onChange={handleChange}/>
        </label>
        <label>
          Email:
          <Input className="input" type="email" name="email" placeholder="Email" onChange={handleChange} />
        </label>
        <label>
          Password:
          <Input className="input" type="password" name="password" placeholder="Password" onChange={handleChange} />
        </label>
        <label>
          Confirm Password:
          <Input className="input" type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
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
