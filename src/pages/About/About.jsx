import { useLoaderData } from "react-router-dom";


const About = () => {
    const about = useLoaderData({})
    const { title, subtitle, description, founder, history, mission, values } = about;
    
    return (
        <div className="max-w-[1440px] mx-auto lg:mt-10  p-4">
            <h2 className="text-4xl text-center font-bold">{title}</h2>
            <h3 className="text-xl text-center mt-4 font-medium">{subtitle}</h3>
            <p className="text-lg mt-8 font-medium"> {description}</p>

            <div className="flex flex-col text-justify lg:mt-10">
                <h2 className="text-2xl font-semibold">Founder</h2>
                <h3 className="text-xl font-semibold mt-4">{founder.name}</h3>
                <p className="text-sm">{founder.title}</p>
                <p className="mt-4">{founder.bio}</p>
            </div>
            <h2 className=" text-2xl font-semibold mt-4 mb-4">History</h2>
            <p>{history}</p>

            <h2 className="text-2xl  font-semibold mt-8 mb-4">Mission</h2>
            <p>{mission}</p>

            <div className="mt-8">
                <h2 className="text-2xl font-bold ">Our Goals</h2>
            {
                values.map(value => <div key={value.id}>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-2 mt-4">
                        <h2 className="text-xl font-semibold">{value.title} :</h2>
                        <p>{value.description}</p>
                    </div>
                </div>)
            }
            </div>

        </div>
    );
};


export default About;