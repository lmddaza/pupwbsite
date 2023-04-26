import Navigation from "src/components/navbar2.js";
import Navbar from "src/components/navbar1.js";
import Image from "next/image";
import background from "public/background.jpg";

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
      {/* Rest of the page */}
    </div>
  );
}

export default MyPage;
