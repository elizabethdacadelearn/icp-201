import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../compontes/navbar";
import { useEffect, useState } from "react";
import { employee_backend } from "declarations/employee_backend";
const ViewComapny = () => {
  const {name}=useParams();
  const router=useNavigate();
  console.log("id",name)
  const [data, setData] = useState([]);
  useEffect(() => {
    employee_backend.get_company(name).then((result) => {
      console.log(result, "results");
      setData(result.ok)
      
    });
  }, []);
  console.log("data", data);
  const handelnaviagte=()=>{

  }
  return (
    <div className="max-w-[1300px] mx-auto h-[100vh]">
      <NavBar />
      <div className="mt-4 h-full">
        {data.length ==0 ? (
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold my-2">No employee available</h1>
            <button className="bg-red-400 p-2 mx-3" onClick={()=>router(`/addemployee/${name}`)}>Navigate to add employess to create one</button>
          </div>
        ) : (
          <div className="mt-4">
            <h1 className="font-bold text-center text-xl">{name}</h1>
             {data.employess.length == 0 ? (
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold my-2">
                  No employees data is available
                </h1>
                <button className="bg-red-400 p-2 mx-3" onClick={()=>router(`/addemployee/${name}`)}>Navigate to add employess to create one</button>
              </div>
            ) : (
              <div className="">
                <h1 className="text-xl font-bold text-center underline">
                  Employee Management Sheet
                </h1>
                <table className="border p-3 m-3 w-full">
                  <thead className="p-3 border-b-3">
                    <tr className="p-3 border-b">
                      <td className="w-[200px] text-red-500">
                        Name of employee
                      </td>
                      <td className="w-[200px]  text-red-500">Rank</td>
                      <td className="w-[200px]  text-red-500">Salary</td>
                      <td className="w-[200px]  text-red-500">Tasks</td>
                    </tr>
                  </thead>
                  {data.employess.map((val, _index) => (
                   
                      <tbody key={_index}>
                        <tr>
                          <td className="py-3 w-[200px]">{val.name}</td>
                          <td className="py-3 w-[200px]">{val.rank}</td>
                          <td className="py-3 w-[200px]">{val.salary}</td>
                          <td className="py-3 w-[200px] cursor-pointer underline" onClick={()=>router(`/employee/${val.id}/${name}`)}>View tasks</td>
                        </tr>
                      </tbody>
                    
                  ))}
                </table>
              </div>
            )} 
             <button className="bg-red-400 p-2 mx-3" onClick={()=>router(`/addemployee/${name}`)}>add employess </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewComapny;
