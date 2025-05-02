import { AuthUtil } from "@/utils/AuthUtil";

export default function LoginPage() {
  
  const url = AuthUtil.getAuthorizationCode();

  return (
    <div className="" id="login-form-wrapper">
      <div className="">
        <h2 className=" text-2xl"> Authorization TEST </h2>
      </div>
      <div>
        <button>
          <a href={url}> 인가 코드 테스트 </a>
        </button>
      </div>
    </div>
  );
}
