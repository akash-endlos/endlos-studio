import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share';
import { AiFillCopy, AiOutlineCopy } from 'react-icons/ai';

const BlogShare = ({ title }) => {
  const [currentUrl, setCurrentUrl] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 400); // Reset isCopied to false after 2 seconds
  };

  return (
    <>
      <div className="justify-between items-center hidden xl:flex gap-2">
        <small className="pr-5 font-semibold text-lg">Share On: </small>
        <WhatsappShareButton url={currentUrl} title={title}>
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>

        <FacebookShareButton url={currentUrl} quote={title}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>

        <LinkedinShareButton url={currentUrl} source={title} title={title} summary={title}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>

        <button onClick={copyToClipboard} className="p-2">
          {isCopied ? <AiOutlineCopy size={28} /> : <AiFillCopy size={28} />}
        </button>
      </div>
    </>
  );
};

export default BlogShare;
