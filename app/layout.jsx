import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Providers from "@/redux/Providers";
import ContactBar from "@/components/Global/NavBar/ContactBar";
import SearchBar from "@/components/Global/NavBar/SearchBar";
import NavBar from "@/components/Global/NavBar/NavBar";
import Footer from "@/components/Global/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MrAHMED - Gaming Setif",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={inter.className + " min-h-screen flex flex-col"}
      >
        <Providers>
          <Toaster
            toastOptions={{
              className: "text-slate-900",
              style: {
                padding: "20px",
              },
            }}
          />
          <ContactBar />
          <SearchBar />
          <NavBar />
          <main className="mb-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
