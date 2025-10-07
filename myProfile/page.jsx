"use client";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Navbar";
import "./myProfile.css";
import axios from "axios";
import { useRouter } from "next/navigation";
//sample data for my profile section posts
const post = [
  {
    type: "oldPost",
    id: 1,
    text: "Just completed an intensive course on machine learning! The new skills I’ve gained are already helping me solve complex problems. #MachineLearning #DataScience",
    likes: 142,
    comments: 21,
    date: "2025-09-10",
    image:
      "https://plus.unsplash.com/premium_photo-1661329859712-76d8a4500fdb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "oldPost",
    id: 2,
    text: "Proud to announce that our team launched an innovative cybersecurity solution that’s changing the game. Thanks for the relentless efforts, team! #Cybersecurity #Innovation",
    likes: 190,
    comments: 34,
    date: "2025-09-05",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=700&q=80",
  },
  {
    type: "oldPost",
    id: 3,
    text: "Sharing my top 5 tips for staying productive while working remotely during the pandemic. Hope this helps fellow professionals! #Productivity #RemoteWork",
    likes: 115,
    comments: 17,
    date: "2025-08-28",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=80",
  },
  {
    type: "oldPost",
    id: 4,
    text: "Honored to be featured in the latest issue of Tech Innovators magazine. Thanks to all who supported me on this journey! #Gratitude #TechInnovation",
    likes: 130,
    comments: 22,
    date: "2025-08-15",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80",
  },
  {
    type: "oldPost",
    id: 5,
    text: "Attended an inspiring seminar on blockchain technology and its future in digital security. Excited to apply these insights in upcoming projects! #Blockchain #DigitalSecurity",
    likes: 172,
    comments: 29,
    date: "2025-08-05",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80",
  },
];

const Page = () => {
  const [connectFlag, setconnectFlag] = useState(false);
  const [followFlag, setFollowFlag] = useState(false);
  const [feedPosts, setFeedPosts] = useState([]);
  const [sendFlag, setSendFlag] = useState(false);
  const effectRan = useRef(false); //create reference
  //side effect to send all user posts
  useEffect(() => {
    if (effectRan.current) return;
    async function sendData() {
      try {
        await axios.post("http://localhost:3000/api/userPosts", post);//send to the route
      } catch (err) {
        console.log("ERROR CAUGHT:", err);
      }
    }
    sendData();
    effectRan.current = true;
  }, []);

  function handleConnectClick() {
    setconnectFlag(true);
  }
  function handleFollowClick() {
    setFollowFlag(true);
  }
  //side effect for connect and follow request sending
  useEffect(() => {
    if (connectFlag) {
      alert("✅ Connection Request Sent");
      setconnectFlag(false);
    }
  }, [connectFlag]);
  
  useEffect(() => {
    if (followFlag) {
      alert("✅ Following Nosama Oleko");
      setFollowFlag(false);
    }
  }, [followFlag]);
  const router = useRouter();
  //side effect to receive all user posts on backend
  useEffect(() => {
    async function dataForUserPosts() {
      try {
        const d = await axios.get("http://localhost:3000/api/userPosts"); //receiving
        const rec = d.data;
        setFeedPosts(rec); //update
      } catch (err) {
        //catch error
        console.log("ERROR CAUGHT:", err); //print the error
      }
    }
    dataForUserPosts();
  }, []);
  return (
    <div>
      <Navbar />
      <title>My Profile | Linkedin</title>
      <div className="mainComp">
        {/* top section of headline with profile pic */}
        <div className="upperPart">
          <div className="topCover">
            <img src="coverimg.jpg" className="coverImg" alt="Cover" />
            <img className="coverDp" src="mainDp.jpg" alt="DP" />
            <p className="NameArea">
              <div className="nameSection">
                <b>
                  <p className="NameAreaHeadline">
                    <b className="main">Nosama Oleko </b>
                    <br></br>
                    Oxford Tech School | CS Undergrad | Data Science
                  </p>
                </b>
                <b>
                  <p className="NameAreaCount">
                    500+ Connections | 1000+ Followers
                  </p>
                </b>
              </div>
              <button className="ConnectButton" onClick={handleConnectClick}>
                <b>Connect</b>
              </button>
              <button className="FollowButton" onClick={handleFollowClick}>
                <b>Follow +</b>
              </button>
              <hr></hr>
              {/* info about the user */}
              <p className="aboutcontent">
                <h3>About</h3>
                <br></br>
                <br></br>
                Enthusiastic and results-driven Computer Science undergraduate
                passionate about building impactful software solutions.
                Experienced in full-stack web development using the MERN stack
                and familiar with modern technologies like React, Node.js, and
                MongoDB. Adept at problem-solving, data structures, and
                algorithmic challenges—always eager to tackle new coding puzzles
                and contribute to innovative projects. Excited to connect,
                collaborate, and keep learning in the fast-evolving world of
                technology.
                <br></br>
                <br></br>
                For more information, access my resume attached below.
              </p>
              <button className="resumeButton">
                <b>Resume</b>
              </button>
              <hr></hr>
              {/* section for all posts of user */}
              <p className="postsTitle">
                <b>All Posts</b>
              </p>
              <div>
                {/* map all the elements to tile */}
                {feedPosts.map((post) => (
                  <div key={post.id} className="large-post-card">
                    <div className="post-header">
                      <img
                        src="/mainDp.jpg"
                        alt="Profile"
                        className="profile-pic"
                      />
                      <div className="post-user-info">
                        <div className="post-user-name">Nosama Oleko</div>
                        <div className="post-user-subtitle">
                          Oxford Tech School | CS Undergrad | Data Science
                        </div>
                        <div className="post-date">{post.date}</div>
                      </div>
                    </div>

                    <div className="post-content">
                      <p>
                        {post.text
                          ? post.text.split("#").map((part, index) =>
                              index === 0 ? (
                                part
                              ) : (
                                <span key={index} className="hashtag">
                                  #{part.split(" ")[0]}{" "}
                                </span>
                              )
                            )
                          : null}
                      </p>
                    </div>

                    {post.image && (
                      <div className="post-image-wrapper">
                        <img
                          src={post.image}
                          alt="Post visual"
                          className="post-image"
                        />
                      </div>
                    )}

                    <div className="post-actions">
                      <button>👍 Like {post.likes}</button>
                      <button>💬 Comment {post.comments}</button>
                      <button>🔗 Share</button>
                    </div>
                  </div>
                ))}
              </div>
            </p>
          </div>
        </div>
        {/* experience section */}
        <div className="leftExp">
          <p className="leftExpTitle">
            <b>Experience</b>
          </p>
          <div className="tile">
            OxFord Tech School<br></br>2y 3m - Present
          </div>
          <div className="tile">
            DS Intern<br></br>3m
          </div>
          <div className="lasttile">
            Montessary High School<br></br>12y
          </div>
        </div>
        {/* skills section */}
        <div className="leftSkills">
          <p className="leftSkTitle">
            <b>Skills</b>
          </p>
          <div className="stile">C</div>
          <div className="stile">C++</div>
          <div className="stile">R</div>
          <div className="stile">Rust</div>
          <div className="stile">React.js</div>
          <div className="laststile">Node.js</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
