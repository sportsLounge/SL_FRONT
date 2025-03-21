import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  //   CardFooter,
} from "@/components/ui/card";

export default function OptionCards() {
  return (
    <div className="w-full flex justify-center space-x-2">
      <Card>
        <CardHeader>
          <CardTitle>강습받기 </CardTitle>
          <CardDescription>강습을 받아보셈</CardDescription>
        </CardHeader>
        <CardContent>
          <img src="/로고색상반전.png" alt="" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>강습하기</CardTitle>
          <CardDescription>강습을 해보셈</CardDescription>
        </CardHeader>
        <CardContent>
          <img src="/낭만스키 로고.webp" alt="" />
        </CardContent>
      </Card>
    </div>
  );
}
