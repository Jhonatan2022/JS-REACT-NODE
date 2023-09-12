import { Helmet } from "react-helmet";
import { Products } from "../../Components/Products";
import initialState from "../../initialState";

function Home() {
  return (
    <>
      <Helmet>
        <title>Store Conf | Home</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TU_USER" />
        <meta name="twitter:creator" content="@TU_USER" />
        <meta name="twitter:title" content="Store Conf" />
        <meta name="twitter:description" content="Store Conf" />
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:title" content="Store Conf" />
        <meta property="og:description" content="Store Conf" />
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:url" content="store-conf" />
        <meta property="og:site_name" content="Store Conf" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <Products products={initialState.products} />
    </>
  );
}

export { Home };
