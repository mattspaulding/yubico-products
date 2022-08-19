import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";

const name = "Yubico Products";
export const siteTitle = "Yubico";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Yubico" />
      </Head>
      <div className={styles.sidebar}>
        <Link href={"/"}>
          <a>
            <Image
              priority
              src="/images/yubico_logo.png"
              width={85}
              height={25}
              alt={name}
            />
          </a>
        </Link>
      </div>
      <div className={styles.mainContainer}>
        <header className={styles.header}>
          <Image
            priority
            src="/images/yubico_logo.png"
            width={256}
            height={75}
            alt={name}
          />
        </header>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
