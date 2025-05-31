"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const dummyData = [
  {
    user: "user123",
    message: "What's your favourite movie?",
    time: 10,
  },
  {
    user: "EchoNova",
    message: "What's your dream job",
    time: 50,
  },
  {
    user: "PixelDrift",
    message: "Hey, How are you today",
    time: 35,
  },
];

export default function Testimonial() {
  return (
    <div className="max-w-xl mx-auto my-12">
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {dummyData.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-medium">
                      Message from {item.user}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="">
                    <p className="text-xl font-normal?">{item.message}</p>
                    <p className="text-sm font-light text-gray-500">
                      {item.time} minutes ago
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
