import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  //   CardFooter,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function OptionCards() {
  const navigate = useNavigate();
  
  return (
    <div className="w-full grid grid-cols-2 space-x-2">
      <Card onClick={() => navigate("/somepath1")}>
        <CardHeader>
          <CardTitle> Test Title1 </CardTitle>
          <CardDescription>Test Sub_title1</CardDescription>
        </CardHeader>
        <CardContent>
          <img src="/로고색상반전.png" alt="" />
        </CardContent>
      </Card>
      <Card onClick={() => navigate("/somepath2")}>
        <CardHeader>
          <CardTitle>Test Title2</CardTitle>
          <CardDescription>Test Sub_title2</CardDescription>
        </CardHeader>
        <CardContent>
          <img src="/로고.webp" alt="" />
        </CardContent>
      </Card>
    </div>
  );
}
