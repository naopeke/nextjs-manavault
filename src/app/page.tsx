import HomePage from "@/components/home/home-page";
import Image from "next/image";
import NavBar from "@/components/ui/Navbar/Navbar";
import Footer from "@/components/ui/Footer/Footer";



export default function Home() {
  return (
    <>
    <NavBar />
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-gray-200">
      <HomePage/>
    </main>
    <Footer />
    </>
  );
}
