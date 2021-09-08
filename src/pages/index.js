import Head from "next/head";
import Header from "../components/header/Header";
import ProductFeed from "../components/productFeed/ProductFeed";
import styles from "../styles/_index.module.scss";

//components
import Banner from "../components/banner/Banner";

export default function Home({products}) {
  return (
    <div className="homePage">
      <Head>
        <title>Amazon 2.0</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet"/>
      </Head>

      <Header/>

      <main className="feedSection">
        <Banner/>
        <ProductFeed products={products}/>
      </main>
     
    </div>
  );
}

//FOR SERVER SODE RENDERING

export async function getServerSideProps(context) {

  const products = await fetch("https://fakestoreapi.com/products").then(

  (res) => res.json()
  );

  return { props: {

    products,

    },
  };
}

//API ENDPOINT
//GET REQUEST 
//https://fakestoreapi.com/products