import image1 from '../../assets/image-1.jpg'
import image2 from '../../assets/image-2.jpg'
import image3 from '../../assets/image-3.jpg'
import image4 from '../../assets/image-4.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const RecentEvent = () => {


    useEffect(()=>{
        AOS.init();
    },[])


    return (
        <div className='mt-12'>
            <h2 className='text-5xl font-bold text-center '>Gallery</h2>
            <p className='text-center text-xl font-semibold mt-2'>Photos of our recent events</p>
            <div data-aos="fade-down" className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 lg:mt-12 p-4 lg:p-0'>
                <div>
                    <img className='h-[450px] object-cover' src={image1} alt="" />
                </div>
                <div>
                    <img className='h-[450px] object-cover' src={image2} alt="" />
                </div>
                <div>
                    <img className='h-[450px] object-cover' src={image3} alt="" />
                </div>
                <div>
                    <img className='h-[450px] object-cover' src={image4} alt="" />
                </div>

            </div>
        </div>
    );
};

export default RecentEvent;