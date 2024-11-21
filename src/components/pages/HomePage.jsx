import Header from "../common/Header";
import Background2 from "../../assets/backgrounds/2.jpg";
import Background3 from "../../assets/backgrounds/3.jpg";
import Background4 from "../../assets/backgrounds/4.jpg";
import Background5 from "../../assets/backgrounds/5.jpg";
import Footer from "../common/Footer";
import { useAuth } from "../../hooks/useAuth";

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth, "this is the auth data from our home page");
  return (
    <>
      <div className="container mx-auto py-3">
        <Header />

        <div className="text-center mb-12">
          <img
            src="./assets/avater.webp"
            alt="Profile Picture"
            className="w-32 h-32 rounded-full border-4 border-primary mx-auto mb-4 object-cover"
          />
          <p className="text-xl text-gray-600">Welcome</p>
          <h2 className="text-4xl font-bold text-gray-700">Saad Hasan</h2>
        </div>

        <main className="bg-white p-6 rounded-md h-full">
          <section>
            <h3 className="text-2xl font-bold mb-6">Participate In Quizees</h3>

            {/* <!-- Cards --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a
                href="./result.html"
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow max-h-[450px] relative group cursor-pointer"
              >
                <div className="group-hover:scale-105 absolute transition-all text-white  text-center top-1/2 -translate-y-1/2 px-4">
                  <h1 className=" text-5xl">JavaScript Basic Quiz</h1>
                  <p className="mt-2 text-lg">
                    Test your knowledge of JavaScript basics with quizzes that
                    cover essential concepts, syntax, and foundational
                    programming skills
                  </p>
                </div>
                <div className="hidden absolute transition-all bg-black/80 w-full h-full left-0 top-0 text-white group-hover:grid place-items-center">
                  <div>
                    <h1 className="text-3xl font-bold">Already Participated</h1>
                    <p className="text-center">
                      Click to view your leaderboard
                    </p>
                  </div>
                </div>
                <img
                  src={Background2}
                  alt="JavaScript Hoisting"
                  className="w-full h-full object-cover rounded mb-4"
                />
              </a>

              <a
                href="./quiz_page.html"
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow max-h-[450px] cursor-pointer group relative"
              >
                <div className="group-hover:scale-105 absolute transition-all text-white  text-center top-1/2 -translate-y-1/2 px-4">
                  <h1 className=" text-5xl">JavaScript Basic Quiz</h1>
                  <p className="mt-2 text-lg">
                    Test your knowledge of JavaScript basics with quizzes that
                    cover essential concepts, syntax, and foundational
                    programming skills
                  </p>
                </div>
                <img
                  src={Background3}
                  alt="JavaScript Hoisting"
                  className="w-full h-full object-cover rounded mb-4 transition-all "
                />
              </a>

              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow max-h-[450px] cursor-pointer group relative">
                <div className="group-hover:scale-105 absolute transition-all text-white  text-center top-1/2 -translate-y-1/2 px-4">
                  <h1 className=" text-5xl">JavaScript Basic Quiz</h1>
                  <p className="mt-2 text-lg">
                    Test your knowledge of JavaScript basics with quizzes that
                    cover essential concepts, syntax, and foundational
                    programming skills
                  </p>
                </div>
                <img
                  src={Background4}
                  alt="JavaScript Hoisting"
                  className="w-full h-full object-cover rounded mb-4 transition-all "
                />
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow max-h-[450px] relative group cursor-pointer ">
                <div className="absolute transition-all text-white  text-center top-1/2 -translate-y-1/2 px-4">
                  <h1 className=" text-5xl">JavaScript Basic Quiz</h1>
                  <p className="mt-2 text-lg">
                    Test your knowledge of JavaScript basics with quizzes that
                    cover essential concepts, syntax, and foundational
                    programming skills
                  </p>
                </div>
                <div className="hidden absolute transition-all bg-black/80 w-full h-full left-0 top-0 text-white group-hover:grid place-items-center">
                  <div>
                    <h1 className="text-3xl font-bold">Already Participated</h1>
                    <p className="text-center">You got 20 out of 50</p>
                  </div>
                </div>
                <img
                  src={Background5}
                  alt="JavaScript Hoisting"
                  className="w-full h-full object-cover rounded mb-4 "
                />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
