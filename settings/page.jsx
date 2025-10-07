"use client";
import "./settings.css";
import React from "react";

export default function Page() {
  return (
    <div className="settingsContainer">
      <title>Settings | Linkedin</title>
      <h1 className="settingsTitle">Settings</h1>
      <div className="section">
        <h2 className="sectionTitle">Profile Information</h2>
        <div className="profileBox">
          <img className="avatar" src="mainDp.jpg" alt="Profile" />
          <div>
            <div className="profileRow">
              <b>Name:</b> Nosama Oleko
            </div>
            <div className="profileRow">
              <b>Email:</b> nosamaaf16@email.com
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="sectionTitle">Preferences</h2>
        <div className="prefRow">
          <span>Enable Notifications</span>
          <input type="checkbox" defaultChecked />
        </div>
        <div className="prefRow">
          <span>Language</span>
          <select defaultValue="English">
            <option>English</option>
            <option>Hindi</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>
      <div className="logoutBox">
        <button className="logoutBtn">Logout</button>
      </div>
    </div>
  );
}
