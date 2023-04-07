import "./globals.css";

export const metadata = {
  title: "To Logical Tailwind CSS",
  description: "convert tailwind css to logical tailwind css",
  creator: "Fawwaz Alharbi",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
