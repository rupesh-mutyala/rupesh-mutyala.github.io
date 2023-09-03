import Layout from "@/packages/Layout";
import './styles.css';

function MyApp({ Component, pageProps }) {
    return (
      <Layout>
        <title>Mercor Frontend Coding Challenge</title>

        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    );
  }
  
  export default MyApp;