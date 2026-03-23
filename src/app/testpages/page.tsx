"use client";
import { rewardSlides } from "../data/rewardslides";
import { RewardsSlider } from "@/components/CTAcard/CTAcard";


export default function TestSliderPage() {
  return (
    <main className="min-h-screen bg-neutral-100 p-10">
      <h1 className="text-3xl font-bold mb-10">
        Rewards Slider Test
      </h1>

      <RewardsSlider slides={rewardSlides} />
    </main>
  )
}