import React from "react"
import { Link }from "react-router-dom"
import { getEvents } from "../../api"

export default function Events() {
    const [events, setEvents] = React.useState([])
    const [loading, setLoading] = React.useState(false)
 
    //const [searchParams, setSearchParams] = useSearchParams()

    React.useEffect(() => {
        async function loadEvents() {
            setLoading(true)
            const data = await getEvents()
            setEvents(data)
            setLoading(false)
        }
        loadEvents()
    }, [])

   const eventElements = events.map(event => (
        <div key={event.id} className="event-tile">
            <Link
                to={`/events/${event.id}`}>
                    <div className="event-info">
                        <img alt={event.title} src={event.imageURL}/>
                        <h3>{event.title}</h3>
                        <h4>{event.description}</h4>
                        <h4>{event.date}</h4>
                    <button className="events-button">Book now</button>
                </div>
            </Link>
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