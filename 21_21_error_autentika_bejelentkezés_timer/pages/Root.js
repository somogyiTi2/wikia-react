import {
  Outlet,
  useLoaderData,
  // useNavigation,
  useSubmit
} from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getTokenDuration } from '../util/auth';

function RootLayout() {
  // const navigation = useNavigation();

  //Abban az esetben, ha bejelntekzeünk akkor legyen egy óra múlva kijelentkeztetve: 
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) {
      return;
    }//Amennyiben auth.js EXPIRED-re állítja kijelentkezünk.
    if (token === 'EXPIRED'){
      submit(null, { action: '/logout', method: 'post' })
      return;
    }

    //áthívjuk auth.js -ből a visszalévő időt és 
    const tokenDuration = getTokenDuration();
    console.log(tokenDuration)

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' })
    }, tokenDuration)
    //az áthívott idő lesz a kijelentkezés ideje minden frissítés után
  }, [token, submit])

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
