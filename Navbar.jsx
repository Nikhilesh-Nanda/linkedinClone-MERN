"use client";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import { IoHome } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import { FaSuitcase } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";
import { MdMessage } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { IoIosGift } from "react-icons/io";
import { RiComputerFill } from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";
import axios from "axios";

const notifications = [
  { id: 1, message: "3 new jobs matching ‘React Developer’ posted today." },
  {
    id: 2,
    message:
      "Your application for ‘Data Analyst at Numerics’ has moved to ‘Under Review’.",
  },
  {
    id: 3,
    message:
      "You have received an interview invitation from ‘Globex Corporation’!",
  },
  {
    id: 4,
    message: "Your profile was viewed by a recruiter from ‘Acme Technologies’.",
  },
  { id: 5, message: "Recruiter Ava Smith sent you a message." },
  {
    id: 6,
    message:
      "‘Frontend Developer at Innotech’ job listing is expiring in 2 days.",
  },
  {
    id: 7,
    message:
      "You have not completed your application for ‘Backend Engineer at SoftWorks’. Click here to finish.",
  },
  { id: 8, message: "Complete your profile to get more job recommendations." },
  {
    id: 9,
    message:
      "Suggested for you: ‘UI Designer at Pixel Studios’ (based on your profile).",
  },
  { id: 10, message: "‘FinTech Solutions’ has downloaded your resume." },
  {
    id: 11,
    message:
      "You received feedback on your application for ‘QA Tester at BetaLabs’.",
  },
  { id: 12, message: "Recruiter Emma Jones started following your profile." },
  { id: 13, message: "Don’t forget the virtual job fair tomorrow at 10AM." },
  { id: 14, message: "Your password was changed successfully." },
  {
    id: 15,
    message: "A new review for ‘Techventures Ltd.’ is available to view.",
  },
];
const navbarMessages = [
  "Find Your Dream Job",
  "Explore Top Companies",
  "Browse Latest Openings",
  "Career Advice & Tips",
  "Post Your Resume",
  "Sign Up for Job Alerts",
  "Discover Remote Jobs",
  "Join Our Talent Network",
  "Upgrade Your Skills",
  "Get Hired Faster",
  "Search by Location",
  "Apply with One Click",
  "Interview Preparation",
  "Saved Jobs",
  "Your Job Matches",
];
const jobsMenuItems = [
  "Software Engineer",
  "Data Scientist",
  "Product Manager",
  "Graphic Designer",
  "Sales Representative",
  "Customer Support",
  "Marketing Specialist",
  "Financial Analyst",
  "Human Resources",
  "Project Coordinator",
  "Content Writer",
  "UX/UI Designer",
  "Healthcare Professional",
  "Teaching / Education",
  "Remote Jobs",
];
const moreDropdownOptions = [
  "About Us",
  "Help Center",
  "Blog",
  "Careers",
  "Events",
  "Company Reviews",
  "Salary Calculator",
  "Press Room",
  "Mobile App",
  "Refer a Friend",
  "Employer Login",
  "Contact Us",
  "Privacy Policy",
  "Terms of Service"
];
const jobSearchBarOptions = [
  "Software Engineer",
  "Data Analyst",
  "Project Manager",
  "UX Designer",
  "Marketing Specialist",
  "Remote only",
  "Full-time",
  "Internship",
  "Recently Posted",
  "Top Companies",
  "Bangalore",
  "Mumbai",
  "Delhi NCR",
  "Hyderabad",
  "Pune",
  "Product Manager in FinTech",
  "Work from Home Design Jobs",
  "Freshers Sales Opportunities",
  "Senior Backend Developer",
  "Content Writer (Remote)",
  "Saved Searches",
  "Trending Skills",
  "Browse by Category",
  "View Advanced Filters"
];

const Navbar = () => {
  const [notiDropDown, setNotiDropDown] = useState(false);
  const [msgDropDown, setMsgDropDown] = useState(false);
  const [moreDropDown,setMoreDropDown] = useState(false);
  const [isLogOut,setLogOut] = useState(false);
  const [search, moreSearch] = useState(false);
  const [logoLoad,setLogoLoad] = useState(false);

  const router = useRouter();
  function handleLogoClick() {
    router.push("/home");
  }
  function handlePremiumClick(){
    router.push("/getPremium")
  }
  const toggleNotiDropDown = () => {
    setNotiDropDown(!notiDropDown);
  };
  const toggleMsgDropDown = () => {
    setMsgDropDown(!msgDropDown);
  };
  const toggleMoreDropDown = () =>{
    setMoreDropDown(!moreDropDown);
  }
  const toggleLogOutPop = () => { setLogOut(!isLogOut)}
  const toggleMoreSearch = () =>{
    moreSearch(!search);
  }
  const handleLogOut = async() =>{
    const flag = 1;
    toggleLogOutPop();
    localStorage.removeItem("token");
    router.push("/");
    await axios.post("http://localhost:3000/api/logOut",{f:flag});
  }
  useEffect(()=>{
    if(isLogOut) {
      window.confirm("Action Will Take To a New Page??\nAre You Sure??");
    }
      setLogOut(false);
  },[isLogOut])
  return (
    <div>
      <nav>
        <img onClick={handleLogoClick} src="favicon.ico"></img>
        <input onClick={toggleMoreSearch} className="topInput" placeholder="Search For jobs,profiles & many more....." type="text"></input>
        {search && <div className="searchList">
            {jobSearchBarOptions.map((item)=>{
              return(
                <a href="#" className="navSearchItem">{item}</a>
              )
            })
          }
        </div>
        }
        <button className="searchButton">Search</button>
        <button className="navHome" onClick={() => router.push("/home")}>
          <IoHome />
          <br></br>
          <b>Home</b>
        </button>
        <button className="navNoti" onClick={toggleNotiDropDown}>
          <FaBell />
          <br></br>
          <b>Notifcations</b>
        </button>
        {notiDropDown && (
          <div className="notiDrop">
            {notifications.map((item) => {
              return (
                <a href="#" className="navDropItem" key={item.id}>
                  {item.message}
                  <br></br>
                </a>
              );
            })}
          </div>
        )}
        <button className="navJobs" onClick={()=>router.push("/jobsPage")}>
          <FaSuitcase />
          <br></br>
          <b>Jobs</b>
        </button>
        
        <button className="navMessage" onClick={toggleMsgDropDown}>
          <MdMessage />
          <br></br>
          <b>Messages</b>
        </button>
        {msgDropDown && (
          <div className="msgDropDownMenu">
            {navbarMessages.map((item) => {
              return (
                <a href="#" className="msgDropItem">
                  {item}
                  <br></br>
                </a>
              );
            })}
          </div>
        )}
        <button className="navEnt" onClick={()=>router.push("/enterprise-offers")}>
          <FaBuilding />
          <br></br>
          <b>For Enterprise</b>
        </button>
        <button className="navPremium" onClick={handlePremiumClick}>
          <IoIosGift />
          <br></br>
          <b>Get Premium</b>
        </button>
        <button className="navLogOut" onClick={handleLogOut}><RiComputerFill/><br></br><b>Logout</b></button>
        <button className="navMore" onClick={toggleMoreDropDown}><CgMoreO/></button>
        {
          moreDropDown && 
          <div className="moreDrop">
            {
              moreDropdownOptions.map((item)=>{
              return(<a href="#" className="moreDropItem">{item}<br></br></a>
              )})
            }
          </div>
        }
      </nav>
    </div>
  );
};

export default Navbar;
