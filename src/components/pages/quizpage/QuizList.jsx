const QuizList = () => {
  return (
    <>
      <div className="lg:col-span-2 bg-white">
        <div className="bg-white p-6 !pb-2 rounded-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold">
              3. What is the height of an empty binary tree?
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* <!-- Option 1 --> */}
            <label className="flex items-center space-x-3 py-3 px-4 bg-primary/5 rounded-md text-lg">
              <input
                type="checkbox"
                name="answer1"
                className="form-radio text-buzzr-purple"
                checked
              />
              <span>0</span>
            </label>

            {/* <!-- Option 2 --> */}
            <label className="flex items-center space-x-3 py-3 px-4 bg-primary/5 rounded-md text-lg">
              <input
                type="checkbox"
                name="answer2"
                className="form-radio text-buzzr-purple"
              />
              <span>-1</span>
            </label>

            {/* <!-- Option 3 --> */}
            <label className="flex items-center space-x-3 py-3 px-4 bg-primary/5 rounded-md text-lg">
              <input
                type="checkbox"
                name="answer3"
                className="form-radio text-buzzr-purple"
              />
              <span>1</span>
            </label>

            {/* <!-- Option 4 --> */}
            <label className="flex items-center space-x-3 py-3 px-4 bg-primary/5 rounded-md text-lg">
              <input
                type="checkbox"
                name="answer4"
                className="form-radio text-buzzr-purple"
              />
              <span>1</span>
            </label>
          </div>
          <a
            href="./result.html"
            className="w-1/2 text-center ml-auto block bg-primary text-white py-2 px-4 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mb-6 font-semibold my-8"
          >
            Next
          </a>
        </div>
      </div>
    </>
  );
};

export default QuizList;
