import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FullCode",
  description: `Na FullCode, estamos na vanguarda da transformação digital,
  oferecendo soluções inovadoras em engenharia de software, engenharia
  de dados e ciência de dados. Combinando expertise técnica e paixão
  pela inovação, capacitamos nossos clientes a conquistarem novos
  horizontes e maximizarem seu potencial.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
