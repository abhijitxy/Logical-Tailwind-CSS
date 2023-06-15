"use client";
import { useMemo, useState } from "react";
import transformerToPluginLogicalTailwindCss from "@/transformer/transformerToPluginLogicalTailwindCss";
import transformerToNativeLogicalTailwindCss from "@/transformer/transformerToNativeLogicalTailwindCss";
import useDebounce from "@/hooks/useDebounce";
import useRenderDiff from "@/hooks/useRenderDiff";
import CopyButton from "@/components/CopyButton";
import Select from "@/components/Select";

export default function Home() {
  const [input, setInput] = useState("");
  const [outputFormat, setOutputFormat] = useState<
    "LOGICAL_PLUGIN" | "NATIVE_TAILWIND"
  >("LOGICAL_PLUGIN");
  const debouncedInput = useDebounce(input, 500);
  const output = useMemo(
    () =>
      outputFormat === "LOGICAL_PLUGIN"
        ? transformerToPluginLogicalTailwindCss(debouncedInput)
        : transformerToNativeLogicalTailwindCss(debouncedInput),
    [debouncedInput, outputFormat]
  );
  const { renderDiff } = useRenderDiff({ oldString: input, newString: output });

  return (
    <>
      <main className="grid grid-rows-[auto,1fr] min-bs-[100dvh] ">
        <div className="bg-blue-600 shadow-lg md:flex md:items-center md:justify-between">
          <div className="flex-1 justify-between min-is-0 plb-4 pli-2 sm:flex ">
            <h2 className="text-2xl font-bold leading-7 text-blue-50 sm:truncate sm:text-3xl sm:tracking-tight">
              To Logical Tailwind CSS
            </h2>
            <div className="flex items-end gap-8 mbs-8 mie-4 sm:mbs-0">
              <Select
                label="Output Format"
                name="outputFormat"
                value={outputFormat}
                onChange={(event) =>
                  setOutputFormat(
                    event.target.value as "LOGICAL_PLUGIN" | "NATIVE_TAILWIND"
                  )
                }
                options={[
                  {
                    id: "1",
                    value: "LOGICAL_PLUGIN",
                    label: "tailwindcss-logical",
                  },
                  {
                    id: "2",
                    value: "NATIVE_TAILWIND",
                    label: "Native Tailwind (v3.3 +)",
                  },
                ]}
              />
              <a
                href="https://github.com/Abhijit20112003/Logical-Tailwind-CSS"
                className="inline-flex items-center font-medium text-white hover:underline"
                target={"_blank"}
                rel="noreferrer"
              >
                Star in Github
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-[auto,1fr] text-lg md:grid-cols-[600px,1fr] md:grid-rows-1">
          <div className="">
            <textarea
              className="block resize-none border-0 bg-slate-900 p-4 text-white/90  caret-pink-500 shadow-sm ring-1 ring-inset ring-gray-300 bs-full is-full placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 sm:plb-1.5"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </div>

          <div className="relative block resize-none overflow-scroll border-0 bg-slate-50 p-4 text-black caret-pink-500 shadow-lg ring-1 ring-inset ring-gray-300 bs-full is-full placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 sm:plb-1.5">
            <div className="absolute right-6 top-6">
              <CopyButton text={output} />
            </div>
            <pre>{renderDiff()}</pre>
          </div>
        </div>
      </main>
    </>
  );
}
