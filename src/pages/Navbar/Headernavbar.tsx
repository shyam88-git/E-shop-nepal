import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Headernavbar = () => {
  const naviagte = useNavigate();
  return (
    <div className="w-full mr-4 bg-blue-900 shadow-2xl">
      <div className="flex justify-between mr-8 ml-6 items-center py-2 md:py-4">
        <div className="w-44 h-10 md:h-12 flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-full object-contain rounded-md"
          />
        </div>
        <p className="text-2xl md:text-4xl font-bold text-white ml-4">
          E-Shop Nepal
        </p>
        <Button
          onClick={() => naviagte("/dashboard")}
          className="bg-blue-600 hover:bg-white hover:text-black"
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default Headernavbar;
