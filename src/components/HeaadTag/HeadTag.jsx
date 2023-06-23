import Head from "next/head";
import { useSelector } from "react-redux";

export function HeadTag() {
  const metaTags = useSelector((state) => state.allMetatags.payload);
  return (
    <Head>
      <meta name="google-site-verification" content="QFRVJOgjP7BGBX8Caj1lv93tsw_r738eYFR5N3wnhMM" />
      {/* {metaTags && <meta dangerouslySetInnerHTML={{ __html: metaTags }} />} */}
      <title> {metaTags?.title}</title>
      <meta name="description" content={metaTags?.description} />
      <meta name="keywords" content={metaTags?.keywords} />
      <meta property="og:title" content={metaTags?.ogTitle} />
      <meta property="og:description" content={metaTags?.ogDescription} />
      <meta property="og:site_name" content="Endlos Studio " />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={metaTags?.ogImageUrl}/>
      <meta property="og:url" content="https://endlos.studio/ " />
      <meta name="twitter:title" content={metaTags?.twitterTitle}/>
      <meta name="twitter:description" content={metaTags?.twitterDescription} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://endlos.studio/" />
      <meta name="twitter:image" content={metaTags?.twitterImage} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://endlos.studio/  " />
    </Head>
  );
}
