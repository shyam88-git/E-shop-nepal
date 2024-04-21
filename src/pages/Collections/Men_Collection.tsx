import { Button } from "@/components/ui/button";
import men1 from "/images/men1.jpg";
import men2 from "/images/men2.jpeg";
import men3 from "/images/men4.jpeg";
import men4 from "/images/men5.jpeg";
import Headernavbar from "../Navbar/Headernavbar";

const images = [men1, men2, men3, men4];

const Men_Collection = () => {
  return (
    <>
      <Headernavbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mt-32">
        {images.map((item, index) => (
          <div
            key={index}
            className="w-full p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
          >
            <img
              className="h-48 w-full object-cover rounded-xl"
              alt=""
              src={item}
            />
            <div className="p-2">
              <h2 className="font-bold text-blue-900 text-lg mb-2">Heading</h2>
              <h6 className="font-bold text-lg mb-2 text-slate-500">Men</h6>
              <p className="text-sm text-gray-600">
                Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to
                our Youtube channel for more ...
              </p>
            </div>
            <div className="m-2">
              <a
                role="button"
                href="#"
                className="text-white px-3 py-1 rounded-md"
              >
                Learn More
              </a>
              <div className="flex justify-center gap-4 mt-2">
                <Button className="bg-blue-900">Add To Card</Button>
                <p className="text-xl font-bold mt-2 text-pink-600">Rs.250</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Men_Collection;
