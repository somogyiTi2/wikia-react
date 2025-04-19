import { redirect } from "react-router-dom";

export function getAuthToken(){
    const token =localStorage.getItem('token');
    //kikérem a tokenévre mentett tokent a böngészöből
    return token;
}
export function tokenLoader(){
    return getAuthToken();
}

export function chcekAuthLoader(){
    const token = getAuthToken();
    if(!token){
        return redirect('/auth')
    }
    //bejelentkezés nélkül a http://localhost:3000/events/new
}