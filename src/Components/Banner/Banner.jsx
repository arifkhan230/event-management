

const Banner = () => {
    return (
        <div className="hero h-[70vh] object-cover lg:mx-0 w-full" style={{ backgroundImage: 'url(https://i.ibb.co/DL7SGpf/corporate-businessman-giving-presentation-large-audience.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-xl lg:text-5xl font-bold">Let Us Manage Your Event </h1>
                    <p className="mb-5">Unlock New Opportunities and Expand Your Knowledge</p>
                    <button className="btn bg-blue-400 border-none">Get Services</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;