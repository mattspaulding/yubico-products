import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getAllProductsData } from "../lib/products";
import Link from "next/link";

export default function Home({ allProductsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Yubico Products</h2>
        <ul className={utilStyles.list}>
          {allProductsData.map(({ product_id, product_name }) => (
            <li className={utilStyles.listItem} key={product_id}>
              <Link href={`/products/${product_id}`}>
                <a>{product_name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allProductsData = await getAllProductsData();
  return {
    props: {
      allProductsData,
    },
  };
}
