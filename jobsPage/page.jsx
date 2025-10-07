"use client";
import "./jobpage.css";
import Navbar from "../Navbar";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { VscSettings } from "react-icons/vsc";
import { FaSuitcase } from "react-icons/fa";
import { FaStarOfDavid } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const page = () => {
  //data for jobs display 
  const jobListings = [
    {
      company: "Tech Solutions Ltd",
      position: "Frontend Developer",
      jobType: "Full-time",
      duration: "Permanent",
      location: "San Francisco, CA",
      logo: "https://dummyimage.com/100x100/000/fff&text=TechSol",
    },
    {
      company: "Green Energy Corp",
      position: "Project Manager",
      jobType: "Part-time",
      duration: "6 months",
      location: "Austin, TX",
      logo: "https://dummyimage.com/100x100/007f00/fff&text=GreenEn",
    },
    {
      company: "Finance Masters",
      position: "Financial Analyst",
      jobType: "Full-time",
      duration: "Contract - 1 year",
      location: "New York, NY",
      logo: "https://dummyimage.com/100x100/003366/fff&text=FinMast",
    },
    {
      company: "Creative Minds",
      position: "Graphic Designer",
      jobType: "Part-time",
      duration: "3 months",
      location: "Remote",
      logo: "https://dummyimage.com/100x100/cc00cc/fff&text=CreatM",
    },
    {
      company: "Health and Care",
      position: "Nurse Practitioner",
      jobType: "Full-time",
      duration: "Permanent",
      location: "Chicago, IL",
      logo: "https://dummyimage.com/100x100/cc0000/fff&text=Health",
    },
  ];

  const [applie, setapplie] = useState(false);
  async function handleapplie(company, position, jobType, duration, location) {
    try {
      setapplie(true);
      const newApply = {
        jobApplie: "Nasama Oleko",
        ageOfApplie: 26,
        genderOfApplie: "Female",
        jobCompany: company,
        jobPosition: position,
        typeOfJob: jobType,
        jobDuration: duration,
        jobLocation: location,
      };
      //update if someone applied
      await axios.post("http://localhost:3000/api/jobsApplied", newApply);
    } catch (err) {//catch error
      console.log("ERROR CAUGHT:", err);
    }
  }
  //side effect to confirm the application
  useEffect(() => {
    if (applie) {
      alert(" ✅Applied For Job\n Kindly wait for further instructions.");
      setapplie(false);
    }
  }, [applie]);
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <title>Jobs & Work Opportunities | Linkedin</title>
      <div className="mainComp">
        <div className="leftOne">
          <div className="firstleftOption" onClick={()=>router.push("/getPremium")}>
            <b>Try Out Premium <FaStarOfDavid/></b>
          </div>
          <div className="leftOption"
           onClick={()=>router.push("/myJobsPage")}>
            <b>My Jobs <FaSuitcase/></b>
          </div>
          <div className="leftOption">
            <b>My Preferences <VscSettings/></b>
          </div>
        </div>
        <div className="rightOne">
          <h1 className="rightTitle">Jobs</h1>
          <hr></hr>
          {/* map all the elements to tile */}
          {jobListings.map((item) => {
            return (
              <div key={item.company} className="jobTile">
                <p className="jobC">
                  <img src={item.logo}></img>
                </p>
                <p className="jobDesc">
                  <b>{item.company}</b>
                  <br></br>
                  {item.position}
                  <br></br>
                  {item.jobType}({item.duration})<br></br>
                  {item.location}
                </p>
                <button className="view">
                  <b>View More </b>
                  <FaEye />
                </button>
                <button
                  className="apply"
                  onClick={() =>
                    handleapplie(
                      item.company,
                      item.position,
                      item.jobType,
                      item.duration,
                      item.location
                    )
                  }
                >
                  <b>Apply</b>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
