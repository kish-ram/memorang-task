import Head from "next/head";
import LoginForm from '../components/LoginForm';

export const siteTitle = "MMDb | Login";

export default function Login() {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <LoginForm/>
    </div>
  );
}
