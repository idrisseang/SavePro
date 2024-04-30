import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { Separator } from "@/components/ui/separator";
export const metadata: Metadata = {
  title: "SavePro",
  description: "Easily create pockets to save money",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Header/>
        <Separator/>
        <div className="p-8 flex flex-col gap-6">
          {children}
        </div>
      </ThemeProvider>
            
      </body>
    </html>
  );
}
