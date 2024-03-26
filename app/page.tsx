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
          <span className="text-3xl font-semibold text-white">Home</span>
          <span className="text-3xl font-semibold  text-white">About Us</span>
          <span className="text-3xl font-semibold  text-white">House</span>
          <span className="text-3xl font-semibold  text-white">Course</span>
        </div>
        <div className="flex justify-center items-center px-3.5 py-2 bg-[#B5935B] rounded-md  text-xl text-white">
          Attend
        </div>
      </nav>
      <div className="w-full h-[70vh] flex flex-col justify-center items-center mt-16 ">
        <h1 className="text-8xl text-center text-white">
          Witches , Wizard & Website
        </h1>
        <div className="h-12"></div>
        <div className="w-3/4 flex justify-center items-center space-x-40">
          <div className="flex justify-center items-center px-3.5 py-2 bg-[#B5935B] rounded-md  text-2xl text-white w-30">
            Info
          </div>
          <div className="flex justify-center items-center px-3.5 py-2 bg-[#B5935B] rounded-md  text-2xl text-white w-30">
            Course
          </div>
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center mx-14 rounded-lg "
        style={{
          backgroundImage: "url(HogwartsDining.jpg)",
          backgroundPosition: "center",
          height: "700px",
          width: "auto",
          border: "2px solid #B5935B",
        }}
      >
        <h1 className="text-6xl text-center text-white">
          Hogwarts Welcome you
        </h1>
        <p className="text-center text-white py-12 px-6">
          Hogwarts is one of the world’s finest wizarding schools, located in a
          massive castle in Scotland. Hogwarts takes students from all over
          Great Britain, starting at the age of 11. The students leave school
          after their seventh year. The students at Hogwarts are sorted at the
          beginning of their first year into one of four houses: Gryffindor,
          Hufflepuff, Ravenclaw, and Slytherin. The houses are named after the
          four founders of the school, who established Hogwarts around 990
        </p>
        <p className="text-center text-white px-6">
          Hogwarts is home to a student body of between 300 and 400 students,
          around fifteen teachers and staff, numerous ghosts, house-elves, and a
          particularly annoying poltergeist. The many rooms, corridors,
          staircases, passageways, and dungeons hold many secrets and mysteries
          from a thousand years’ worth of magical history. The school motto,
          which appears on the crest, is “Draco dormiens nunquam titillandus,”
          which means “Never tickle a sleeping dragon.”
        </p>
        <div className="flex flex-col justify-center items-center space-y-12 mt-16">
          <h1 className="text-6xl text-center text-white">Hogwarts Houses</h1>
          <div className="flex justify-center space-x-28 items-center">
            <img src="Houses/Griffindor.png" className="w-32 h-auto" />
            <img src="Houses/Huffelpuff.png" className="w-32 h-auto" />
            <img src="Houses/MafloyHouseEWW.png" className="w-32 h-auto" />
            <img src="Houses/RavenClaw.png" className="w-32 h-auto" />
          </div>
        </div>
      </div>

      <div className="h-44"></div>
      <div className="flex flex-col space-y-7 mx-12">
        <div
          className="flex space-x-6  rounded-lg justify-around items-center py-16"
          style={{
            backgroundImage: "url(CoursesBg.jpg)",
            backgroundPosition: "center",
            backgroundSize: "clip",
          }}
        >
          <h1 className="text-6xl font-semibold text-white">First Year</h1>
          <img
            src="Subjects/transfiguration.png"
            className="h-44 w-44 rounded-2xl border-2 border-black"
          />
          <img
            src="Subjects/alchemy.png"
            className="h-44 w-44 rounded-2xl border-2 border-black"
          />
          <img
            src="Subjects/dd.png"
            className="h-44 w-44 rounded-2xl border-2 border-black"
          />
        </div>
        <div className="flex space-x-6  rounded-lg justify-around items-center py-16"
          style={{
            backgroundImage: "url(CoursesBg.jpg)",
            backgroundPosition: "center",
            backgroundSize: "clip",
          }}
        >
          <h1 className="text-6xl font-semibold text-white">Second Year</h1>
          <img
            src="Subjects/cosmology.png"
            className="h-44 w-44 rounded-2xl border-2 border-black"
          />
          <img
            src="Subjects/hebology.png"
            className="h-44 w-44 rounded-2xl border-2 border-black"
          />
          <img
            src="Subjects/Potions.png"
            className="h-44 w-44 rounded-2xl border-2 border-black"
          />
        </div>
      </div>
      <div className="h-52"></div>
    </main>
  );
}
