"use client"
import "./videopage.css";
import React, { useEffect } from 'react'
import Navbar from "../Navbar";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsCameraReelsFill } from "react-icons/bs";
import { MdLiveTv } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { TbWashDryP } from "react-icons/tb";
import axios from "axios";
import Head from "next/head";
//data for video display
const videoDetails = [
  {
    title: "Leadership for Business Growth",
    channel: "Being Human Podcast",
    author: "Richard Aon (First Hum - leadership development and executive coaching)",
    publishedDate: "January 16, 2025",
    duration: "Approx. 20-30 minutes (exact not available)",
    description: "Discusses three key aspects of leadership for business growth: Unfiltered Listening, Expanding Possibilities, and Committed Speaking. Includes examples from logistics innovation, BBC's accelerated project timeline, and committed leadership declarations."
  },
  {
    title: "What is Career Development and How Can You Drive Your Career",
    channel: "ProSkills.training",
    publishedDate: "August 17, 2024",
    duration: "35 minutes 1 second",
    description: "Explains career development as a continuous professional growth process, with strategies on setting goals, building plans, skill development, networking, and navigating career transitions. Aimed at professionals at all stages."
  },
  {
    title: "Lessons in Business Leadership (Laylee Emandi)",
    channel: "HoneyBook",
    publishedDate: "March 27, 2024",
    duration: "34 minutes 35 seconds",
    description: "Laylee Emadi shares her journey as an independent business owner, covering leadership through service, community building, putting people first, and investing in personal development for sustained business success."
  }
];
  
const page = () => {
  // side effect to send data to route
  useEffect(() => {
    //function to send data
    async function sendData() {
      try {
        await axios.post("http://localhost:3000/api/videos", videoDetails);
      } catch (err) {//error caught
        console.log("ERROR CAUGHT:", err);
      }
    }
    sendData();
  }, []);
  return (
    <div>
      <Navbar/>
      <Head>  
        <title>Videos | Linkedin</title>
      </Head>
      <div className="mainComp">
        <div className="leftOne">
            <h1 className="leftHead">Category</h1>

            <div className="leftOption"><b>Trending <FaArrowTrendUp/></b></div>
            <div className="leftOption"><b>Webinars <BsCameraReelsFill/></b></div>
            <div className="leftOption"><b>Live</b> <MdLiveTv/></div>
            <div className="leftOption"><b>Saved</b> <FaBookmark/></div>
        </div>
        {/* iframe tags are used to show the youtube links in embed format */}
        <div className="rightOne">
            <h1 className="rightHead">Videos</h1><hr></hr>
            <div className="videoTile">
              <p className="videoDesc"><b>Get to know about leadership from the pro!! Watch as he shares his experience!!</b></p>
              <iframe className="firstVideo" src="https://www.youtube.com/embed/YPbX_vzFIcw" width={700} height={400} allowFullScreen title="Leadership Growth"/>
            </div>
            <div className="secondvideoTile">
              <p className="secondvideoDesc"><b>Want to develop a strong career?? Listen to an expert</b></p>
              <iframe className="secondVideo" src="https://www.youtube.com/embed/feCTT18oBG4" width={700} height={400} allowFullScreen title="Leadership Growth"/>
            </div>
            <div className="thirdvideoTile">
              <p className="thirdvideoDesc"><b>Listen to the expert combo if u want to build buisness and lead</b></p>
              <iframe className="thirdVideo" src="https://www.youtube.com/embed/bhegUGzgQgg" width={700} height={400} allowFullScreen title="Leadership Growth"/>
            </div>
        </div>  
      </div>
    </div>
  )
}

export default page;
