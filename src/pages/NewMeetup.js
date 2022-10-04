import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/NewMeetupForm";

function NewMeetup() {
    const navigate = useNavigate();

    function addMeetupHandler(meetupData){
        fetch('https://react-second-app-f5cab-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            navigate("/", { replace: true });
        });
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>

    </section>;
}

export default NewMeetup;