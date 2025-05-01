import { AuthUtil } from "@/utils/AuthUtil";

export default function LoginPage() {
  return (
    <div className="" id="login-form-wrapper">
      <div className="">
        <h2 className=" text-2xl"> Authorization TEST </h2>
      </div>
      <div>
        <button onClick={() => AuthUtil.getAuthorizationCode()}>
          인가 코드 테스트
        </button>
      </div>
    </div>
  );
}
