import { redirect } from 'react-router-dom';

export function action() {
  localStorage.removeItem('token');
  //Kijelentkezés eltávolitja a localstorigból a tokent
  localStorage.removeItem('expiration');
  return redirect('/');
}