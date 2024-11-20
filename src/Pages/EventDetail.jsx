import React from "react"
//import { Link } from "react-router-dom"
import { getEventDetail } from "../../api"

export default function EventDetail() {
    const [event, setEvent] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        async function loadEvent() {
            setLoading(true)
            const data = await getEventDetail()
            setEvent(data)
            setLoading(false)
        }
        loadEvent()
    }, [])

   const eventElements = events.map(event => (
        <div key={event.id} className="event-tile">
            <div className="event-info">
                <h3>{event.Topic}</h3>
                <h4>{event.Description}</h4>
                <h4>{event.Date}</h4>
                <button className="events-button">Book now</button>
            </div>
        </div>
   ))

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="events-list-container">
            <h1>Explore our events</h1>
            <div className="event-list">
                {eventElements}
            </div>
            
        </div>
    )
}