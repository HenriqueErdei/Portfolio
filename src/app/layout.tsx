import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Henrique Erdei - Especialista em Dados | Desenvolvedor | Analista de Sistemas",
  description: "Portfólio de Henrique Erdei, Especialista em Dados, Desenvolvedor e Analista de Sistemas. Especializado em Business Intelligence, Data Science, Power BI, Python, AWS e TOTVS Protheus.",
  keywords: ["especialista em dados", "business intelligence", "power bi", "python", "aws", "totvs protheus", "data science", "analista de sistemas", "desenvolvedor", "portfólio"],
  authors: [{ name: "Henrique Erdei" }],
  creator: "Henrique Erdei",
  openGraph: {
    title: "Henrique Erdei - Especialista em Dados | Desenvolvedor | Analista de Sistemas",
    description: "Portfólio de Henrique Erdei, Especialista em Dados, Desenvolvedor e Analista de Sistemas. Especializado em Business Intelligence, Data Science, Power BI, Python, AWS e TOTVS Protheus.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Henrique Erdei - Especialista em Dados | Desenvolvedor | Analista de Sistemas",
    description: "Portfólio de Henrique Erdei, Especialista em Dados, Desenvolvedor e Analista de Sistemas. Especializado em Business Intelligence, Data Science, Power BI, Python, AWS e TOTVS Protheus.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
