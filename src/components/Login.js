import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled(Container)``;
const LoginForm = styled(Form)`
  h1 {
    margin: 22px auto 20px;
    text-align: center;
  }
  background-color: rgba(var(--d87, 255, 255, 255), 1);
  border: 1px solid #dbdbdb;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 0;
  max-width: 350px;
  margin: auto;
  height: 400px;
  a {
    color: rgba(var(--fe0, 0, 55, 107), 1);
    font-size: 12px;
    line-height: 14px;
    margin-top: 12px;
    text-align: center;
    margin: 120px;
  }
`;
const Input = styled(Form.Control)`
  width: 250px;
  margin: auto;
  background: rgba(var(--b3f, 250, 250, 250), 1);
  border: 0;
  border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
`;
const LoginButton = styled(Button)`
  margin-bottom: 8px;
  border: 1px solid transparent;
  width: 250px;
  margin: 0 auto;
  display: block;
`;
const Line = styled.div`
  margin: 25px 20px 25px 20px;
  flex-direction: row;
  // align-items: stretch;
  // border: 0 solid #000;
  // box-sizing: border-box;
  // display: flex;
  // flex-shrink: 0;
  // margin: 0;
  // padding: 0;
  // position: relative;
  // }
`;
const Div = styled.div`
  // background-color: rgba(var(--b38,219,219,219),1);
  background-color: #dbdbdb;
  height: 1px;
  position: relative;
  top: 0.45em;
`;
const ORLine = styled.div`
  text-tranform: uppercase;
`;
const FormElement = styled.div`
`;
const SignupLink = styled.div`
  background-color: rgba(var(--d87, 255, 255, 255), 1);
  border: 1px solid #dbdbdb;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 0;
  max-width: 350px;
  margin: auto;
  margin-top: 10px;
  p {
    font-size: 14px;
    margin: 15px;
    text-align: center;
    a {
      color: rgba(var(--d69, 0, 149, 246), 1);
    }
  }
`;
function login() {
  return (
    <Wrapper>
      <LoginForm>
        <h1> Quiz App </h1>
        <FormElement>
          <Form.Group controlId="formBasicEmail">
            <Input type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Input type="password" placeholder="Password" />
          </Form.Group>

          <LoginButton variant="primary" type="submit">
            Submit
          </LoginButton>
        </FormElement>
        {/* <Line>
            <Div> </Div>
                <ORLine>
                    or
                </ORLine>
           <Div></Div>
        </Line> */}
        <a>Forget Password?</a>
      </LoginForm>
      <SignupLink>
        <p>
          Don't have an account? <a href="/accounts/signup">SignUp</a>
        </p>
      </SignupLink>
    </Wrapper>
  );
}

export default login;