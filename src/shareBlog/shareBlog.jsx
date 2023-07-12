import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton, // Import LinkedinShareButton
  LinkedinIcon // Import LinkedinIcon
} from 'react-share';

const BlogShare = ({ title }) => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  return (
    <>
      <div className="justify-between items-center hidden xl:flex gap-2">
        <small className="pr-5 font-semibold text-lg">Share On: </small>
        <WhatsappShareButton url={currentUrl} title={title}>
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>

        {/* <TwitterShareButton url={currentUrl} title={title}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton> */}

        <FacebookShareButton url={currentUrl} quote={title}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>

        <LinkedinShareButton url={currentUrl} source={title} title={title} summary={title}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
      </div>
    </>
  );
};

export default BlogShare;
