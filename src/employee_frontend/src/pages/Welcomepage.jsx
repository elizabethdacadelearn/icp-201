import { useNavigate } from "react-router-dom";
import AuthLoginOut from "../auth/login";

const WelcomePage = () => {
  const router = useNavigate();
  const handlesubmit = () => {
    router("/home");
  };
  return (
    <div className="max-w-[1300px] mx-auto h-full">
      <div className="flex flex-col items-center justify-center h-[100vh] border">
        <h1 className="font-bold text-center">Your employee management tool</h1>
        <AuthLoginOut />
      </div>
    </div>
  );
};

export default WelcomePage;
