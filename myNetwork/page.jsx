"use client";
import "./network.css";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { IoPersonAdd } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { useRouter } from "next/navigation";

const page = () => {
  const [acceptFlag, setAcceptFlag] = useState(false);
  const [ignoreFlag, setIgnoreFlag] = useState(false);

  function handleAcceptClick() {
    setAcceptFlag(true);
  }
  function handleIgnoreClick() {
    setIgnoreFlag(true);
  }
  //side effect to show acceptance and denial of connect requests
  useEffect(() => {
    if (acceptFlag) {
      alert("✅ Request Accepted");
    }
  }, [acceptFlag]);
  useEffect(() => {
    if (ignoreFlag) {
      alert("❌ Request Denied");
    }
  }, [ignoreFlag]);
  //sample data to show network people
  const peopleNameSuggestions = [
    { name: "Jessica Johnson", count: 12 },
    { name: "Michael Smith", count: 28 },
    { name: "Emily Davis", count: 7 },
    { name: "David Martinez", count: 16 },
    { name: "Sophia Brown", count: 24 },
    { name: "Christopher Wilson", count: 3 },
    { name: "Olivia Garcia", count: 19 },
    { name: "James Anderson", count: 22 },
    { name: "Ava Thomas", count: 11 },
    { name: "Benjamin Lee", count: 9 },
    { name: "Mia Clark", count: 26 },
    { name: "Ethan Rodriguez", count: 14 },
    { name: "Isabella Walker", count: 5 },
    { name: "Daniel Hall", count: 21 },
    { name: "Charlotte Allen", count: 8 },
    { name: "Matthew Young", count: 30 },
    { name: "Amelia Hernandez", count: 17 },
    { name: "Joseph King", count: 15 },
    { name: "Harper Wright", count: 13 },
    { name: "Alexander Scott", count: 25 },
  ];
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <title>My Network | Linkedin</title>
      <div className="mainRow">
        <div className="leftSide">
          <a href="#" className="leftSideOption">
            Connections <IoPersonAdd /> <p>31</p>
          </a>
          <a href="#" className="leftSideOption">
            Groups <MdGroups /> <p>5</p>
          </a>
          <a
            onClick={() => router.push("http://localhost:3000/eventsPage")}
            className="leftSideOption"
          >
            Events <MdEmojiEvents />
          </a>
          <a href="#" className="leftSideOption">
            NewsLetters <FaNewspaper /> <p>14</p>
          </a>
        </div>
        <div className="rightOne">
          <h1 className="reqTitle">Invitations</h1>
          {/* map all element to tiles form */}
          {peopleNameSuggestions.map((item) => (
            <div className="pTile" key={item}>
              <a href="#" className="pTileName">
                {item.name}
                <br />
                {item.count} Mutual Connections
              </a>
              <button className="acceptButton" onClick={handleAcceptClick}>
                Accept
                <TiTick />
              </button>
              <button className="ignoreButton" onClick={handleIgnoreClick}>
                Ignore
                <ImCross />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
