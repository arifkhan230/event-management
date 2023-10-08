import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';


const ServiceDetails = () => {
    const [findDetails, setFindDetails] = useState({})
    const {name,description,image} = findDetails;
    const services = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    useEffect(() => {
        const findService = services.find(service => service.id === idInt)

        if (findService) {
            setFindDetails(findService)
        }
    }, [services, idInt])
    console.log(findDetails)

    const handleGetService =()=>{
        swal("Good job!", "You have successfully purchased our service!", "success", {
            button: "ok!",
          });
    }

    return (
        <div className="max-w-[1440px] mx-auto">
            <h2 className="text-4xl font-bold text-center my-10">Service Details</h2>
            <div className="relative flex w-3/4 mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-full h-[50vh] shrink-0 overflow-hidden rounded-t-lg bg-white bg-clip-border text-gray-700">
                    <img
                        src={image  }
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    
                    <h4 className="mb-2 block text-2xl font-semibold">
                        {name}
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        {description}
                    </p>
                        <button onClick={handleGetService} className="btn btn-info"> Get Service</button>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;