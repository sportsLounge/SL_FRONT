export class RequestUtil {
  /** @description 회원관련 요청 모음  */
  static MemberRequest = class {
    /**
     * @description 회원 정보 조회 ( GET )
     * @param
     */
    static async getMemberInfo() {
      const request = await fetch("", {
        method: "GET",
      });

      const response: Promise<{ data: object }> = await request.json();
      return request.ok ? response : null;
    }

    static isLogin(): boolean {
      return false;
    }
  };
}
