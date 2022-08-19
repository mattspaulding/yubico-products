import Layout from "../../components/layout";
import { getAllProductIds, getProductData } from "../../lib/products";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";

export default function Product({ productData }) {
  return (
    <Layout>
      <Head>
        <title>{productData.product_name}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{productData.product_name}</h1>
      </article>
      <div>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllProductIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const productData = await getProductData(params.id);
  return {
    props: {
      productData,
    },
  };
}
