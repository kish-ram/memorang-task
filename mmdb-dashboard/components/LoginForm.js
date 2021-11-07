import Link from "next/link";
import { useState } from "react";
import {
  Form,
  FormControl,
  Button,
  FormLabel,
  FormGroup,
} from "react-bootstrap";

const LoginForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

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
      <Button variant="primary" type="submit">
        LogIn
      </Button>
      <span>
      <Link href="/signup">
        <a style={{ textDecoration:"none", fontStyle: "italic", fontSize: "1em" }}>{" "}Create account?</a>
      </Link>
      </span>
    </Form>
  );
};

export default LoginForm;
