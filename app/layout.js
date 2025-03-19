import "./globals.css";
import { Inter } from "next/font/google";
import { FloatingNav } from "./components/ui/floating-navbar";
import { MobileNav } from "./components/ui/mobile-nav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

const navItems = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Gallery",
    link: "#gallery",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export const metadata = {
  title: "Dyari's Barbershop",
  description: "Professional barbershop services in New Malden",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FloatingNav navItems={navItems} />
        <MobileNav navItems={navItems} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
