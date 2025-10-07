"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import "./myJobs.css";

const page = () => {
  const [recData, setRecData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //side effect to receive applied jobs data from backend 
  useEffect(() => {
    async function receive() {
      try {
        //receiving
        const res = await axios.get("http://localhost:3000/api/jobsApplied");
        if (Array.isArray(res.data)) {//if data is array
          setRecData(res.data);
        } else {//if not, set to null
          setRecData([]);
        }
      } catch (err) {//catch error
        console.error("ERROR CAUGHT:", err);
        setError("Failed to fetch jobs");
      } finally {//section will work no matter what
        setLoading(false);
      }
    }
    receive();
  }, []);

  return (
    <div>
      <Navbar />
      <title>My Jobs | Linkedin</title>
      <div className="mainComp">
        {/* if error occurs, print it */}
        {error && <p className="error">{error}</p>}
      {/* if received nothing and has error */}
        {!loading && !error && recData.length === 0 && <p>No jobs found.</p>}
      {/* map all the elements to display */}
        {Array.isArray(recData) && recData.map((item) => (
                    <div className='myJobItem' key={item._id}>
                        <h2 className="jobType">{item.typeOfJob}</h2>
                        <h2>{item.jobPosition} </h2>
                        <p>{item.jobCompany}
                            <br></br>
                            {item.jobDuration}
                            <br></br>
                            {item.jobLocation}
                        </p>

                        {/* Add other job details as needed */}
                    </div>
                ))}

      </div>
    </div>
  );
};

export default page;
