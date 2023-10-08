import { useEffect, useState } from "react";
import Service from "../Service/Service";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Services = () => {
    const [services, setServices] = useState([]);

    
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useEffect(()=>{
        AOS.init();
    },[])

    return (
        <div className="max-w-[1440px] mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold py-10 text-center">Our Top Services</h2>
            {/* services card */}
            <div  data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;