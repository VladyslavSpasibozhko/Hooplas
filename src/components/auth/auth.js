import {authReq, getUserToken, login, register} from "../../axios/axios";

class Auth {
   token='';
   expires='';

   login =({email, password})=> {
      return authReq.post(`${login}`, {
            email, password
        })
   };

   register =({ email, password, displayName })=> {
       return authReq.post(`${register}`, {
           email, password, displayName
       })
   };

   setToken =(token)=> {
        this.token = token
   };

   getUser =(token)=> {
       return authReq.post(`${getUserToken}`, {
           idToken:token
       })
   };

   setTokenToStorage =(token)=> {
        localStorage.setItem('token', JSON.stringify(token))
   };

   getTokenFromStorage =()=> {
       const token = JSON.parse(localStorage.getItem('token'))
       return token
   };

   getToken =()=> this.token

}

export const auth = new Auth();