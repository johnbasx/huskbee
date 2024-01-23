import { copyTextToClipboard } from '@utils/lib';
import React, { useState } from 'react';

const useCopyClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyClick = (text: string) => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(text)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { isCopied, setIsCopied, handleCopyClick };
};

export default useCopyClipboard;
