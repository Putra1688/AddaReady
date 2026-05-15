import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Pertanyaan Umum",
  description: "Temukan jawaban atas berbagai pertanyaan umum mengenai layanan pembuatan website portofolio dan branding digital di AddaReady.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
