//public\Bgs\HogwartsOnFire.jpg
export default function Home() {
  return (
    <main
      className="flex flex-col w-full "
      style={{
        backgroundImage: "url(HogwartsOnFire.jpg)",
        backgroundPosition: "top",
      }}
    >
      <nav className="flex flex-row h-20 w-full justify-between items-center px-4">
        <img src="NavBarLogo.png" className="w-12 h-auto" />
        <div className="flex justify-center items-center space-x-10  bg-[#B5935B] h-full px-24 rounded-b-2xl">
          <span className="text-xl font-semibold font-sans text-white">
            Home
          </span>
          <span className="text-xl font-semibold font-sans text-white">
            About Us
          </span>
          <span className="text-xl font-semibold font-sans text-white">
            House
          </span>
          <span className="text-xl font-semibold font-sans text-white">
            Course
          </span>
        </div>
        <div className="flex justify-center items-center px-3.5 py-2 bg-[#B5935B] rounded-md font-sans text-xl text-white">
          Attend
        </div>
      </nav>
      <div className="w-full h-[70vh] flex flex-col justify-center items-center mt-16 ">
        <h1 className="text-5xl text-center text-white">
          Witches , wizard & Website
        </h1>
        <div className="h-12"></div>
        <div className="w-3/4 flex justify-center items-center space-x-40">
          <div className="flex justify-center items-center px-3.5 py-2 bg-[#B5935B] rounded-md font-sans text-xl text-white w-30">
            Info
          </div>
          <div className="flex justify-center items-center px-3.5 py-2 bg-[#B5935B] rounded-md font-sans text-xl text-white w-30">
            Course
          </div>
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center mx-14"
        style={{
          backgroundImage: "url(HogwartsDining.jpg)",
          backgroundPosition: "center",
          height: "500px",
          width: "auto",
        }}
      >
        <h1 className="text-6xl text-center text-white">
          Hogwarts Welcome you
        </h1>
      </div>
    </main>
  );
}
