import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import {
  Form,
  FormControl,
  Button,
  FormLabel,
  FormGroup,
} from "react-bootstrap";

export const siteTitle = "MMDb | SignUp";

export default function SignUp() {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <PageHeader>
          </PageHeader> */}
          <Layout>
      <div className="login-wrap">
        <Form className="form-signin">
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <br/>
            <FormControl
              type="text"
              placeholder="useremail@domain.com"
              className="mr-sm-2"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>
              Password
            </FormLabel>
            <br/>
            <FormControl type="password" className="mr-sm-2" />
          </FormGroup>
          <FormGroup>
            <FormLabel>
              Confirm Password
            </FormLabel>
            <br/>
            <FormControl type="password" className="mr-sm-2" />
          </FormGroup>
          <Button className="btn-lg btn-block" variant="primary">
            Sign Up
          </Button>{" "}
        </Form>
      </div>
      </Layout>
      <style jsx>
        {`
          .login-wrap {
            height: 90vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .form-signin {
            width: 100%;
            max-width: 330px;
            padding: 15px;
            margin: 0 auto;
          }
          h1 {
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}