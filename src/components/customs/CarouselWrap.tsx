import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //   CarouselNext,
  //   CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

export default function CarouselWrap() {
  return (
    <div className="w-full flex justify-center">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {["콘텐츠1", "콘텐츠2", "콘텐츠3"].map((con, _i) => (
            <CarouselItem key={_i + con} className="flex justify-center">
              <Card className="w-9/10">
                <CardContent className="w-full h-full flex justify-center">
                  {con}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
