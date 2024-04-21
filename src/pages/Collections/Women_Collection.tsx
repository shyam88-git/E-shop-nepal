import { Button } from "@/components/ui/button";
import women1 from "../../../public/images/woman.jpeg";
import women2 from "../../../public/images/woman2.jpeg";
import women3 from "../../../public/images/woman3.jpeg";
import women4 from "../../../public/images/woman4.jpeg";
import women5 from "../../../public/images/women5.webp";

import Headernavbar from "../Navbar/Headernavbar";

const images = [women1, women2, women3, women4, women5];

const Women_Collection = () => {
  return (
    <>
      <Headernavbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-5 mt-32">
        {images.map((item, index) => (
          <div
            key={index}
            className="w-full mt-8 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
          >
            <img
              className="h-44 w-full object-cover rounded-xl"
              alt=""
              src={item}
            />
            <div className="p-2">
              <h2 className="font-bold text-blue-900 text-lg mb-2">Heading</h2>
              <h6 className="font-bold text-lg mb-2 text-slate-500">Men</h6>
              <p className="text-sm text-gray-600">
                Simple Yet Beautiful Card Design with TaiwlindCss. ...
              </p>
            </div>

            <div className="flex justify-center gap-4 mb-2">
              <Button className="bg-blue-900">Add To Card</Button>
              <p className="text-xl font-bold mt-2 text-pink-600">Rs.250</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Women_Collection;
