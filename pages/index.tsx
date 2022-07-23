/* eslint-disable @next/next/no-img-element */

import type { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Pokemon } from "../src/types/pokemon";
import styles from "../styles/Home.module.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const resp = await fetch(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  );

  return {
    props: {
      pokemons: await resp.json(),
    },
  };
};

type Props = {
  pokemons: Pokemon[];
};
const Home = ({ pokemons }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List</title>
      </Head>
      <h2>Pokemon List</h2>
      <div className={styles.grid}>
        {pokemons.slice(0, 10).map((pokemon: Pokemon) => (
          <div className={styles.card} key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.id}`}>
              <a>
                <img
                  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                  alt={pokemon.name}
                />
                <h3>{pokemon.name}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
