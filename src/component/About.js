import User from "./user";
import Userclass from "./Userclass";

const About = () => {
  return (
    <div>
      <h1>About us </h1>
      <p>
        THis is a food finder website which gives the data of the food near u in
        your city
      </p>
       {/* <User name={"umaima"} /> */}
      <Userclass name={"umaima(class)"} /> 
    </div>
  );
};
export default About;
