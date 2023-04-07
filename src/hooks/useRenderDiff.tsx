import React, { useMemo } from "react";
import { diffWords } from "diff";

interface RenderDiffProps {
  oldString: string;
  newString: string;
}

const useRenderDiff = ({ oldString, newString }: RenderDiffProps) => {
  const diffs = useMemo(() => diffWords(oldString, newString, {}), [oldString, newString]);

  const renderDiff = () => (
    <div>
      {diffs.map((diff, index) => {
        if (diff.removed) return null;
        return (
          <span key={index} className={diff.added ? "bg-green-300" : ""}>
            {diff.value}
          </span>
        );
      })}
    </div>
  );

  return { renderDiff };
};

export default useRenderDiff;
