import Login from "../components/auth/Login";
import Layout from "../components/layout/Layout";

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function LoginPage(props) {
  return (
    <Layout title="login ">
      <Login />
    </Layout>
  );
}
