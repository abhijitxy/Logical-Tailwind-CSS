import { useState } from "react";

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>; // Return success

function useCopyToClipboard(): {
  copiedText: CopiedValue;
  copy: CopyFn;
  isCopying: boolean;
} {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);
  const [isCopying, setIsCopying] = useState(false);

  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return false;
    }

    try {
      setIsCopying(true);
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setCopiedText(null);
      return false;
    } finally {
      setIsCopying(false);
    }
  };

  return { copiedText, copy, isCopying };
}

export default useCopyToClipboard;
