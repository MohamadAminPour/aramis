import { Navigate } from "react-router-dom";
import Menu from "../components/Menu";

export default function Cart() {
  return (
    <div className="h-[100vh] flex items-center justify-center">
        <div className="contain w-[95%] h-[100vh]">
          <Menu />
          <Navigate to="/" />
        </div>
      </div>
  );
}
