import { ENV } from "@/utils/EnvUtil";
export class AuthUtil {
  static getAuthorizationCode() {
    const {
      KAKAO: { REST_API_KEY, OAUTH_BASE_HOST },
    } = ENV;

    const url = OAUTH_BASE_HOST + "/oauth/authorize";

    const queryParam = new URLSearchParams({
      client_id: REST_API_KEY,
      redirect_uri: "http://localhost:3000/tutee/login",
      prompt: "select_account",
      response_type: "code",
    });

    window.location.href = `${url}?${queryParam}`;
  }
}
