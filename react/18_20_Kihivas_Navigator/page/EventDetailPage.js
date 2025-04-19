import { useParams, Link } from 'react-router-dom';
import EventsNavigtion from '../components/EventsNavigation'

function EventDetailPage() {
    const param = useParams();

    return (<>
        <EventsNavigtion/>
        <h1>{param.someid}</h1>
        <Link to='/events'>Back</Link>
    </>)
}

export default EventDetailPage;