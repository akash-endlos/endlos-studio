import Head from "next/head";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export function HeadTag() {
  const metaTags = useSelector((state) => state.allMetatags.payload);
  useEffect(() => {
    if (metaTags) {
      const headTagElement = document.createElement("div");
      headTagElement.innerHTML = metaTags;
      const headElement = document.querySelector("head");
      headElement.appendChild(headTagElement);
    }
  }, [metaTags]);
  return (
    <Head>
     <meta name="google-site-verification" content="QFRVJOgjP7BGBX8Caj1lv93tsw_r738eYFR5N3wnhMM" />
      {/* {metaTags && <meta dangerouslySetInnerHTML={{ __html: metaTags }} />} */}
    </Head>
  );
}
