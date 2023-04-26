import Navigation from "src/components/navbar2.js";
import Navbar from "src/components/navbar1.js";
import Image from "next/image";
import background from "public/background.jpg";

import logo1 from "public/logo1.png";
import logo2 from "public/logo2.png";
import logo3 from "public/logo3.png";
import logo4 from "public/logo4.png";

import App from "src/components/slider.js";

import Footer from "src/components/footer.js";

function MyPage() {
  return (
    <div>
      <Navigation />
      <Navbar />

      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        <Image
          src={background}
          alt="PUP background"
          layout="responsive"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 md:gap-2 justify-items-center">
          <div className="bg-200 rounded-lg overflow-hidden flex flex-col items-center">
            <Image src={logo1} alt="Logo 1" width={150} height={150} />
            <div className="p-4 text-center text-red">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-bold underline"
              >
                Apply Now
              </a>
            </div>
          </div>
          <div className="bg-200 rounded-lg overflow-hidden flex flex-col items-center">
            <Image src={logo2} alt="Logo 2" width={150} height={150} />
            <div className="p-4 text-center text-red">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-bold underline"
              >
                Attend an Event
              </a>
            </div>
          </div>
          <div className="bg-200 rounded-lg overflow-hidden flex flex-col items-center">
            <Image src={logo3} alt="Logo 3" width={150} height={150} />
            <div className="p-4 text-center text-red-500 md:text-left">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-bold underline"
              >
                PUP Sustainability <br /> Development Programs
              </a>
            </div>
          </div>
          <div className="bg-200 rounded-lg overflow-hidden flex flex-col items-center">
            <Image src={logo4} alt="Logo 4" width={150} height={150} />
            <div className="p-4 text-center text-red-500">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-bold underline"
              >
                Campus Life
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-4">
        <App />
      </div>
      <section class="py-16 px-16 flex-col flex justify-end gap-6 pl-10">
        <iframe
          class="flex justify-center"
          width="750"
          height="422"
          src="https://www.youtube.com/embed/EVp6JBwTudk?list=UU3D3_jrSi3sYmx5L5p5RAwA"
          title="The Observer Online: Tanglaw Fest 2023"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/episode/6hSNhWq3gSGcSouucc8kl0?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

        <div className="flex flex-wrap justify-center mt-10 border-b-[1px] border-grey">
          <div className="flex justify-center w-3/4 h-auto">
            <div className="mr-5">
              <a
                class="twitter-timeline"
                data-width="350"
                data-height="885"
                data-theme="dark"
                href="https://twitter.com/ThePUPOfficial?ref_src=twsrc%5Etfw"
              >
                Tweets by papicurl
              </a>{" "}
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MyPage;
