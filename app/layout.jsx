import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Seongyoon Kim | Economics PhD Candidate",
  description: "Seongyoon Kim - PhD Candidate in Economics at the University of Michigan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-body`}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
