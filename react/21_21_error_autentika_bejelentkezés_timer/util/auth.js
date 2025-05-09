import { redirect } from "react-router-dom";
export function getTokenDuration(){
    const storedExpiritionDate= localStorage.getItem('exporation');
    const expirationDate = new Date(storedExpiritionDate);
    const now= new Date();
    const duration = expirationDate.getTime() - now.getTime();
    //a mostani idöből kivonom a mentett időt.
    return duration;
}
export function getAuthToken(){
    const token =localStorage.getItem('token');
    //kikérem a tokenévre mentett tokent a böngészöből
    
    if (!token){
        return null;
       }

    const tokenDuration =getTokenDuration();
    //ha az jelen idöből kivonjuk a kezdés idejét és az kissebb mint 0 akkor  a tokent átírjuk EXPIRED-re
  

    if(tokenDuration<0){
        return 'EXPIRED'
    }

    return token;
}
export function tokenLoader(){
    const token = getAuthToken();
    return token;
}

export function chcekAuthLoader(){
    const token = getAuthToken();
    if(!token){
        return redirect('/auth')
    }
    //bejelentkezés nélkül a http://localhost:3000/events/new 
    
}