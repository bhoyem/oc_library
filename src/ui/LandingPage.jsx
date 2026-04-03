export default function LandingPageLayout() {
  return (
    <>
      <section id="homeButtonsContainer" className="flex flex-col items-center min-w-[360px] my-auto outline-2 outline-green-500">
        <div className="w-[92%] pageBlock mt-[5vw] min-h-42.5">
          <p className="">
            <span className="text-[1.3rem]">Welcome to the</span>
            <br />
            <span className="text-[1.6rem]">Original Characters</span>
            <br />
            <span className="text-[1.3rem]">Library</span>
          </p>
        </div>
        <div className="pageBlock w-[85%] mt-[5vw] min-h-[115px]">
          <p>Browse Characters</p>
        </div>
        <div className="pageBlock w-[85%] my-[5vw] min-h-[115px]">
          <p>Create A Character</p>
        </div>
      </section>
    </>
  );
}
