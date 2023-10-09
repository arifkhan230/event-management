import { useLoaderData } from "react-router-dom";
import EventCard from "./EventCard/EventCard";


const UpcomingEvent = () => {
    const { upcomingEvents } = useLoaderData()
   
    return (
        <div className="max-w-[1440px] mx-auto mt-12 mb-20">
            <h2 className='text-4xl font-bold text-center mb-8'>Upcoming events</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4">
                {
                    upcomingEvents.map(singleEvent => <EventCard
                        key={singleEvent.id}
                        singleEvent={singleEvent}
                    ></EventCard>)
                }
            </div>
        </div>
    );
};

export default UpcomingEvent;