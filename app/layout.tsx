import "@/styles/globals.css";

export const metadata = {
  title: "ALAE+",
  description:
    "Solution de facturation pour les structures d'accueil périscolaire",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
