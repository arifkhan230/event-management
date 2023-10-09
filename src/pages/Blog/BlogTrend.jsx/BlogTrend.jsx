
import PropTypes from 'prop-types';

const BlogTrend = ({trend}) => {
    
    const { title, description, id} = trend;
    return (
        <div className='mt-4 px-2 text-justify'>
            <h2 className='text-2xl font-bold'> {id}. {title}</h2>
            <p className='mt-4'>{description}</p>
        </div>
    );
};

BlogTrend.propTypes = {
    trend:PropTypes.object
    
};

export default BlogTrend;