import Head from "next/head";
import SignUpForm from '../components/SignUpForm';

export const siteTitle = "MMDb | SignUp";

export default function SignUp() {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <SignUpForm/>
    </div>
  );
}
