import "./enterprise.css";
import Navbar from "../Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <title>Enterprise Offers | Exclusive Offers For Large Organisation</title>
      <div className="mainComp">
        <h1>
          <u>Be a Part of Something Big—We’re Hiring!</u>
        </h1>

        <h2 className="statHeading">
          <i>Some Ongoing Corporate Trends</i>
        </h2>
        <div className="firstStat">
          <img
            className="firstStatPic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5adCG_rQeVc1wTgJ2lfHY-OnyQQP9qo9_Lg&s"
          ></img>
          <p className="firstStatText">
            Currently, only about 4% of companies invest consistently in
            upskilling their employees in the early years of employment, leading
            to skill gaps and reduced competitiveness. Organizations that do
            prioritize learning see up to 218% higher income per employee,
            proving that upskilling fuels productivity and business growth.{" "}
            <br></br>Yet, 74% of employees feel they aren’t achieving their full
            potential due to insufficient training opportunities.
          </p>
        </div>

        <div className="secondStat">
          <img className="secondStatPic" src="secondStat.jpg"></img>
          <p className="secondStatText">
            On the freshers’ front, while over 50% of workers recognize the
            urgent need to learn new skills to stay relevant, many lack access
            to structured development programs, relying mainly on self-learning.
            This disconnect means fresh graduates often enter the market without
            key skills employers demand, limiting their career progression and
            hurting organizational talent pipelines.
          </p>
        </div>

        <p className="statExplain">
          These statistics emphasize that upskilling cannot be optional—it is
          essential for both companies aiming to maintain competitive advantage
          and for job seekers striving for professional growth. Companies that
          invest in targeted upskilling programs not only reduce recruitment
          costs but also boost retention and productivity. Simultaneously,
          freshers and professionals who embrace lifelong learning position
          themselves as valuable assets in fast-changing industries, creating a
          mutually beneficial cycle of growth and innovation We’re thrilled to
          introduce our brand new Hiring Program at Linkedin, a strategic
          initiative designed to connect exceptional talent with exciting career
          opportunities. For recruiters, this program streamlines the hiring
          process by attracting highly qualified candidates who align with our
          company culture and values, reducing time-to-hire and recruitment
          costs. It empowers internal hiring teams with greater flexibility and
          direct engagement, improving the quality of hires and fostering
          stronger personal connections with applicants. For job seekers and
          fresh graduates, this program offers a unique gateway to a dynamic
          work environment where innovation and growth are prioritized.
          Applicants gain access to tailored roles that match their skills and
          aspirations, supported by a transparent and efficient selection
          process.
          <br></br>
        </p>
        <h2 className="pJustify"><i>Why our program???</i></h2>
        <p><br></br>Our Hiring Program is essential because it creates a win-win
          scenario — enabling recruiters to build a high-performing workforce
          while providing candidates with rewarding career paths and
          opportunities for professional development. Join us now to be part of
          this transformative journey where your talent and ambitions meet our
          commitment to excellence. <br></br>
          <br></br>Apply today and take the next step toward a flourishing
          career with us. Together, let’s shape the future of work!</p>
        <button className="joinButton">Join Now</button>
      </div>
    </div>
  );
};

export default page;
