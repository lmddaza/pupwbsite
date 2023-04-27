
function Navigation() {
  return (
    <nav
      className="flex flex-wrap items-center justify-between pl-20 bg-white text-gray-500 m-0"
      style={{
        lineHeight: "23px",
        fontWeight: 300,
        color: "#555",
        overflowX: "hidden",
        background: "white",
      }}
    >
      <div className="hidden lg:block">
        <ul className="flex space-x-1 p-lr justify-center">
          <img
            src="/public/phlogo.png"
            alt="phlogo"
            className="pl-7 pr-4"
            height="36"
            width="77"
          />
          <li className="pt-1">
            <a href="#"></a>
            <a
              href="#"
              className="hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer font-semibold"
              style={{ padding: "10px 16px" }}
            >
              Home
            </a>
          </li>
          <li className="pt-1">
            <a href="#"></a>
            <a
              href="#"
              className="hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer font-semibold"
              style={{ padding: "10px 16px" }}
            >
              Good Governance
            </a>
          </li>
          <li className="pt-1">
            <a href="#"></a>
            <a
              href="#"
              className="hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer font-semibold"
              style={{ padding: "10px 16px" }}
            >
              Transparency
            </a>
          </li>
          <li className="pt-1">
            <a href="#"></a>
            <a
              href="#"
              className="hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer font-semibold"
              style={{ padding: "10px 16px" }}
            >
              International Affairs
            </a>
          </li>
          <li className="pt-1">
            <a href="#"></a>
            <a
              href="#"
              className="hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer font-semibold"
              style={{ padding: "10px 16px" }}
            >
              Bid Notices and Invitation
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <a href="/src/pages/contact-us.js"></a>
        <a href="#" className="text-xl font-bold tracking-wide"></a>
      </div>
      <div className="flex items-center pr-20">
        <a href="#"></a>
        <a
          href="#"
          className="ml-auto hover:text-white hover:cursor-pointer hover:bg-red text-ssm text-grayer font-semibold pt-1"
          style={{ padding: "10px 16px" }}
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
