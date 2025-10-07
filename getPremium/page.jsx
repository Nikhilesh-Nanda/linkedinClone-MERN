"use client"
import React from 'react';
import Navbar from '../Navbar';
const page = () => {
  return (
    <div>
      <Navbar/>
      <title>Linkedin Premium</title>
    <div className="subscription-page">
      <h1 className="title">Premium Plan Features</h1>
      <p className="subtitle">Unlock the full potential with our Premium subscription for job seekers.
      </p>
      <ul className="features-list">
        <li>🔥 Unlimited job applications per month</li>
        <li>🔍 Access to exclusive job listings</li>
        <li>📈 Personalized career advice & interview tips</li>
        <li>📩 Priority application reviews by recruiters</li>
        <li>💼 Highlighted profile to employers</li>
        <li>🌐 Access to remote and global jobs</li>
        <li>📅 Early notifications on new job postings</li>
      </ul>
      <button className="subscribe-button">Subscribe Now</button>

      <style jsx>{`
        .subscription-page {
          max-width: 600px;
          margin: 40px auto 40px; /* Add top margin to clear navbar height (60px) + some spacing */
          padding: 20px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
          font-family: Arial, sans-serif;
          color: #333;
          text-align: center;
        }
        .title {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        .subtitle {
          font-size: 1.1rem;
          margin-bottom: 25px;
          color: #555;
          margin-left:10px;
        }
        .features-list {
          list-style: none;
          padding: 0;
          margin-bottom: 30px;
          text-align: left;
          font-size: 1.1rem;
          line-height: 1.6;
        }
        .features-list li {
          padding: 8px 0;
          border-bottom: 1px solid #e0e0e0;
        }
        .subscribe-button {
          background-color: #0073e6;
          color: white;
          border: none;
          padding: 15px 30px;
          font-size: 1.2rem;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .subscribe-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
    </div>
  );
};

export default page;
