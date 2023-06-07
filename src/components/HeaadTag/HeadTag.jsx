import Head from "next/head";
import { useSelector } from "react-redux";

export function HeadTag() {
  const metaTags = useSelector((state) => state.allMetatags.payload);
  if (!metaTags) {
    return (
      <Head>
        <title>Endlos Studio</title>
        <meta name="description" content="Endlos Studio offers virtual production, architectural visualization & game development expertise. Experience the power of Unreal Engine 5.2 with us." />
        <meta name="keywords" content="unreal engine, Virtual Production, Architectural Visualization, Game Development, unreal engine 5.2, Endlos Studio" />
        <meta property="og:title" content="Unreal Engine 5.2 is now available! | Endlos Studio" />
        <meta property="og:description" content="Endlos Studio offers virtual production, architectural visualization & game development expertise. Experience the power of Unreal Engine 5.2 with us." />
        <meta property="og:site_name" content="Endlos Studio " />
        <meta property="og:type" content="article" />
        <meta property="og:image" content=" " />
        <meta property="og:url" content="https://endlos.studio/ " />
        <meta name="twitter:title" content="Unreal Engine 5.2 is now available! | Endlos Studio" />
        <meta name="twitter:description" content="Endlos Studio offers virtual production, architectural visualization & game development expertise. Experience the power of Unreal Engine 5.2 with us." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://endlos.studio/" />
        <meta name="twitter:image" content=" " />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://endlos.studio/  "></link>
      </Head>
    );
  }

  return (
    <Head>
      {metaTags && <meta dangerouslySetInnerHTML={{ __html: metaTags }} />}
    </Head>
  );
}
