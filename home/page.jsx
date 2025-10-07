"use client";
import React, { useState, useRef, useEffect } from "react";
import Navbar from "../Navbar";
import "./home.css";
import { LuDot } from "react-icons/lu";
import { FaThumbsUp } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";
//data for posts for user feed
let feedPosts = [
  {
    postId: "1",
    headline:
      "Senior Software Engineer | Cloud Solutions Architect | Innovating at Scale",
    user: "Priya Sharma",
    time: "2h",
    text: "Just landed a Product Designer role at DreamWorks! Grateful for all the support and tips from this amazing community!",
    likes: 56,
    comments: 10,
    share: 5,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    dp: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    postId: "2",
    headline: "Senior Product Manager | Oracle | AI & ML",
    user: "Rahul Patel",
    time: "30m",
    text: "Does anyone have insights on preparing for data analyst interviews? Any resource recommendations are welcome.",
    likes: 21,
    comments: 4,
    share: 6,
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    dp: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    postId: "3",
    headline: "HR at Infosys | Building in public",
    user: "Anjali Verma",
    time: "5h",
    text: "Our company is hiring software engineers (all levels) for multiple teams! DM me if you're interested.",
    likes: 78,
    comments: 23,
    share: 8,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    dp: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    postId: "4",
    headline: "Senior Manager | Microsoft | Google",
    user: "Siddharth Singh",
    time: "1d",
    text: "Completed a free online course on Digital Marketing Strategies. Happy to share notes and discuss learnings!",
    likes: 39,
    comments: 7,
    share: 2,
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dp: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    postId: "5",
    headline: "Executive Head | TCS",
    user: "Neha Mehta",
    time: "3d",
    text: "Got my AWS certification today! Excited to apply these new skills in the workplace.",
    likes: 64,
    comments: 15,
    share: 3,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    dp: "https://randomuser.me/api/portraits/women/85.jpg",
  },
  {
    postId: "6",
    headline: "US Based Techie | Looking For Internships & Startup",
    user: "Vikas Rana",
    time: "6h",
    text: "Attending a tech networking event tonight in Bengaluru. Anyone else going?",
    likes: 17,
    comments: 2,
    share: 9,
    image:
      "https://images.unsplash.com/photo-1559136656-3db4bf6c35f8?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dp: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];
const page = () => {
  const router = useRouter();

  const [videoLoad, setVideoLoad] = useState(false);
  const [networkLoad, setNetworkLoad] = useState(false);
  const [eventLoad, setEventLoad] = useState(false);
  const [newPostText, setNewPostText] = useState("");
  const [feedPosting, setFeedPosts] = useState([feedPosts]);
  //create reference
  const photoInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const jobInputRef = useRef(null);
  //use of reference to get rid of re renders
  function handlePhotoClick() {
    photoInputRef.current.click();
  }
  function handleVideoClick() {
    videoInputRef.current.click();
  }
  function handleJobClick() {
    jobInputRef.current.click();
  }

  function handleFileChange(e, type) {
    // You can handle selected files here
    const files = e.target.files;
    console.log(`${type} attached:`, files);
  }
  //function to add new post by the user
  async function addNewPost() {
    try {
      const newPost = {
        type: "newPost",
        headline: "CS Undergrad | Oxford School Of Tech",
        user: "Nosama Oleko",
        time: "0s",
        text: newPostText,
        likes: 0,
        comments: 0,
        share: 0,
        dp: "mainDp.jpg",
      };
      //send so that it can appear in feed and post section in user profile
      await axios.post("http://localhost:3000/api/userPosts", newPost);

      await axios.post("http://localhost:3000/api/feedPosts", newPost);
    } catch (err) {
      console.log("ERROR CAUGHT:", err);
    }
  }

  const effectRan = useRef(false);
  //side effect to send all feed data
  useEffect(() => {
    if (effectRan.current) return;
    effectRan.current = true;
    async function sendData() {
      try {
        //send posts that will appear on feed
        await axios.post("http://localhost:3000/api/feedPosts", feedPosts);
      } catch (err) {//catch error
        console.log("ERROR CAUGHT:", err);
      }
    }
    sendData();
  }, []);

  return (
    <div>
      <title>
        Connect With Professionals And grab top opportunities | Linkedin
      </title>
      <Navbar />
      <div className="container">
        <div className="sidebarContainer">
          <div className="leftOne">
            <div className="dpLeftSection">
              <img src="mainDp.jpg" className="myDp"></img>
              <br></br>
              <div className="dpRight">
                <a className="myname" onClick={() => router.push("/myProfile")}>
                  <b>Nasama Oleko</b>
                </a>
                <p className="headline">
                  <b>Oxford Tech School | CS Undergrad | Data Science</b>
                  <br></br>
                  <b>Member Since 2013</b>
                </p>
              </div>
            </div>

            <p className="userBio">
              <b>
                Energetic professional with 3+ years of experience in data
                analysis and project management. Skilled in Python, Excel, and
                communication, with a proven ability to deliver results in
                fast-paced environments. Passionate about learning new
                technologies and contributing to team success. Seeking roles
                that offer opportunities for growth and innovation.
                <br></br>
                <br></br>
                Let's Connect And Grow!!
              </b>
            </p>
          </div>
          <div className="MoreOptions">
            <div
              className="option"
              onClick={() => {
                setTimeout(() => {
                  setEventLoad(false);
                }, 55);
              }}
            >
              Events
            </div>

            <div
              className="option"
              onClick={() => {
                setTimeout(() => {
                  setVideoLoad(false);
                }, 800);
              }}
            >
              Videos
            </div>

            <div
              className="option"
              onClick={() => {
                setTimeout(() => {
                  setNetworkLoad(false);
                }, 900);
              }}
            >
              My Network
            </div>
            <div className="option">Preferences</div>
            <div className="option" onClick={() => router.push("/settings")}>
              Settings
            </div>
            <div className="option">Groups</div>
          </div>
        </div>
        <div className="rightOne">
          <div className="newPostSection">
            <div className="newPostUpper">
              <img className="newPostDp" src="mainDp.jpg" alt="Profile" />
              <input
                className="newPostText"
                type="text"
                placeholder="Add a post...."
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
              />
              <br />
            </div>
            <button className="PostButton" onClick={() => addNewPost()}>
              Post
            </button>
            <div className="lowerSection">
              <div className="photoButton" onClick={handlePhotoClick}>
                Photo <IoMdPhotos />
                <input
                  type="file"
                  accept="image/*"
                  ref={photoInputRef}
                  style={{ display: "none" }}
                  onChange={(e) => handleFileChange(e, "Photo")}
                />
              </div>
              <div className="videoButton" onClick={handleVideoClick}>
                Video <FaVideo />
                <input
                  type="file"
                  accept="video/*"
                  ref={videoInputRef}
                  style={{ display: "none" }}
                  onChange={(e) => handleFileChange(e, "Video")}
                />
              </div>
              <div className="jobButton" onClick={handleJobClick}>
                Job <FaSuitcase />
                <input
                  type="file"
                  ref={jobInputRef}
                  style={{ display: "none" }}
                  onChange={(e) => handleFileChange(e, "Job")}
                />
              </div>
              <div className="moreSec">More...</div>
            </div>
          </div>
          {/* map all the elements to a tile  */}
          {feedPosts.map((item) => (
            <div key={item.postId} className="feedPost">
              <div className="dp-related">
                <img className="feedDp" src={item.dp} alt="User profile" />
                <div className="feedName">
                  <b>
                    {item.user}
                    <LuDot />
                    {item.time} ago
                  </b>
                  <div className="userHeadline">{item.headline}</div>
                </div>
              </div>
              <div className="post-section">
                <div className="feedText">
                  <b>{item.text}</b>
                </div>
                {item.image && (
                  <>
                    <img
                      className="feedPostImg"
                      src={item.image}
                      alt="Feed post"
                    />
                  </>
                )}
              </div>
              <div className="bottomPostSection">
                <button className="likeButton">
                  <b>
                    Like <FaThumbsUp />({item.likes})
                  </b>
                </button>
                <button className="commentButton">
                  <b>
                    Comment <FaComment />({item.comments})
                  </b>
                </button>
                <button className="shareButton">
                  <b>
                    Share <FaLocationArrow />({item.share})
                  </b>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
