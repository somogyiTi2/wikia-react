import { Link } from "react-router-dom";

const DUMMY_DATA = [
    { id: 1, title: 'first' },
    { id: 2, title: 'secund' },
];

function EventsPage() {
    return (
        <>
            <h1>Events</h1>
            {DUMMY_DATA.map((event) =>
                <ul>
                    <li>
                        <Link 
                        to={`/events/${event.id}`} >{event.title} </Link>
                    </li>
                </ul>
            )}
        </>
    )
}

export default EventsPage;