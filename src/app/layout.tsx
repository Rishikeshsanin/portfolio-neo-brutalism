import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishikesh Munnaluri — Software Engineer",
  description:
    "Neo-brutalist portfolio of Rishikesh Munnaluri — software engineer building full-stack products, realtime systems and applied AI.",
  metadataBase: new URL("https://github.com/Rishikeshsanin"),
  openGraph: {
    title: "Rishikesh Munnaluri — Software Engineer",
    description:
      "Full-stack engineering, realtime systems, backend platforms and applied AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
