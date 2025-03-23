import CarouselWrap from "@/components/customs/CarouselWrap";
import OptionCards from "./customs/OptionCards";
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
