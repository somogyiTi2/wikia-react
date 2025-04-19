import MeetupDetail from '../../components/meetups/MeetupDetail';


function MeetupDetails(props) {
  console.log(props.meetupData)  
  return (
      
        <MeetupDetail
            img='https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg'
            title='Title'
            address='address'
            description='description' />
    )
}

export async function getStaticPaths() {
  //létre lehet hozza az oldal címeket, azért nem elég csak a getStaticProps mert akkor minden oldalt megjelentítene...
    return {
        fallback: true, //midnen 404 es hiba ami nincs benne ha false /ha igaz akkor kigenerál egy oldalt 
        paths: [
            {
                params: {
                /*rendelkeznie kell az össze id val mert különben 404 es hiba van.*/
                meetupId: 'm1',
            },
            params: {
                meetupId: 'm2',
            },
        }
        ]
    }

}
export async function getStaticProps(context) {
    // az összeshez előre generálja mert statikus az id...
    //így a getStaticPaths-et kell használni
   
  const meetupId = context.params.meetupId;
    console.log(meetupId);


    return {
        props: {
          meetupData: {
            img:
              'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg',
            id: meetupId,
            title: 'First Meetup',
            address: 'Some Street 5, Some City',
            description: 'This is a first meetup',
          },
        },
      };
    }
    
export default MeetupDetails;