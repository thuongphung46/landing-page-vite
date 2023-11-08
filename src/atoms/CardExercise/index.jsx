import "./index.scss";
import { Data } from "../../data/ExerciseDataImage";
import { motion } from "framer-motion";
import UseGetWith from "../../hook/useGetWith";

export const CardExercise = () => {
  const { width } = UseGetWith();
  const SizeWidth = width < 600;

  return (
    <div className="w-full flex justify-center ">
      <div className="max-w-[1200px]">
        <div class="row">
          {Data.map((items, i) => (
            <>
              <div key={i} class="column">
                <motion.img
                  style={{
                    animationName: "fadeInRight",
                    animationDuration: "2s",
                    animationTimingFunction: "ease-out",
                  }}
                  src={items.url}
                  className="w-full h-full object-cover  rounded"
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
