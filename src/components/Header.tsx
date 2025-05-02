import { Link } from "react-router-dom";

export default function Header() {

  return (
    <>
      <div className="" id="header_wrapper">
        <span className="">
          <Link to={"/tutee"}>
            <img
              src="/로고누끼.png"
              alt="logo"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>
        </span>
      </div>
    </>
  );
}
