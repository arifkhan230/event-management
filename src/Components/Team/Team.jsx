import { useEffect } from "react";
import { useState } from "react";
import TeamMember from "../TeamMember/TeamMember";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Team = () => {
    const [team, setTeams] = useState([])

    useEffect(() => {
        fetch('/team.json')
            .then(res => res.json())
            .then(data => setTeams(data.team))
    }, [])

    useEffect(()=>{
        AOS.init();
    },[])


    console.log(team)
    return (
        <div className="mt-20 max-w-[1440px] mx-auto">
            <h2 className="text-4xl font-bold text-center mb-10">Our Team</h2>
            <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-6">
                {
                    team.map(member => <TeamMember
                        key={member.id}
                        member={member}>
                    </TeamMember>)
                }
            </div>
        </div>
    );
};

export default Team;