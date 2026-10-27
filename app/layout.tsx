import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harikaran | Full Stack Developer",
  description: "Portfolio of Harikaran - Software Engineering Student & Full-stack JS Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <body style={{ fontFamily: "var(--font-poppins), Poppins, system-ui, sans-serif" }}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
