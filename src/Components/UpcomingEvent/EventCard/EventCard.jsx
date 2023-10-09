
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const EventCard = ({ singleEvent }) => {
    useEffect(()=>{
        AOS.init();
    },[])
   
    const handleBookNow =()=>{
        swal("Congratulations!", "You Successfully booked this event!", "success");

    }
    return (
        
            <div data-aos="flip-up" className="card bg-base-100 mx-4 lg:px-0 h-[360px] rounded-none border-2 ">
            <div className="card-body">
                <h2 className="card-title text-blue-800">{singleEvent.title}</h2>
                <p className='font-medium mt-4'>location: <span className=''>{singleEvent.location}</span></p>
                <p className='text-blue-600'>Date: {singleEvent.date}</p>
                <p>{singleEvent.description}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleBookNow} className="btn btn-primary w-full">Book Now</button>
                </div>
            </div>
        </div>
        
    );
};

EventCard.propTypes = {
    singleEvent: PropTypes.object

};

export default EventCard;