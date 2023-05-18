// áthelyezem a EventsList-be
 import { useLoaderData } from 'react-router-dom';
//Ez egy speciális horog, amelyet végre tudunk hajtani
// hogy hozzáférjen a legközelebbi betöltő adataihoz,
// és megmutatom mit jelent a "legközelebbi betöltő adatok".

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();

  if(data.isError){
    return<p>{data.message}</p>
  }
   const events = data.events;

  return <EventsList events={events}/>;

}

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
     return {isError:true, message:'Could not fetch events.'};
     
    } else {
      return response;
      // const resData = await response.json();
      //  return resData.events;
      // const res =new Response('any data',{status:201});
    }
}