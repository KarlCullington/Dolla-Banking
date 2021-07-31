import React from "react";
import {
  Container,
  FormWrap,
  FormContent,
  Icon,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";

const Signin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">dolla</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" placeholder=""></FormInput>

              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password"></FormInput>
              <FormButton type="submit" to="/">
                Continue
              </FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;
