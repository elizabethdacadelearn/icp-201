import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../compontes/navbar";
import { employee_backend } from "declarations/employee_backend";
import { useEffect, useState } from "react";
const ViewEmploye = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const router = useNavigate();
  useEffect(() => {
    employee_backend.get_employee_details(params.id).then((result) => {
      console.log("resulhjjht", result);
      setData(result.ok);
    });
  }, []);
  console.log("empid", data);
  const removeemployee = () => {
    employee_backend.remove_employee(params.id, params.name).then((result) => {
      router("/home");
    });
  };
  return (
    <div className="max-w-[1300px] mx-auto h-[100vh]">
      <NavBar />

      {data.length == 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="font-bold">No data available of employee</h1>
        </div>
      ) : (
        <>
          <div className="w-1/2 mx-auto border  mt-[100px] p-2 rounded-md">
            <h1 className="fot-bold my-2">
              name <span className="opacity-70">{data.name}</span>
            </h1>
            <p className="my-2">
              Rank <span className="opacity-70">{data.rank}</span>
            </p>
            <p className="">
              Salary <span className="opacity-70">{data.salary}</span>
            </p>
            <div className="">
              <p className="my-2">Tasks</p>
              {data.tasks.length == 0 ? (
                <div className="">
                  <h1>no tasks available</h1>
                </div>
              ) : (
                <div className="">
                  {data.tasks.map((val, index) => (
                    <div className="border-b" key={index}>
                      <h1 className="font-bold text-underline mb-2">{val.nameoftask}</h1>
                      <p className="text-sm opacity-70">{val.description}</p>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex justify-between my-3 ">
                <button
                  className="bg-red-500 p-2 rounded-md"
                  onClick={removeemployee}
                >
                  Remove employee
                </button>
                <button
                  className="bg-red-500 p-2 rounded-md"
                  onClick={() =>
                    router(`/assignstasks/${params.id}/${params.name}`)
                  }
                >
                  Assign tasks
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewEmploye;
