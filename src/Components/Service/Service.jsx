
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const {id,name, image,price, description } = service;
    return (
        <div className="card card-compact rounded-b-none rounded-t-sm border-2 bg-base-100">
            <figure><img className='h-[250px] object-cover w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>
                    {
                        description.length > 150 ? description.slice(0,150) : description
                    }
                </p>
                <div className="card-actions items-center">
                    <p className='text-lg font-medium'>Price: <span className='text-blue-600'> {price}</span></p>
                    <Link to={`/details/${id}`}><button className="btn btn-info">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object

};

export default Service;