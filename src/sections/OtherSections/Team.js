import TeamCard from "components/TeamCard";
import React from "react";

function Team() {
  return (
    <section>
      <div className="section-container">
        <h1 className="fs-24px mb-8 lg:mb-3vw">Meet the team.</h1>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-4vw">
          <TeamCard
            img="images/member-1.png"
            title="Matt ..."
            subtitle="Founder"
            desc="Shane has been with us since day one, working out of our Perth office in WA, and has been instrumental in seeing us expand its already large client base of those in the mining industry."
          />
          <TeamCard
            img="images/member-2.png"
            title="Shane..."
            subtitle="Title"
            desc="Shane has been with us since day one, working out of our Perth office in WA, and has been instrumental in seeing us expand its already large client base of those in the mining industry."
          />
          <TeamCard
            img="images/member-3.png"
            title="Georgia ..."
            subtitle="Title"
            desc="Shane has been with us since day one, working out of our Perth office in WA, and has been instrumental in seeing us expand its already large client base of those in the mining industry."
          />
        </div>
      </div>
    </section>
  );
}

export default Team;
