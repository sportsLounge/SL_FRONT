import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const validation = (value: string) => {
    const regex = /\d{3}-\d{4}-\d{4}/;
    return regex.test(value);
  };

  const transFormation = (value: string) => {
    if (value.length >= 4 && value.length < 8) {
      return `${value.slice(0, 3)}-${value.slice(3)}`;
    } else if (value.length >= 8) {
      return `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7)}`;
    }
    return value;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);
    console.log(/[a-zA-Z가-힣]/.test(e.key));
    console.log(/\d/.test(e.key) && e.currentTarget.value.length >= 13);
    if (
      (/[a-zA-Z가-힣]/.test(e.key) && e.key.length == 1) ||
      (/\d/.test(e.key) && e.currentTarget.value.length >= 13)
    ) {
      e.preventDefault();
    }
  };

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const inputVal = e.currentTarget.value;
    e.currentTarget.value = transFormation(inputVal.replace(/-/g, ""));
    if (validation(inputVal)) {
      e.currentTarget.classList.remove("bg-gray-500");
      e.currentTarget.classList.add("bg-green-500");
    }
  };

  return (
    <div
      className="w-full h-full flex-col justify-center items-center"
      id="login-form-wrapper"
    >
      <div className="">
        <h2 className=" text-2xl"> 휴대폰 번호를 입력해주세요 </h2>
      </div>
      <div>
        <Input
          type={"tel"}
          placeholder="휴대폰 번호(-제외)"
          className="text-gray-200"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div>
        <Button variant={"link"} className="w-full bg-gray-300 text-white">
          {"다음"}
        </Button>
      </div>
    </div>
  );
}
