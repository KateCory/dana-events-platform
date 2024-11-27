import React from "react"
import { useParams } from "react-router-dom"
import { getEventDetail } from "../../api"

export default function EventDetail() {
    const [event, setEvent] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const params = useParams()

    React.useEffect(() => {
        async function loadEvent() {
            setLoading(true)
            const data = await getEventDetail()
            setEvent(data)
            setLoading(false)
        }
        loadEvent()
    }, [])

//    const eventElements = event.map(event => (
//         <div key={event.id} className="event-tile">
//             <div className="event-info">
//                 <h3>{event.Topic}</h3>
//                 <h4>{event.Description}</h4>
//                 <h4>{event.Date}</h4>
//                 <button className="events-button">Book now</button>
//             </div>
//         </div>
//    ))

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="event-detail-container">
            <img alt={event.title} src={event.imageURL}/>
        </div>
    )
}