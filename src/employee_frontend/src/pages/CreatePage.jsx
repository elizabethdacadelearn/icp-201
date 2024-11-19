import { useEffect, useState } from "react";
import NavBar from "../compontes/navbar";
import { useNavigate } from "react-router-dom";
import { employee_backend } from "declarations/employee_backend";
const CreateComapny = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useNavigate();
  const handleSubmit = (e) => {
   e.preventDefault()
    employee_backend.create_company(name).then((result) => {});

  };
  
  return (
    <div className="max-w-[1300px] mx-auto h-[100vh]">
      <NavBar />
      <div className="h-full flex flex-col items-center mt-[100px]">
        <h1 className="font-bold text-xl text-center">Register Company</h1>
        <form action="" className="w-1/2" onSubmit={handleSubmit}>
          <div className="flex flex-col space-x-5">
            <label>Name of the company</label>
            <input
              className="my-3 border"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              minLength={5}
              maxLength={30}
              required
              placeholder="enter name of the company eg samg"
            />
          </div>
          <div className="flex my-3 justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 active:bg-blue-800 hover:bg-blue-700 rounded-md p-3"
             
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateComapny;
