import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

export default function Header() {
  const [root] = useState<HTMLElement | null>(() =>
    document.getElementById("root")
  );
  const rect = useCallback(
    () =>
      Promise.resolve(setTimeout(() => {}, 1000)).then(
        root?.getBoundingClientRect
      ),
    [root]
  );

  useEffect(() => {
    rect();
  }, []);

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
