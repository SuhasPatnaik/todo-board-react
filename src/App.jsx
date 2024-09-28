import { useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <div className="flex flex-col items-center my-8 gap-6">
        <h1 className="text-xl font-semibold">02 - To Do Board</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
        <div>
          {taskList.map((taskItem, index) => (
            <li key={index}>{taskItem}</li>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
