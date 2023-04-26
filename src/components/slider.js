import React from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SliderComponent = () => {
  return (
    <Slider {...settings}>
      <div>
        <img src="https://via.placeholder.com/800x400" alt="Slide 1" />
      </div>
      <div>
        <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
      </div>
      <div>
        <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
      </div>
    </Slider>
  );
};

const Column1 = () => {
  return (
    <div className="w-full sm:w-63 h-auto lg:h-96 overflow-y-scroll pl-4 pr-2">
      <h2 className="text-red text-xl lg:text-2xl font-bold mb-4 border-b-2 border-gray-400 pb-2">
        Announcements and Advisories
      </h2>
      <ul className="text-base lg:text-lg">
        <li className="border-t-2 border-gray-400 pt-2">
          <a href="#" className="text-red hover:underline">
            Administrative Applicants for Selection/Promotion: List of All
            Applicants (First and Second Level) April 2023
          </a>
          <br />
          <span className="text-xs">Posted: April 20, 2023</span>
        </li>
        <li className="border-t-2 border-gray-400 pt-2">
          <a href="#" className="text-red hover:underline">
            Advisory on the Submission of Online Application for Graduation and
            Other Scheduled Activities for Year-End Graduation (Second Semester)
            A.Y. 2022-2023
          </a>
          <br />
          <span className="text-xs">Posted: April 10, 2023</span>
        </li>
        <li className="border-t-2 border-gray-400 pt-2">
          <a href="#" className="text-red hover:underline">
            PUP ICT Office is looking for Computer Programmers (J.O.)
          </a>
          <br />
          <span className="text-xs">Posted: March 02, 2023</span>
        </li>
        <li className="border-t-2 border-gray-400 pt-2">
          <a href="#" className="text-red hover:underline">
            List of Qualified Applicants for Promotion (First and Second Level
            Positions) Batches 1, 2, and 3
          </a>
          <br />
          <span className="text-xs">Posted: February 07, 2023</span>
        </li>
        <li className="border-t-2 border-gray-400 pt-2">
          <a href="#" className="text-red hover:underline">
            List of Eligible Applicants for Promotion (First and Second Level
            Positions)
          </a>
          <br />
          <span className="text-xs">Posted: February 01, 2023</span>
        </li>
        <li className="border-t-2 border-gray-400 pt-2">
          <a href="#" className="text-red hover:underline">
            Advisory to All Graduates of the PUP Main Campus (Sta. Mesa, Manila)
          </a>
          <br />
          <span className="text-xs">Posted: September 16, 2022</span>
        </li>
        <li className="border-t-2 border-gray-400 pt-2">
          <a href="#" className="text-red hover:underline">
            Internal Guidelines for Opt-Out and Voluntary Contribution of
            Students under Republic Act 10931
          </a>
          <br />
          <span className="text-xs">Posted: April 04, 2022</span>
        </li>
      </ul>
    </div>
  );
};

const Column2 = () => {
  return (
    <div className="w-full sm:w-63 h-auto lg:h-96 overflow-y-scroll pl-4 pr-2">
      <h2 className="text-red text-xl lg:text-2xl font-bold mb-4 border-b-2 border-gray-400 pb-2">
        Announcements and Advisories
      </h2>
      <ul className="text-base lg:text-lg">
        <li className="border-t-2 border-gray-400 pt-2">
          <a href="#" className="text-red hover:underline">
            Administrative Applicants for Selection/Promotion: List of All
            Applicants (First and Second Level) April 2023
          </a>
          <br />
          <span className="text-xs">Posted: April 20, 2023</span>
        </li>
        <li className="border-t-2 border-gray-400 pt-2">
          <a href="#" className="text-red hover:underline">
            Advisory on the Submission of Online Application for Graduation and
            Other Scheduled Activities for Year-End Graduation (Second Semester)
            A.Y. 2022-2023
          </a>
          <br />
          <span className="text-xs">Posted: April 10, 2023</span>
        </li>
        <li className="border-t-2 border-gray-400 pt-2">
          <a href="#" className="text-red hover:underline">
            PUP ICT Office is looking for Computer Programmers (J.O.)
          </a>
          <br />
          <span className="text-xs">Posted: March 02, 2023</span>
        </li>
        <li className="border-t-2 border-gray-400 pt-2">
          <a href="#" className="text-red hover:underline">
            List of Qualified Applicants for Promotion (First and Second Level
            Positions) Batches 1, 2, and 3
          </a>
          <br />
          <span className="text-xs">Posted: February 07, 2023</span>
        </li>
        <li className="border-t-2 border-gray-400 pt-2">
          <a href="#" className="text-red hover:underline">
            List of Eligible Applicants for Promotion (First and Second Level
            Positions)
          </a>
          <br />
          <span className="text-xs">Posted: February 01, 2023</span>
        </li>
        <li className="border-t-2 border-gray-400 pt-2">
          <a href="#" className="text-red hover:underline">
            Advisory to All Graduates of the PUP Main Campus (Sta. Mesa, Manila)
          </a>
          <br />
          <span className="text-xs">Posted: September 16, 2022</span>
        </li>
        <li className="border-t-2 border-gray-400 pt-2">
          <a href="#" className="text-red hover:underline">
            Internal Guidelines for Opt-Out and Voluntary Contribution of
            Students under Republic Act 10931
          </a>
          <br />
          <span className="text-xs">Posted: April 04, 2022</span>
        </li>
      </ul>
    </div>
  );
};

const Column3 = () => {
  return (
    <div>
      <img
        src="/col-image1.PNG"
        alt="Picture 1"
        className="mb-4"
        style={{ width: "100%", maxWidth: "200px" }}
      />
      <img
        src="/col-image2.PNG"
        alt="Picture 2"
        className="mb-4"
        style={{ width: "100%", maxWidth: "200px" }}
      />
      <img
        src="/col-image3.PNG"
        alt="Picture 3"
        className="mb-4"
        style={{ width: "100%", maxWidth: "200px" }}
      />
      <img
        src="/col-image4.PNG"
        alt="Picture 4"
        className="mb-4"
        style={{ width: "100%", maxWidth: "200px" }}
      />
      <img
        src="/col-image5.PNG"
        alt="Picture 5"
        style={{ width: "100%", maxWidth: "200px" }}
      />
    </div>
  );
};

const ThreeColumns = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-gray-200 p-4">
        <Column1 />
      </div>
      <div className="bg-gray-200 p-4">
        <Column2 />
      </div>
      <div className="bg-gray-200 p-4">
        <Column3 />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="container mx-auto">
      <ThreeColumns />
    </div>
  );
}
