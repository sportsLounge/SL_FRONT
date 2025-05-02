import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LoginControllerApi } from "@/swagger-spec/ts/src/apis/LoginControllerApi";

export default function RedirectionPage() {
  const {signal, abort} = new AbortController();
  const { search } = useLocation();
  const authCode = search.replace(/(\?)(code=)(\S)/,"$3");

  const getAuthToken = async () => {
    const res = await new LoginControllerApi().kakaoLogin({authCode});
    
  }

  useEffect(() => {
    console.log("서치파라미터 >>> ", authCode);
    console.log("응답!!!!! >> \n", );
    return () => {
      setTimeout(() => abort(), 3000)
    }; 
  },[]);

  return (
    <div>  ============== Redirection Page ==============</div>
  )
}
