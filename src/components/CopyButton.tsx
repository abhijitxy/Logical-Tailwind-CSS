import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import classNames from "@/lib/classNames";
import React from "react";

const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  const { copy, isCopying, copiedText } = useCopyToClipboard();
  const hasCopied = !!copiedText;
  const disabledBtn = text.length === 0;
  return (
    <button
      type="button"
      disabled={disabledBtn}
      className={classNames(
        disabledBtn
          ? "cursor-not-allowed bg-gray-400"
          : "bg-gradient-to-br from-purple-600 to-blue-500",
        "rounded-lg text-center text-sm font-medium text-white mie-2 mbe-2 pli-5 plb-2.5 hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
      )}
      onClick={() => copy(text)}
    >
      {isCopying ? "Copying..." : hasCopied ? "Copied!" : "Copy"}
    </button>
  );
};

interface CopyButtonProps {
  text: string;
}

export default CopyButton;
