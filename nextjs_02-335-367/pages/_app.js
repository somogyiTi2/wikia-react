import '../styles/globals.css';
import Layout from '../components/layout/Layout';
//ha az _app.js be rakom akkor működik mindenhol.

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
