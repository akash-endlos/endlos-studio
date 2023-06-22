import Head from "next/head";
import { useSelector } from "react-redux";

export function HeadTag() {
  const metaTags = useSelector((state) => state.allMetatags.payload);

  return (
    <Head>
      <meta name="google-site-verification" content="QFRVJOgjP7BGBX8Caj1lv93tsw_r738eYFR5N3wnhMM" />
      {metaTags && <meta dangerouslySetInnerHTML={{ __html: metaTags }} />}
    </Head>
  );
}
