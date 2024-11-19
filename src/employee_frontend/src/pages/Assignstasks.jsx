import { useState } from "react";
import NavBar from "../compontes/navbar";
import { employee_backend } from "declarations/employee_backend";
import { useNavigate, useParams } from "react-router-dom";
const AssignsTaks = () => {
  const [description, setDescription] = useState("");
  const [task, setTask] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const router = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    employee_backend
      .assign_tasks(params.name, params.id, task, description)
      .then((result) => {
        router(`/view/${params.name}`);
      });
  };
  return (
    <div className="max-w-[1300px] mx-auto h-[100vh]">
      <NavBar />
      <div className="h-full flex flex-col items-center mt-[100px]">
        <h1 className="font-bold text-xl text-center">Assigns Tasks</h1>
        <form action="" className="w-1/2" onSubmit={handleSubmit}>
          <div className="flex flex-col space-x-5">
            <label>Name of the task</label>
            <input
              className="my-3 border"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              minLength={5}
              maxLength={30}
              required
              placeholder="enter name of the task"
            />
            <div className="flex flex-col space-x-5">
              <label>Task Description</label>
              <textarea
                className="my-3 border"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                minLength={30}
                maxLength={200}
                required
                placeholder="description of the task you want to assign"
              />
            </div>
          </div>
          <div className="flex my-3 justify-end">
            <button
              type="submit"
              className="bg-blue-600 active:bg-blue-800 hover:bg-blue-700 rounded-md p-3"
              disabled={isLoading}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignsTaks;
