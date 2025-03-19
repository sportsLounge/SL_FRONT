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
import { Separator } from "./ui/separator";

export default function LoginDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <p>{"배우러 가기 >"}</p>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex justify-center text-2xl">
          <DrawerTitle>{"안녕하세요, 낭만스키 입니다."}</DrawerTitle>
          <DrawerDescription>{"스키 초고수가 되는 그날까지"}</DrawerDescription>
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
          <Separator className="m-2" />
          <DrawerClose asChild>
            <Button variant={"outline"}>다음에 다시하기</Button>
          </DrawerClose>
          <div className="flex h-5 justify-center items-center space-x-4 text-xs text-gray-400">
            <div>강사님으로 활동하시나요?</div>
            <Separator orientation="vertical" className="w-4" />
            <div>로그인에 어려움을 겪고 계신가요?</div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
