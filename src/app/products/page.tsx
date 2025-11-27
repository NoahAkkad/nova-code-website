import type { Metadata } from "next";
import { ProductsContent } from "@/components/pages/ProductsContent";

export const metadata: Metadata = {
  title: "Nova Play | Products | Nova Code AB Mobile Gaming App",
  description:
    "Discover Nova Play by Nova Code AB—an Android mobile gaming and reward app built in Sweden with cloud-native performance and engaging gameplay.",
  keywords: [
    "nova code ab",
    "mobile apps",
    "Nova Play app",
    "mobile gaming",
    "reward app",
    "Android game",
    "Google Play app",
    "app development Sweden",
    "Mobile app development Göteborg",
  ],
  authors: [{ name: "Nova Code AB" }],
  alternates: {
    canonical: "https://novacode.se/products",
  },
  openGraph: {
    title: "Nova Play | Nova Code AB Mobile Gaming App",
    description:
      "Play Nova Play—our flagship Android reward app built by Nova Code AB for immersive mobile gaming audiences in Sweden and worldwide.",
    url: "https://novacode.se/products",
    type: "website",
    images: [
      {
        url: "/img/hero.png",
        width: 1200,
        height: 630,
        alt: "Nova Play mobile gaming app preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Play | Nova Code AB Mobile Gaming App",
    description:
      "Nova Play is the mobile gaming and reward app from Nova Code AB, available now on Google Play for Android players.",
    images: ["/img/hero.png"],
    creator: "@novacodeab",
  },
};

export default function ProductsPage() {
  return <ProductsContent />;
}
