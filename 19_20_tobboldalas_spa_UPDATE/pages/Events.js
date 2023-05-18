import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

// áthelyezem a EventsList-be
// import { useLoaderData, json } from 'react-router-dom';
//Ez egy speciális horog, amelyet végre tudunk hajtani
// hogy hozzáférjen a legközelebbi betöltő adataihoz,
// és megmutatom mit jelent a "legközelebbi betöltő adatok".

import EventsList from '../components/EventsList';

function EventsPage() {
  const { events } = useLoaderData();

  return (
    // itt a töltő szöveget írjuk ki
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
     {/* 304/6:59 */}
      <Await resolve={events}>
      {/* https://reactrouter.com/en/main/components/await */}
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
      // return response;
      // // const resData = await response.json();
      // //  return resData.events;
      // // const res =new Response('any data',{status:201});
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
