"use client"
import React,{useCallback, useEffect, useState} from "react"
import useEmblaCarousel from "embla-carousel-react"
import {ChevronLeft, ChevronRight}   from "lucide-react"
import type {CTASlide} from "@/types/CTA";

interface Props{
    slides : CTASlide[];
}

export const RewardsSlider : React.FC<Props> = ({slides}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    //update selected index when the carousel scrolls
    const onSelect = useCallback(() => {
        if(!emblaApi) return;   
        setSelectedIndex(emblaApi.selectedScrollSnap());
    },[emblaApi]);

    //to make the emblaApi instance available when the component mounts and to set up the event listener for slide changes
    useEffect(() => {
        if(!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);//event listener for when the carousel changes slides
        return () => {
        emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    //const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollPrev = useCallback(() => {
        if(emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if(emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);    

    const scrollTo = useCallback((index : number) => {
        if(emblaApi) emblaApi.scrollTo(index);
    }, [emblaApi]);

    return (
    <div className="max-w-5xl mx-auto bg-[#FDF8F5] rounded-br-[100px] overflow-hidden border border-orange-50 shadow-sm">
      <div className="overflow-hidden" ref={emblaRef || undefined}>
        <div className="flex embla__container">
          {slides.map((slide) => (
            <div className="flex-[0_0_100%] min-w-0 flex flex-col md:flex-row" key={slide.id}>
              {/* Left Side: Visual Content */}
              <div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Side: Copy & Actions */}
              <div className="md:w-1/2 p-8 md:p-14 flex flex-col justify-center">
                <h2 className="text-3xl font-serif text-[#333] leading-tight mb-4">
                  {slide.title}
                </h2>
                <p className="text-sm text-stone-600 mb-8 leading-relaxed max-w-sm">
                  {slide.description}
                </p>
                
                <button className="bg-[#AD3453] hover:bg-[#8e2b44] transition-colors text-white py-3 px-10 w-fit font-bold tracking-widest text-xs uppercase mb-10">
                  {slide.buttonText}
                </button>

                {/* Navigation UI */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <button onClick={scrollPrev} className="text-[#AD3453] hover:opacity-70 transition-opacity">
                      <ChevronLeft size={24} strokeWidth={1.5} />
                    </button>
                    
                    {/* Progress Dots */}
                    <div className="flex gap-2 mx-2">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => scrollTo(index)}
                          className={`w-2.5 h-2.5 rounded-full border border-[#AD3453] transition-all duration-300 ${
                            index === selectedIndex ? 'bg-[#AD3453]' : 'bg-transparent'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>

                    <button onClick={scrollNext} className="text-[#AD3453] hover:opacity-70 transition-opacity">
                      <ChevronRight size={24} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};