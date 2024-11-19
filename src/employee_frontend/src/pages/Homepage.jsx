import { useNavigate } from "react-router-dom";
import NavBar from "../compontes/navbar";
import { useState, useEffect } from "react";
import { employee_backend } from "declarations/employee_backend";
const HomePage = () => {
  const router = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    employee_backend.get_companies().then((result) => {
      console.log(result, "results");
      setData(result);
    });
  }, []);
  console.log("data", data);
  return (
    <div className="h-full max-w-[1300px] mx-auto mt-3">
      <NavBar />
      <div className="h-[100vh]">
        {data.length == 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="font-bold">No data available</h1>
            <button>Go to Create comapnies to create yours</button>
          </div>
        ) : (
          
          <div className="grid grid-cols-4 gap-3 mt-4">
            {data.map((val, _index) => (
              <div className="" key={_index}>
                <div className="border p-3 rounded-md ">
                  <h1 className="">
                    name<span className="opacity-70 pl-3">{val.name}</span>
                  </h1>
                  <p >number of employees <span className="opacity-70 pl-3">{val.employess?.length}</span></p>  
                  {/*
                  <p>date created:creted at <span className="opacity-70 pl-3">{val.created_at}</span></p>
                  <p >number of employees 23 <span className="opacity-70 pl-3">78</span></p> */}
                  <button
                    className="bg-blue-400 p-2 rounded-md"
                    onClick={() => router(`/view/${val.name}`)}
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
    </div>
  );
};

export default HomePage;
