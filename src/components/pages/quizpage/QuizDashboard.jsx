import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import QuizDetails from "./QuizDetails";
import QuizList from "./QuizList";
import axios from "axios";
import { useParams } from "react-router-dom";

const QuizDashboard = () => {
  const { auth } = useAuth();
  const { quizId } = useParams();
  const [quizDetails, setQuizDetails] = useState({});

  useEffect(() => {
    try {
      const fetchQuizDetails = async () => {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/quizzes/${quizId}`
        );
        console.log(response, "this is the response of the quizDetails");
        if (response.data.status === "success") {
          setQuizDetails(response?.data?.data);
        }
      };
      fetchQuizDetails();
    } catch (err) {
      console.log(err);
    }
  }, [quizId]);
  
  return (
    <>
      <main className="max-w-8xl mx-auto h-[calc(100vh-10rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 h-full">
          {/* <!-- Left Column --> */}
          <QuizDetails />

          {/* <!-- Right Column --> */}
          <QuizList />
        </div>
      </main>
    </>
  );
};

export default QuizDashboard;
