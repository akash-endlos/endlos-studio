import Head from "next/head";
import { useSelector } from "react-redux";

export function HeadTag() {
  const metaTags = useSelector((state) => state.allMetatags.payload);

  return (
    <Head>
      {metaTags && <meta dangerouslySetInnerHTML={{ __html: metaTags }} />}
    </Head>
  );
}
