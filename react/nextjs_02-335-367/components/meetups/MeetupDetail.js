// import { Fragment } from "react";
import classes from './MeetupDetil.module.css';


function MeetupDetails(props) {
    console.log(props);
    return (
        <section className={classes.detail}>
            <img
                src={
                    props.image ?
                        props.image
                        : 'https://www.kertforum.hu/wp-content/plugins/chartoasis-offline-html/images/krumpli-felhasznalt-resze.jpg'
                }
                alt={props.title}
            />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description} </p>
        </section>
    )
}

export default MeetupDetails;