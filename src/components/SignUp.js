// import { useRouter } from "next/router";
// import { useEffect, useContext, useState } from "react";
// import { Container, Form, Button } from "react-bootstrap";
// import styled from "styled-components";
// import { AuthContext } from "../../context/AuthContext";

// const Wrapper = styled(Container)``;
// const LoginForm = styled(Form)`
//   h1 {
//     margin: 22px auto 20px;
//     text-align: center;
//   }
//   background-color: rgba(var(--d87, 255, 255, 255), 1);
//   border: 1px solid #dbdbdb;
//   border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
//   border-radius: 1px;
//   margin: 0 0 10px;
//   padding: 10px 0;
//   max-width: 350px;
//   margin: auto;
//   height: 400px;
//   a {
//     color: rgba(var(--fe0, 0, 55, 107), 1);
//     font-size: 12px;
//     line-height: 14px;
//     margin-top: 12px;
//     text-align: center;
//     margin: 120px;
//   }
// `;
// const Input = styled(Form.Control)`
//   width: 250px;
//   margin: auto;
//   background: rgba(var(--b3f, 250, 250, 250), 1);
//   border: 0;
//   border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
// `;
// const LoginButton = styled(Button)`
//   margin-bottom: 8px;
//   border: 1px solid transparent;
//   width: 250px;
//   margin: 0 auto;
//   display: block;
// `;

// const FormElement = styled.div``;
// const LoginLink = styled.div`
//   background-color: rgba(var(--d87, 255, 255, 255), 1);
//   border: 1px solid #dbdbdb;
//   border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
//   border-radius: 1px;
//   margin: 0 0 10px;
//   padding: 10px 0;
//   max-width: 350px;
//   margin: auto;
//   margin-top: 10px;
//   p {
//     font-size: 14px;
//     margin: 15px;
//     text-align: center;
//     a {
//       color: rgba(var(--d69, 0, 149, 246), 1);
//     }
//   }
// `;
// const signup = () => {
// //   const router = useRouter();
//   const [userInfo, setUserInfo] = useState({
//     firstName: "nour",
//     lastName: "elsayed",
//     email: "nour@gmail.com",
//     password: "Test123123",
//   });

//   const handleChange = (e) => {
//     e.preventDefault();
//     switch (e.target.id) {
//       case "firstName":
//         setUserInfo({
//           ...userInfo,
//           firstName: e.target.value,
//         });
//         break;
//       case "lastName":
//         setUserInfo({
//           ...userInfo,
//           lastName: e.target.value,
//         });
//         break;
//       case "email":
//         setUserInfo({
//           ...userInfo,
//           email: e.target.value,
//         });
//         break;
//       case "password":
//         setUserInfo({
//           ...userInfo,
//           password: e.target.value,
//         });
//         break;
//         default:
//     }
    
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     signup(userInfo);
//   };

//   return (
//     <Wrapper>
//       <LoginForm onSubmit={handleSubmit}>
//         <h1> Pocket Post </h1>
//         {/* <FormElement> */}
//         <Form.Group controlId="firstName">
//           <Input
//             type="text"
//             placeholder="FirstName"
//             value={userInfo.firstName}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="lastName">
//           <Input
//             type="lastName"
//             placeholder="LastName"
//             value={userInfo.lastName}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="email">
//           <Input
//             type="email"
//             placeholder="Enter email"
//             value={userInfo.email}
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <Form.Group controlId="password">
//           <Input
//             type="password"
//             placeholder="Password"
//             value={userInfo.password}
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <LoginButton variant="primary" type="submit">
//           Submit
//         </LoginButton>
//         {/* </FormElement> */}
//         <a>Forget Password?</a>
//       </LoginForm>
//       <LoginLink>
//         <p>
//           Have an account? <a href="/accounts/login">Login</a>
//         </p>
//       </LoginLink>
//     </Wrapper>
//   );
// };

// export default signup;