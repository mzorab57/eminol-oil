import React from "react";


const TeamCard = ({ member, delay }) => {
  return (
    <div className="col ">
      <div
        className="  flex flex-col justify-center items-center max-w-2xl h-full"
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        <img src={member.image} className="object-cover size-full " alt={member.name} />
        <div className="team-style-1">
          <div className="team-info">
            <div className="team-title">
              <p className="text-lg text-white font-semibold">{member.name}</p>
              <p className="desp">{member.title}</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
