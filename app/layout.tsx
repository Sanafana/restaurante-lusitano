import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurante Lusitano Leiria | Cozinha Tradicional & Grelhados no Carvão",
  description: "O verdadeiro almoço tradicional em Leiria. Pratos do dia caseiros, grelhados no carvão, peixe fresco e serviço rápido de take-away. Estrada da Estação 89, Leiria.",
  keywords: ["Restaurante Lusitano Leiria", "Almoços Leiria", "Pratos do dia Leiria", "Take away Leiria", "Grelhados Leiria", "Restaurante Estação Leiria"],
  openGraph: {
    title: "Restaurante Lusitano Leiria | Almoços Tradicionais",
    description: "Consulte os pratos do dia, ementa de almoço e faça o seu pedido de take-away online.",
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;0,900;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-stone-950 text-stone-100 antialiased min-h-screen selection:bg-lusitano-bordo selection:text-white">
        {children}
      </body>
    </html>
  );
}
