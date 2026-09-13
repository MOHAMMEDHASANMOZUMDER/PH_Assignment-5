import { ToastContainer, toast } from "react-toastify";
import {use} from "react";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}
type TechsProps = { techPromise: Promise<Technology[]> };
const Techs = ({ techPromise }: TechsProps) => {
  const technologies = use(techPromise);
  const [stack, setStack] = useState<Technology[]>([]);
  const addToStack = (technology: Technology) => {
    if (stack.some((tech) => tech.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };
  const removeFromStack = (id: string) => {
    const technology = stack.find((tech) => tech.id === id);
    setStack((prev) => prev.filter((tech) => tech.id !== id));
    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };
  const removeAll = () => {
    setStack([]);
    toast.info("All technologies removed from your stack.");
  };
  return (
    <section>
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="px-[72px]">
        <div className="flex flex-col pl-[34px] mb-8">
          <p className="text-[36px] font-[800]">
            Explore the
            <span className="bg-gradient-to-r from-[#EC4899] from-0% to-[#8B5CF6] to-100% bg-clip-text text-transparent">
              Technologies
            </span>
          </p>
          <p>
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        <div className="flex sm:flex-row flex-col gap-[100px] px-[32px]">
          
          <div className="sm:grid grid-cols-[repeat(3,288px)] grid-rows-[repeat(5,282px)] gap-[20px] flex flex-col">
            
            {technologies.map((i) => {
              const isAdded = stack.some((tech) => tech.id === i.id);
              return (
                <div key={i.id} className="w-72 p-5 bg-white rounded-2xl border-[1px] border-[#f1f5f9FF]">
                  <div className="flex justify-between items-center mb-3">
                    <img src={i.icon} alt="Stack img" className="l-[28px] w-[28px] rounded-sm"/>
                    <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                      {i.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{i.name}</h3>
                  <p className="text-gray-500 text-sm my-3">{i.description}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      {i.category}
                    </span>
                    <span>{i.difficulty}</span>
                    <span className="text-gray-800 font-bold">
                      <span className="text-orange-300">&#9733;</span>
                      {i.rating}
                    </span>
                  </div>
                  <button onClick={() => addToStack(i)} className="w-full bg-black text-white text-sm py-2 rounded-lg font-medium cursor-pointer">
                    {isAdded ? "Added" : "Add to Stack"}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="border-[#f1f5f9FF] border-[1px] w-[300px] rounded-2xl">
            
            <div className="p-[20px] flex flex-col gap-[4px]">
              <div>
                <p className="text-[16px] font-[700]">Your Stack</p>
                <p className="text-[12px] font-[400] text-[#94a3b8FF] pb-[5px]">
                  {stack.length === 0
                    ? "No technologies seleted yet."
                    : `${stack.length} technolog${stack.length === 1 ? "y" : "ies"} selected.`}
                </p>
              </div>
              {stack.length === 0 ? (
                <div className="text-[#94a3b8FF] border-gray-400 border-dashed border-[2px] text-[12px] px-[63px] py-[24px] rounded-2xl">
                  Your Stack is Empty
                </div>
              ) : (
                <>
                  <div className="flex flex-col gap-3">
                    
                    {stack.map((i) => (
                      <div key={i.id} className="flex items-center justify-between border border-gray-200 rounded-xl p-3">
                        <div className="flex items-center gap-3">
                          <img src={i.icon} alt={i.name} className="w-[28px] h-[28px] rounded-sm"/>
                          <div>
                            <p className="text-sm font-semibold text-gray-800">
                              {i.name}
                            </p>
                            <p className="text-xs text-gray-400">
                              {i.category}
                            </p>
                          </div>
                        </div>
                        <button onClick={() => removeFromStack(i.id)} className="text-gray-400 hover:text-red-500 text-sm">
                        ×
                        </button>
                      </div>
                    ))}
                  </div>
                  <button onClick={removeAll} className="w-full text-red-500 border border-red-200 text-sm py-2 rounded-lg font-medium mt-2">
                    Remove All
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Techs;
