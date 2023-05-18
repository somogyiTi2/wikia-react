// Challenge / Exercise
// ✅  1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// ✅ 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// ✅ 3. Add a root layout that adds the <MainNavigation> component above all page components
// ✅ 4. Add properly working links to the MainNavigation
// ✅ 5. Ensure that the links in MainNavigation receive an "active" class when active
// ✅ 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// ✅ 7. Output the ID of the selected event on the EventDetailPage
// ✅ BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./page/Home";
import EventDetailPage from "./page/EventDetailPage";
import NewEventPage from "./page/NewEventPage";
import EditEventPage from "./page/EditEventPage";
import RootLayout from "./page/Root";
import EventsPage from "./page/EventsPage";



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children:
      [
        {
          index: true, element: <HomePage />, loader: async () => {
            const response = await fetch('http://localhost:8080/events');

            if (!response.ok) {
              //...
            } else {
              const resData = await response.json();
              return resData.events;
            }
          }
        },
        { path: '/events', element: <EventsPage /> },
        { path: 'events/:someid', element: <EventDetailPage /> },
        { path: '/events/new', element: <NewEventPage /> },
        { path: 'events/:someid/edit', element: <EditEventPage /> }

      ]
  }
]);

function App() {
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
