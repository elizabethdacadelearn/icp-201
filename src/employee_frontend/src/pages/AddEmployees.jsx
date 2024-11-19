import { useState } from "react";
import NavBar from "../compontes/navbar";
import { employee_backend } from "declarations/employee_backend";
import { useNavigate, useParams } from "react-router-dom";
const AddEmployee = () => {
  const {name}=useParams();
  const router=useNavigate()
  const [namee, setName] = useState("");
  const [salary, setSalary] = useState(0);
  const [rank, setRank] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault()
    const num = parseInt(salary);
     employee_backend.add_employee(name,namee,num,rank).then((result) => {
     
    router("/home")
     });
 
   };
  return (
    <div className="max-w-[1300px] mx-auto h-[100vh]">
      <NavBar />
      <div className="h-full flex flex-col items-center mt-[100px]">
        <h1 className="font-bold text-xl text-center">Add Company Employees</h1>
        <form action="" className="w-1/2" onSubmit={handleSubmit}>
          <div className="flex flex-col space-x-5">
            <label>Name of the employee</label>
            <input
              className="my-3 border"
              type="text"
              value={namee}
              onChange={(e) => setName(e.target.value)}
              minLength={5}
              maxLength={30}
              required
              placeholder="enter name of the employee eg samg"
            />
          </div>
          <div className="flex flex-col space-x-5">
          <label>Rank of employee</label>
            <input
              className="my-3 border"
              type="text"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              required
              placeholder="enter rank of employee"
            />
          </div>
          <div className="flex flex-col space-x-5">
            <label>Salary of employee</label>
            <input
              className="my-3 border"
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              min={5}
              required
              placeholder="enter salary of employee"
            />
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

export default AddEmployee;
