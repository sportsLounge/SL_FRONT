import CarouselWrap from "./CarouselWrap";
import OptionCards from "./OptionCards";
import { Separator } from "./ui/separator";

export default function Main() {
  return (
    <>
      <OptionCards />
      <Separator className="mt-5 mb-5" />
      <CarouselWrap />
    </>
  );
}
