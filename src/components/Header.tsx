import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import LoginDrawer from "./LoginDrawer";

export default function Header() {
  return (
    <>
      <div
        className="w-full h-full text-secondary-foreground"
        id="header_wrapper"
      >
        <span className="h-full flex items-center">
          <Link to={"/to"}>
            <img
              src="/public/낭만스키로고누끼.png"
              alt="logo"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>
          <LoginDrawer />
        </span>
      </div>
      <Separator />
    </>
  );
}
