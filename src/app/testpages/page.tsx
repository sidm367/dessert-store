"use client";
import { rewardSlides } from "../data/rewardslides";
import { RewardsSlider } from "@/components/CTAcard/CTAcard";
//import Navbar from "@/components/LandingPage/Navbar";
//import Navbar from "@/components/LandingPage/Navbartwo";
import { Navbar } from "../../components/LandingPage/Navbartwo";



export default function TestSliderPage() {
  //console.log("Navbar import:", Navbar);
  return (
    <main className="min-h-screen bg-background p-10">
      <Navbar />
      <h1 className="text-3xl font-bold mb-10">
        Rewards Slider Test
      </h1>
      <RewardsSlider slides={rewardSlides} />
    </main>
  )
}