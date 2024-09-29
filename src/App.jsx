import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Board from "./components/Board";

function App() {
  const [taskList, setTaskList] = useState([]);

  const handleTodoDone = (indexToDelete) => {
    setTaskList(taskList.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <div className="mx-12">
        <div className="flex flex-col items-center my-8 gap-6">
          <h1 className="text-2xl font-semibold">02 - To Do Board</h1>
          <Input taskList={taskList} setTaskList={setTaskList} />
        </div>
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 mx-4 sm:mx-8 md-mx-10 lg:mx-12">
          {taskList.map((taskItem, index) => (
            <Board
              key={index}
              taskItem={taskItem}
              handleTodoDone={() => handleTodoDone(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
