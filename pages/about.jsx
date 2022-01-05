import React from "react";
import { useRouter } from "next/router";
import { Button } from "../components/Button";
import styles from "../styles/Home.module.css";

export default function Aloo() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>About</h1>
        <p>This is the about page</p>
        <Button onClick={() => router.back()} value="1">Go back</Button>
      </main>
    </div>
  );
}
