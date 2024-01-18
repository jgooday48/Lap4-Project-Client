import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { formatTimeDifference } from '../../utils/formatTImeDifference';
import { baseApi } from '../../utils/baseApi';
import './index.css'

const Notification = () => {
    const [receivedNotes, setReceivedNotes] = useState([]);
    const [seenCount, setSeenCount] = useState(0);
   
    const guideId = sessionStorage.getItem('guide_id');
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        fetchGuideNotifications();
        console.log('notes: ', receivedNotes);
    });// Add seenCount to the dependencies to re-fetch when it changes

    const fetchGuideNotifications = async () => {
        try {
            const res = await axios.get(baseApi + 'notes/guide/' + guideId);
            console.log("notication: ", res.data)
            setReceivedNotes(res.data);
            setSeenCount(res.data.length)

        } catch (e) {
            console.log(e);
        }
    };

    const handleClick = () => {
        setClicked(prev => !prev);
        setSeenCount(0);

    };

    const handleDeleteNotification = () => {
        setReceivedNotes([])
    }

    return (
        <div>
            <div className="notify-bell" onClick={handleClick}>
                <FontAwesomeIcon icon={faBell} />
                {seenCount> 0 && (
                    <div className="notify-number">{seenCount}</div>
                )}
            </div>
            <div className="note-container">
                {clicked &&
                    receivedNotes.length > 0 &&

                    receivedNotes.map((note) =>
                        <div key={note.note_id} className="note-card">

                            <p id="note-time">{formatTimeDifference(note.timestamp)}</p>
                            <div id="note-text">{note.text}</div>
                        </div>

                    )
                }
                {clicked &&
                    receivedNotes.length > 0 &&
                    <div className="x-note" onClick={handleDeleteNotification}>
                        &#x2715;
                    </div>}
            </div>
        </div>
    );
};

export default Notification;



