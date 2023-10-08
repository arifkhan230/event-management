import image1 from '../../assets/image-1.jpg'
import image2 from '../../assets/image-2.jpg'
import image3 from '../../assets/image-3.jpg'
import image4 from '../../assets/image-4.jpg'

const RecentEvent = () => {
    return (
        <div className='mt-12'>
            <h2 className='text-5xl font-bold text-center '>Gallery</h2>
            <p className='text-center text-xl font-semibold mt-2'>Photos of our recent events</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 lg:mt-12 p-4 lg:p-0'>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />

            </div>
        </div>
    );
};

export default RecentEvent;