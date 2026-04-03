import { Nav, NavLink } from "../components/Navbar/NavbarElements";
import { Link } from "react-router-dom";

export default function LandingPageLayout() {
  return (
    <>
      <section
        id="homeButtonsContainer"
        className="flex flex-col items-center min-w-[360px] my-auto outline-green-500 outline-2 outline-dotted"
      >
        <div className="w-[92%] pageBlock mt-[5vw] min-h-42.5">
          <p className="">
            <span className="text-[1.3rem]">Welcome to the</span>
            <br />
            <span className="text-[1.6rem]">Original Characters</span>
            <br />
            <span className="text-[1.3rem]">Library</span>
          </p>
        </div>
        <Link
          to="/characterLibrary"
          className="pageBlock w-[85%] mt-[5vw] min-h-[115px]"
        >
          <div
            id="browseCharactersButton"
            // className="pageBlock w-[85%] mt-[5vw] min-h-[115px]"
          >
            <p>Browse Characters</p>
          </div>
        </Link>
        <Link
          to="/characterCreation"
          className="pageBlock w-[85%] my-[5vw] min-h-[115px]"
        >
          <div
            id="createCharacterButton"
            // className="pageBlock w-[85%] my-[5vw] min-h-[115px]"
          >
            <p>Create A Character</p>
          </div>
        </Link>
      </section>
    </>
  );
}
