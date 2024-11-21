import Header from "../common/Header";
import Background2 from "../../assets/backgrounds/2.jpg";
import Background3 from "../../assets/backgrounds/3.jpg";
import Background4 from "../../assets/backgrounds/4.jpg";
import Background5 from "../../assets/backgrounds/5.jpg";
import Footer from "../common/Footer";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import WelcomeBanner from "./home/WelcomeBanner";
import QuizCard from "./home/QuizCard";

const HomePage = () => {
  const { auth } = useAuth();
  const [quizList, setQuizList] = useState([]);

  // fetch quiz list to render in the ui
  useEffect(() => {
    const fetchQuizes = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/quizzes`
        );
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
