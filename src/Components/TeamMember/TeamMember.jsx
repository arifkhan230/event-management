
import PropTypes from 'prop-types';

const TeamMember = ({ member }) => {
 
    return (
        <div className='border-2 mx-4 lg:mx-0'>
            <div className='h-[300px] w-full'>
                <img className='w-full h-full object-cover' src={member.image} alt="" />
            </div>
            <div>
                <p className='text-center text-2xl  font-semibold mt-4 mb-4'>{member.name}</p>
                <p className='text-center text-lg font-medium mb-6'>{member.title}</p>
            </div>
        </div>
    );
};

TeamMember.propTypes = {
    member: PropTypes.object

};

export default TeamMember;