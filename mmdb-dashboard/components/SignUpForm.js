import { useState } from "react";
import {
  Form,
  FormControl,
  Button,
  FormLabel,
  FormGroup,
} from "react-bootstrap";

const SignUpForm = () => {

    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log('here')
    if(event.target[1].value != event.target[2].value){
        console.log('if')
        event.target[2].setCustomValidity('Password mismatch');
        event.preventDefault();
        event.stopPropagation();
        setValidated(false);
    }else {
        console.log('else')
        event.target[2].setCustomValidity('');
        setValidated(true);
        form.submit();
    }
    setValidated(true);
  };

//   const setPasswordState = (event) => {
//       let currentPassword = event.target.value;
//       setPassword(currentPassword);
//   }

//   const comparePswd = (event) => {
//     console.log(event)
//     let confirmPassword = event.target.value;
//     console.log(confirmPassword)
//     console.log(password)
//     if(confirmPassword != password) {
//         let form = event.nativeEvent.path[2];
//         form.checkValidity(false);
//         setValidated(false);   
//     }
//   }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <FormGroup className="mb-3" controlId="email">
        <FormLabel>Email</FormLabel>
        <FormControl type="email" name="email" placeholder="useremail@domain.com" pattern='(\w\.?)+@[\w\.-]+\.\w{2,}' required/>
        <FormControl.Feedback type="invalid">
            Please provide a valid email.
          </FormControl.Feedback>
      </FormGroup>

      <FormGroup className="mb-3" controlId="password">
        <FormLabel>Password</FormLabel>
        <FormControl type="password" name="password" required/>
        <FormControl.Feedback type="invalid">
            Please provide a password.
          </FormControl.Feedback>
      </FormGroup>

      <FormGroup className="mb-3" controlId="confirmPassword">
        <FormLabel>Confirm Password</FormLabel>
        <FormControl type="password" name="confirmPassword" required/>
        <FormControl.Feedback type="invalid">
            Password not matching.
          </FormControl.Feedback>
      </FormGroup>
      
      <Button variant="success" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUpForm;
