const float = [
  { originalTailwind: "float-left", logicalTailwind: "float-start" },
  { originalTailwind: "float-right", logicalTailwind: "float-end" },
  { originalTailwind: "clear-left", logicalTailwind: "clear-start" },
  { originalTailwind: "clear-right", logicalTailwind: "clear-end" },
];

const text = [
  { originalTailwind: "text-left", logicalTailwind: "text-start" },
  { originalTailwind: "text-right", logicalTailwind: "text-end" },
];

const resize = [
  { originalTailwind: "resize-y", logicalTailwind: "resize-block" },
  { originalTailwind: "resize-x", logicalTailwind: "resize-inline" },
];

const overscroll = [
  {
    originalTailwind: "overscroll-y-auto",
    logicalTailwind: "overscroll-b-auto",
  },
  {
    originalTailwind: "overscroll-y-contain",
    logicalTailwind: "overscroll-b-contain",
  },
  {
    originalTailwind: "overscroll-y-none",
    logicalTailwind: "overscroll-b-none",
  },
  {
    originalTailwind: "overscroll-x-auto",
    logicalTailwind: "overscroll-i-auto",
  },
  {
    originalTailwind: "overscroll-x-contain",
    logicalTailwind: "overscroll-i-contain",
  },
  {
    originalTailwind: "overscroll-x-none",
    logicalTailwind: "overscroll-i-none",
  },
];
const height = [
  { originalTailwind: /\bh-"/g, logicalTailwind: "bs-" },
  { originalTailwind: /\bmin-h-/g, logicalTailwind: "min-bs-" },
  { originalTailwind: /\bmax-h-/g, logicalTailwind: "max-bs-" },
];

const width = [
  { originalTailwind: /\bw-/g, logicalTailwind: "is-" },
  { originalTailwind: /\bmin-w-/g, logicalTailwind: "min-is-" },
  { originalTailwind: /\bmax-w-/g, logicalTailwind: "max-is-" },
];

const margin = [
  { originalTailwind: "my-", logicalTailwind: "mlb-" },
  { originalTailwind: "mx-", logicalTailwind: "mli-" },
  { originalTailwind: "mt-", logicalTailwind: "mbs-" },
  { originalTailwind: "mb-", logicalTailwind: "mbe-" },
  { originalTailwind: "ml-", logicalTailwind: "mis-" },
  { originalTailwind: "mr-", logicalTailwind: "mie-" },
];

const padding = [
  { originalTailwind: "py-", logicalTailwind: "plb-" },
  { originalTailwind: "px-", logicalTailwind: "pli-" },
  { originalTailwind: "pt-", logicalTailwind: "pbs-" },
  { originalTailwind: "pb-", logicalTailwind: "pbe-" },
  { originalTailwind: "pl-", logicalTailwind: "pis-" },
  { originalTailwind: "pr-", logicalTailwind: "pie-" },
];

const space = [
  { originalTailwind: "space-y-", logicalTailwind: "space-b-" },
  { originalTailwind: "space-x-", logicalTailwind: "space-i-" },
];

const inset = [
  { originalTailwind: "inset-y-", logicalTailwind: "inset-block-" },
  { originalTailwind: "inset-x-", logicalTailwind: "inset-inline-" },
  { originalTailwind: "top-", logicalTailwind: "block-start-" },
  { originalTailwind: "bottom-", logicalTailwind: "block-end-" },
  { originalTailwind: "left-", logicalTailwind: "inline-start-" },
  { originalTailwind: "right-", logicalTailwind: "inline-end-" },
];

const divide = [
  { originalTailwind: "divide-y-", logicalTailwind: "divide-b-" },
  { originalTailwind: "divide-x-", logicalTailwind: "divide-i-" },
];

const border = [
  { originalTailwind: "border-t-", logicalTailwind: "border-bs-" },
  { originalTailwind: "border-b-", logicalTailwind: "border-be-" },
  { originalTailwind: "border-l-", logicalTailwind: "border-is-" },
  { originalTailwind: "border-r-", logicalTailwind: "border-ie-" },
  { originalTailwind: "border-y-", logicalTailwind: "border-lb-" },
  { originalTailwind: "border-x-", logicalTailwind: "border-li-" },
];

const borderRadius = [
  { originalTailwind: "rounded-t-", logicalTailwind: "rounded-bs-" },
  { originalTailwind: "rounded-b-", logicalTailwind: "rounded-be-" },
  { originalTailwind: "rounded-l-", logicalTailwind: "rounded-is-" },
  { originalTailwind: "rounded-r-", logicalTailwind: "rounded-ie-" },
  { originalTailwind: "rounded-tl-", logicalTailwind: "rounded-ss-" },
  { originalTailwind: "rounded-tr-", logicalTailwind: "rounded-se-" },
  { originalTailwind: "rounded-bl-", logicalTailwind: "rounded-es-" },
  { originalTailwind: "rounded-br-", logicalTailwind: "rounded-ee-" },
];

const transformations = [
  ...float,
  ...text,
  ...resize,
  ...overscroll,
  ...height,
  ...width,
  ...margin,
  ...padding,
  ...space,
  ...inset,
  ...divide,
  ...border,
  ...borderRadius,
];
export default function transformerToPluginLogicalTailwindCss(input: string) {
  return transformations.reduce(
    (acc, { originalTailwind: originalTailwind, logicalTailwind }) =>
      acc.replaceAll(originalTailwind, logicalTailwind),
    input
  );
}
