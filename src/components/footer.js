import React from "react";

const Footer = ({ title, items }) => {
  return (
    <div className="flex flex-row justify-center">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="flex flex-col p-10 m-0">
        <p className="text-sm font-bold text-red uppercase pb-4">
          ONLINE SERVICES
        </p>
        <div className="flex flex-col gap-2">
          <a
            href=""
            className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer"
          >
            PUP WebMail
          </a>
          <a
            href=""
            className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer"
          >
            PUP iApply
          </a>
          <a
            href=""
            className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer"
          >
            SIS for Students
          </a>
          <a
            href=""
            className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer"
          >
            SIS for faculty
          </a>
        </div>
      </div>
      <div className="flex flex-col p-10">
        <p className="text-sm font-bold text-red uppercase pb-4">DOWNLOADS</p>
        <div className="flex flex-col gap-2">
          <a
            href=""
            className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer"
          >
            For Students
          </a>
          <a
            href=""
            className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer"
          >
            For Faculty and Employees
          </a>
        </div>
      </div>
      <div className="flex flex-col p-10">
        <p className="text-sm font-bold text-red uppercase pb-4">QUICK LINKS</p>
        <div className="flex flex-col gap-2">
          <a
            href="https://www.facebook.com/ThePUPOfficial"
            className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer"
          >
            About PUP
          </a>
          <a
            href="https://www.facebook.com/ThePUPOfficial"
            className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer"
          >
            Admission Information
          </a>
          <a
            href="https://www.facebook.com/ThePUPOfficial"
            className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer"
          >
            Branches and Campuses
          </a>
          <a
            href="https://www.facebook.com/ThePUPOfficial"
            className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer"
          >
            Academic Programs
          </a>
          <a
            href="https://www.facebook.com/ThePUPOfficial"
            className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer"
          >
            Transparency Seal
          </a>
          <a
            href="https://www.facebook.com/ThePUPOfficial"
            className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer"
          >
            Bid Notices and Invitation
          </a>
          <a
            href="https://www.facebook.com/ThePUPOfficial"
            className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer"
          >
            International Affairs
          </a>
          <a
            href="https://www.facebook.com/ThePUPOfficial"
            className="text-graytext text-textsize select-none hover:underline hover:cursor-pointer"
          >
            Jobs for PUPians
          </a>
        </div>
      </div>
      <div className="flex flex-col p-10">
        <p className="text-sm font-bold text-red uppercase pb-4">
          KEEP IN TOUCH{" "}
        </p>
        <div className="flex flex-row gap-4">
          <a
            href="https://www.facebook.com/ThePUPOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <i className="fa fa-facebook fa-lg text-#80000"></i>
          </a>
          <a
            href="https://twitter.com/ThePUPOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <i className="fa fa-twitter fa-lg text-#80000"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/the-polytechnic-university-of-the-philippines"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <i className="fa fa-linkedin fa-lg text-#80000"></i>
          </a>
          <a
            href="https://www.youtube.com/user/pupcreatv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <i className="fa fa-youtube fa-lg text-#80000"></i>
          </a>
          <a
            href="https://www.pup.edu.ph/rss/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <i className="fa fa-globe fa-lg text-#80000"></i>
          </a>
          <a
            href="https://open.spotify.com/show/6x7hlv9qZX8VpwMIRAAiRb?si=h7yM8PeXR6qxSjQIs2GveA&dl_branch=1&nd=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <i className="fa fa-spotify fa-lg text-#80000"></i>
          </a>
        </div>
        <div>
          <p className="text-sm font-bold text-red uppercase pb-4 pt-8">
            CONTACT US{" "}
          </p>
          <p className="pb-2">
            Phone: (+63 2) 5335-1PUP (5335-1787) or 5335-1777
          </p>
          <p className="pb-2">Email: inquire@pup.edu.ph</p>
          <div className="text-sm text-red pt-4">
            <p className="pb-2">PUPWEBSITE 10</p>
            <p className="pb-2">
              <a
                href="https://www.facebook.com/ThePUPOfficial"
                className="underline hover:text-red"
              >
                Terms of Use
              </a>{" "}
              |{" "}
              <a
                href="https://www.facebook.com/ThePUPOfficial"
                className="underline hover:text-red"
              >
                Privacy Statement
              </a>{" "}
              |{" "}
              <a
                href="https://www.facebook.com/ThePUPOfficial"
                className="underline hover:text-red"
              >
                About PUPWebSite
              </a>
            </p>
          </div>
        </div>
      </div>

      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
};
export default Footer;
