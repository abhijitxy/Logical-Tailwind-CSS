const transformations = [
  { originalTailwind: "inset-x-", logicalTailwind: "start-" },
  { originalTailwind: "inset-y-", logicalTailwind: "end-" },
  { originalTailwind: "mx-", logicalTailwind: "ms-" },
  { originalTailwind: "my-", logicalTailwind: "me-" },
  { originalTailwind: "px-", logicalTailwind: "ps-" },
  { originalTailwind: "py-", logicalTailwind: "pe-" },
  { originalTailwind: "rounded-l-", logicalTailwind: "rounded-s-" },
  { originalTailwind: "rounded-r-", logicalTailwind: "rounded-e-" },
  { originalTailwind: "rounded-tl-", logicalTailwind: "rounded-ss-" },
  { originalTailwind: "rounded-tr-", logicalTailwind: "rounded-se-" },
  { originalTailwind: "rounded-br-", logicalTailwind: "rounded-ee-" },
  { originalTailwind: "rounded-bl-", logicalTailwind: "rounded-es-" },
  { originalTailwind: "border-l-", logicalTailwind: "border-s-" },
  { originalTailwind: "border-r-", logicalTailwind: "border-e-" },
  { originalTailwind: "scroll-ml-", logicalTailwind: "scroll-ms-" },
  { originalTailwind: "scroll-mr-", logicalTailwind: "scroll-me-" },
  { originalTailwind: "scroll-pl-", logicalTailwind: "scroll-ps-" },
  { originalTailwind: "scroll-pr-", logicalTailwind: "scroll-pe-" },
];

export default function transformerToNativeLogicalTailwindCss(input: string) {
  return transformations.reduce(
    (acc, { originalTailwind, logicalTailwind }) =>
      acc.replaceAll(originalTailwind, logicalTailwind),
    input
  );
}
