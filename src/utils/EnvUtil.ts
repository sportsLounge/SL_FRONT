const getEnv = (name: string) => {
  const value = import.meta.env[name as keyof ImportMetaEnv];
  if (!value) {
    throw new Error(`환경 변수 ${name}은 정의되어 있지 않습니다.`);
  }
  return value;
};

export const ENV = {
  KAKAO: {
    REST_API_KEY: getEnv("VITE_KAKAO_OAUTH_REST_API_KEY"),
    OAUTH_BASE_HOST: getEnv("VITE_KAKAO_OAUTH_BASE_HOST"),
  },
};
