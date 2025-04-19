
import { MongoClient } from 'mongodb';
// import Layout from '../components/layout/Layout'
import MeetupList from '../components/meetups/MeetupList';


// const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         title: 'A First Meetup',
//         image: 'https://4kwallpapers.com/images/walls/thumbs_2t/9753.jpg',
//         address: 'Some adress 5.,12345 '
//     },
//     {
//         id: 'm2',
//         title: 'Kettő',
//         image: 'https://media.timeout.com/images/105879336/750/422/image.jpg',
//         address: 'Some adress 22.,54321 '
//     },
//     {
//         id: 'm3',
//         title: 'Párizs',
//         image: 'https://www.travelorigo.com/upload/15306/xl_1530619438_parizs1.jpg',
//         address: 'Some adress 25.,8945 '
//     }
// ]

const HomePage = (props) => {
    // const [loadedMeetups, setLoadedMeetups] = useState([]);
    // useEffect(() => {
    //     setLoadedMeetups(DUMMY_MEETUPS);
    //     //NEM VÁRJA MEG AZ ÚJRA RENDELÉSt A NEXT.JS
    // }, [])
    return (<>
        {/* <Layout> */}
        <MeetupList meetups={props.meetups} />;
        {/* </Layout> */}
    </>)
}


export async function getStaticProps() {
    // getStaticProps CSAK A PAGES FILJAIBA MŰKÖDIK
    //fech data API
    // fetch('/api/meetups');
    const client = await MongoClient.connect(
        "mongodb://127.0.0.1:27017/meeups"//local:
        // 'mongodb+srv://somogyitibor:Jelszo123@cluster0.8tpeere.mongodb.net//meetups?retryWrites=true&w=majority'
        );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const meetups =await meetupsCollection.find().toArray();

    client.close();

    return {
        props:{//a propsot külön objektumként kell így megathzározni
            // meetups: DUMMY_MEETUPS
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },//mindeképp propsot kell visszaküldeni
        revalidate: 1 //10 mp vár hogy újra generálja 3600 = 1 óra
    };
}

//Másik megoldás: AZÉRT JÓ MERT CSAK AKKOR FRISSÍT HA FRISSÍTÉS VAN AMI GYORS ÉS LASSÚ IS LEHET
// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     //nem fut a build során /ez csak a szerveren fut 
//     //fech data API
//     return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }


export default HomePage;