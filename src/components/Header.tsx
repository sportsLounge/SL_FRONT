import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import LoginDrawer from "./LoginDrawer";
import { useCallback, useState } from "react";

export default function Header() {
  const [ root ] = useState<HTMLElement | null> (() => document.getElementById("root"));
  const rect = useCallback(() => Promise.resolve(setTimeout(() => {},1000)).then(root?.getBoundingClientRect) ,[ root ]);
 
  return (
    <>
      <div
        className="w-full h-full text-secondary-foreground"
        id="header_wrapper"
      >
        <span className="h-full flex items-center">
          <Link to={"/to"}>
            <img
              src="/로고누끼.png"
              alt="logo"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>
          <LoginDrawer bw={1}/>
        </span>
      </div>
      <Separator />
    </>
  );
}
