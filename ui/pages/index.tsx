import useSwr from "swr";
import styles from "@/styles/Home.module.css";
import fetcher from "@/utils/fetcher";
import { GetServerSideProps, NextPage } from "next";

interface User {
  _id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  session: string;
  iat: number;
  exp: number;
}

const Home: NextPage<{ fallbackData: User }> = ({ fallbackData }) => {
  const { data, error } = useSwr<User>(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
    fetcher,
    { fallbackData }
  );
  if (data) {
    return <div>Welcome! {JSON.stringify(data.name)}</div>;
  }
  return <div className={styles.center}>Please login.</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetcher(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
    context.req.headers
  );

  return { props: { fallbackData: data } };
};

export default Home;
