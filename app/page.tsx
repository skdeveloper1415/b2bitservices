import Image from "next/image";
import ParticleMorphScene from "./components/ui/ParticleMorphScene";
import Challenges from "./components/home/Challenges";
import OurSolution from "./components/home/OurSolution";
import OurServices from "./components/home/OurServices";
import LogoLoop from "./components/home/LogoLoop";
import Testimonial from "./components/home/Testimonial";
import InquairySection from "./components/home/InquairySection";
import GetinTouch from "./components/home/GetinTouch";

export default function Home() {
  return (
    <>
    <ParticleMorphScene />
    <Challenges />
    <OurSolution />
    <OurServices />
    <LogoLoop />
    <Testimonial />
    <InquairySection />
    <GetinTouch />
    </>
  );
}
