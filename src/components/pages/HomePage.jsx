import Header from "../common/Header";
import Footer from "../common/Footer";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import WelcomeBanner from "./home/WelcomeBanner";
import QuizCard from "./home/QuizCard";
import useAxios from "../../hooks/useAxios";

const HomePage = () => {
  const { auth } = useAuth();
  const {api} = useAxios()
  console.log(auth, "this is the auth from homepage");
  const [quizList, setQuizList] = useState([]);

  // fetch quiz list to render in the ui
  useEffect(() => {
    const fetchQuizes = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/quizzes`
        );

        console.log(response, "this is the reponse in the home page");
        if (response.status === 200) {
          setQuizList([...response.data.data]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuizes();
  }, []);

  return (
    <>
      <div className="container mx-auto py-3">
        <Header />
        {auth?.data?.user && <WelcomeBanner />}
        <main className="bg-white p-6 rounded-md h-full">
          <section>
            <h3 className="text-2xl font-bold mb-6">Participate In Quizees</h3>
            {/* <!-- Cards --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quizList.map((quiz) => (
                <QuizCard key={quiz.id} quiz={quiz} />
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
