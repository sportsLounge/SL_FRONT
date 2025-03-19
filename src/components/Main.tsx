import CarouselWrap from "./CarouselWrap";
import OptionCards from "./OptionCards";
import { Separator } from "./ui/separator";

export default function Main() {
  return (
    <div className="w-full h-full box-border flex-col justify-center p-2">
      <OptionCards />
      <Separator className="mt-5 mb-5" />
      <CarouselWrap />
    </div>
  );
}
