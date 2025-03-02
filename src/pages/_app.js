import "../styles/globals.css"; // ✅ Move it here

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
