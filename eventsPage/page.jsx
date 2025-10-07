import "./events.css";
import React from 'react'
import Navbar from "../Navbar";
const page = () => {
  //data for upcoming events 
    const upcomingEvents = [
  {
    title: "Tech Trends 2025 Conference",
    date: "10 October 2025",
    venue: "KIIT University Auditorium",
    description: "Explore the latest breakthroughs in AI, blockchain, and full stack development. Network with industry experts and participate in hands-on workshops."
  },
  {
    title: "LinkedIn Growth Hacking Webinar",
    date: "15 October 2025",
    venue: "Online Event",
    description: "Learn how to optimize your LinkedIn profile, grow your professional network, and unlock new career opportunities."
  },
  {
    title: "KIIT Hackathon 4.0",
    date: "20-22 October 2025",
    venue: "B-Block Labs, KIIT University",
    description: "Team up and build innovative solutions in 36 hours. Exciting prizes and mentorship from top tech leaders."
  },
  {
    title: "Innovators’ Panel: The Future of Remote Work",
    date: "5 November 2025",
    venue: "Online (Zoom)",
    description: "Thought leaders discuss how remote work is redefining company culture. Speakers: Rohan Mehta (CTO, TechVerse), Shalini Gupta (Head of HR, InSync Solutions), Guest from Google India.",
  },
  {
    title: "Career Acceleration Bootcamp",
    date: "12-13 November 2025",
    venue: "Career Services Center",
    description: "Two-day interactive training focused on interview skills, resume-building, LinkedIn profile upgrades, and networking tips. Special resume review session by successful alumni."
  },
  {
    title: "Full Stack Dev Open Day",
    date: "22 November 2025",
    venue: "Innovation Lab, E-Block",
    description: "Build, debug, and deploy a mini-project in one day—mentored by experienced engineers. Demos, code reviews, and pizza provided!"
  },
  {
    title: "Data Analytics for Social Good",
    date: "29 November 2025",
    venue: "Seminar Hall 2",
    description: "Discover how data science is driving impactful social change. Includes case studies on pandemic modeling, climate forecasting, and urban planning."
  },
  {
    title: "Blockchain Beyond Crypto: Industry Applications",
    date: "6 December 2025",
    venue: "KIIT Seminar Hall 4",
    description: "Explore blockchain’s impact on supply chain, healthcare, and digital identity. Includes a live smart contract demo!"
  },
  {
    title: "Women in Tech Leadership Summit",
    date: "14 December 2025",
    venue: "E-Block Conference Room",
    description: "Empowering discussions, mentorship sessions, and networking for aspiring women technologists."
  },
  {
    title: "Startup Pitch Fest",
    date: "18 December 2025",
    venue: "Incubation Centre",
    description: "Early-stage founders pitch innovative ideas to VCs and industry mentors. Audience voting for ‘People’s Choice Award’."
  },
  {
    title: "AI Art & Creativity Workshop",
    date: "20 December 2025",
    venue: "Design Studio",
    description: "Discover the creative side of artificial intelligence: AI-generated art, music, and writing hacks for all skill levels."
  },
  {
    title: "Quiz Bowl: Tech & Current Affairs",
    date: "1 December 2025",
    venue: "Main Auditorium",
    description: "Team up with friends and battle it out for the title of Campus Trivia Champion. Fast-paced rounds covering latest tech trends, coding, and world news."
  }
];
//data for ongoing events
const ongoingEvents = [
  {
    title: "Data Science Bootcamp (Day 2/5)",
    venue: "Lab 3, CS Block",
    trainer: "Dr. Priya Nair",
    description: "Deep dive into data mining, machine learning, and real-world problem solving using Python."
  },
  {
    title: "Web3 Builders Meetup",
    venue: "Room 101, Incubation Center",
    description: "Developers collaborating on blockchain apps, smart contracts, and decentralized data protocols."
  },
  {
    title: "Design Jam Night",
    venue: "Campus Café",
    schedule: "Every Friday, 7:30 PM",
    description: "Collaborative graphic design sprints, quick UI/UX contests, and creative brainstorming. Prizes for best mockups!"
  },
  {
    title: "DSA Coding League (Week 3/6)",
    venue: "Room 205, Coding Lab",
    host: "Tech Society",
    description: "Weekly hands-on contest solving data structures and algorithms with peer review and leaderboard updates."
  },
  {
    title: "Digital Marketing Case Competition",
    venue: "Management Block",
    description: "Teams develop and present strategies for real brands; prizes for innovation and performance."
  },
  {
    title: "ReactJS Hands-on Bootcamp (Session 4/8)",
    venue: "Online & B-101 Lab",
    description: "Build a real-world React app—each week covers a new concept (routing, hooks, context API)."
  },
  {
    title: "Peer-to-Peer Career Clinics",
    venue: "Library Discussion Room",
    schedule: "Daily",
    description: "Drop-in clinics for resume feedback, portfolio reviews, and mock interviews with senior students."
  }
];

  return (
    <div>
        <title>Events | Linkedin</title>
        <Navbar/>
        <div className="mainComp">
            <div className="leftOne">
                <h1 className="leftHead">Upcoming Events</h1>
                {upcomingEvents.map((item)=>{
                    return(
                        
                    <div className="uEventTile">
                        <a href="#" className="titleU">{item.title}</a><br></br>
                        <p className="dateU"><b>Date </b>: {item.date}</p>
                        <p className="descU">{item.description}</p>
                        <br></br>
                        <button className="Rbutton">Register</button>
                    </div>
                    )
                })}
            </div>
            <div className="rightOne">
                <h1 className="rightHead">Ongoing Events</h1>
                {ongoingEvents.map((item)=>{
                    return(
                        
                    <div className="oEventTile">
                        <a href="#" className="titleO">{item.title}</a><br></br>
                        <p className="oVenue"><b>Venue </b>: {item.venue}</p>
                        {item.trainer && <p><b>Trainer </b>: {item.trainer}</p>}
                        {item.host && <p><b>Host : {item.host}</b></p>}
                        {item.schedule && <p><b>Schedule :</b> {item.schedule}</p>}
                        <p>{item.description}</p>
                        <br></br>
                        <button className="RObutton">Register</button>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default page;
