import { ENV } from "@/utils/EnvUtil";
export class AuthUtil {
  static getAuthorizationCode() {
    const {
      KAKAO: { REST_API_KEY, OAUTH_BASE_HOST },
    } = ENV;

    const url = OAUTH_BASE_HOST + "/oauth/authorize";

    const queryParam = new URLSearchParams({
      client_id: REST_API_KEY,
      redirect_uri: "https://localhost:3000/auth/redirection",
      response_type: "code",
      prompt: "select_account",
    });

    return `${url}?${queryParam}`;
  }
}
