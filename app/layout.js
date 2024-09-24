import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { CarbonMarketplaceProvider } from "@/context/CarbonMarketplaceContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Green Carbon Solution",
  description: "A Carbon Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CarbonMarketplaceProvider>
          <Layout>{children}</Layout>
        </CarbonMarketplaceProvider>
      </body>
    </html>
  );
}
