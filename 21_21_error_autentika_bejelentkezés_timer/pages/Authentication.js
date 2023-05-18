import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  console.log(request);
  const mode = searchParams.get('mode') || 'login';
  //a szerverről lekérem 
  if (mode !== 'login' && mode !== 'signup') {
    //és ha se nem login se nem signup
    throw json({ message: 'Unsupported mode.' }, { status: 422 });
    //hiba üzenet
  }
  //request-kérés
  const data = await request.formData();
  //promis miatt await () response.ok fontos.

  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  }

  //válasz a szervertől: 
  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      authData
    )
  });
  //a szerverről vagy a login vagy a signup verziót kérem le

  if (response.status === 422 || response.status === 401) {
    console.log('422,401');
    //422 => Felismerhetetlen entitás 401=> Jogosulatlan
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Could not authentcate user" }, { status: 500 })
    //500=>Internet server error
  }

  //ITT KELL MAJD MENEDZSELNI A HÁTTÉRBŐL KAPOTT DOLGOKAT 
  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem('token', token);
  //beállítom locaStorege-ba a válaszból a tokent
  const expiration = new Date();
  expiration.setHours(expiration.getHourse() + 1);
  localStorage.setItem('expiration', expiration.toISOString());

  return redirect('/');
}