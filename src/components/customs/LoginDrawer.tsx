import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";
import { Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginDrawer({ bw }: { bw?: number }) {
  useEffect(() => {
    console.log("넓이", bw);
  }, []);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <p>{"배우러 가기 >"}</p>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex justify-center text-2xl">
          <DrawerTitle>{"Sports Lounge"}</DrawerTitle>
          <DrawerDescription>{""}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button variant="outline" className="bg-amber-400 text-white">
            카카오로 시작하기
          </Button>
          <Button variant="outline" className="bg-blue-400 text-white">
            구글로 시작하기
          </Button>
          <Button variant="outline" className="bg-green-500 text-white">
            네이버로 시작하기
          </Button>
          <Button variant={"outline"}>
            <Smartphone />
            <DrawerClose asChild>
              <Link to={"/tutee/login"}>휴대폰 번호로 시작하기</Link>
            </DrawerClose>
          </Button>
          <Separator className="m-2" />
          <div className="flex h-5 justify-center items-center space-x-4 text-xs text-gray-400">
            <div>bottom text ?</div>
            <Separator orientation="vertical" className="w-4" />
            <div>로그인에 어려움을 겪고 계신가요?</div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
