import React from "react";
import hivemind1 from "../assets/hivemind1.png";
import { Tilt } from "react-tilt";

const Landing = () => {
     return (
          <div className="flex-col-sm-4 flex justify-center items-center h-screen">
               <Tilt>
                    <img src={hivemind1} alt="HiveMind" className="m-0 h-auto max-h-[750px] w-full" />
               </Tilt>
          </div>
     );
};

export default React.memo(Landing);
