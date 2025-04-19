//our.domain.com/new-meetup
import { useRouter } from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/new-meetup',
      //relatív link kell /api/fileNév
      {
        method: 'POST',
        body: JSON.stringify(enteredMeetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

    const data = response.json();

    console.log(data);



    router.push('/');
    //vissza lapozok
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;