import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Hero from "@/components/hero/Hero";
import Menu from "@/components/menu/Menu ";
import AboutUs from "@/components/aboutUs/AboutUs";
import Contact from "@/components/Contact/Contact";
export default async function Home() {
  const session = await getServerSession(authOptions);

 

  return (
    <main className="mx-auto border border-[#1d1d1d08] bg-[#ffffff]">
      <Hero/>
      <Menu/>
      <AboutUs/>
      <Contact/>
    </main>
  );
}
