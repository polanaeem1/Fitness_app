"use client";
import { HiArrowLongRight } from "react-icons/hi2";
import { motion } from "motion/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const [shouldRender2, setShouldRender2] = useState(true);
  const [slug, setSlug] = useState("");
  const [op, setOp] = useState("");
  const handleOp = (e) => {
    setOp(e);
    router.push(`/${slug}/${e}`);
    
  };
  const handleClick = (e) => {
    setSlug(e);
    setIsVisible(false);
    setTimeout(() => {
      setShouldRender(false);
    }, 500);
    setTimeout(() => {
      setShouldRender2(false);
      setIsVisible(true);
    }, 600);
  };
  return (
    <>
      <div className="container flex justify-center flex-col sm:w-screen h-screen max-[2000px] mt-[-50]">
        <div className="hero pl-48">
          <h1 className="head text-white text-[10rem] font-bold">
            Healthy Body
          </h1>
          <p className="text-white text-lg mt-[-1.5rem]">
            Write in the questionnaire and we help you achieve results !
          </p>
        </div>
        <div className="hero-section pl-48 flex gap-16 mt-12">
          <p className="basis-1/5 text-white text-[1rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            voluptatum ipsam voluptas, in similique repudiandae suscipit omnis
            harum. Saepe sequi quod dolorem esse aut? Quidem a voluptates sunt
            reiciendis possimus.
          </p>
          <div className="hero-options basis-4/5 flex  gap-6 flex-wrap h-44 ">
            {shouldRender ? (
              <>
                <motion.div
                  onClick={() => handleClick("weight-loss")}
                  value={"weight-loss"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="big-opt w-96 flex-col gap-1 flex cursor-pointer bg-[#5d7480] bg-opacity-40 p-7 pl-12 rounded-lg hover:shadow-black shadow-2xl"
                >
                  <h5
                    value="weight-loss"
                    className="text-white text-[2rem] font-bold"
                  >
                    Weight Loss
                  </h5>
                  <p className="text-white text-[1rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="button flex text-white font-bold items-center gap-4 mt-4">
                    <span>CHOOSE</span>
                    <HiArrowLongRight className="text-[2rem]" />
                  </div>
                </motion.div>
                <motion.div
                  onClick={() => handleClick("weight-gain")}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="big-opt w-96 flex-col gap-1 flex cursor-pointer bg-[#5d7480] bg-opacity-40 p-7 pl-12 rounded-lg hover:shadow-black shadow-2xl"
                >
                  <h5 className="text-white text-[2rem] font-bold">
                    Weight Gain
                  </h5>
                  <p className="text-white text-[1rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="button flex text-white font-bold items-center gap-4 mt-4">
                    <span>CHOOSE</span>
                    <HiArrowLongRight className="text-[2rem]" />
                  </div>
                </motion.div>
              </>
            ) : shouldRender2 ? (
              <></>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-white text-[3rem] font-bold">
                    Do you do sport ?
                  </h3>
                  <motion.div className="flex  gap-12 mt-8">
                    {" "}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isVisible ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#34d399",
                        transition: { duration: 0.3 },
                      }}
                      onClick={() => handleOp("yes")}
                      className="opt w-72 flex-col gap-1 flex cursor-pointer bg-[#5d7480] bg-opacity-40 p-7 rounded-lg z-10 items-center hover:shadow-black shadow-2xl"
                    >
                      <h5 className="text-white text-[1.5rem] font-bold">
                        Yes
                      </h5>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isVisible ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#ff4747",
                        transition: { duration: 0.3 },
                      }}
                      onClick={() => handleOp("no")}
                      className="opt w-72 flex-col gap-1 flex cursor-pointer bg-[#5d7480] bg-opacity-40 p-7 rounded-lg z-10 items-center hover:shadow-black shadow-2xl"
                    >
                      <h5 className="text-white text-[1.5rem] font-bold">No</h5>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </>
              // <>
              //   <motion.div
              //     initial={{ opacity: 0 }}
              //     animate={{ opacity: isVisible ? 1 : 0 }}
              //     transition={{ duration: 0.5 }}
              //     className="opt w-72 flex-col gap-1 flex cursor-pointer bg-[#5d7480] bg-opacity-40 p-7 pl-10 rounded-lg z-10  hover:shadow-black shadow-2xl "
              //   >
              //     <h5 className="text-white text-[1.5rem] font-bold">
              //       Gain Weight
              //     </h5>
              //     <p className="text-white text-[0.8rem]">
              //       Lorem ipsum dolor sit amet consectetur adipisicing elit.
              //     </p>
              //     <div className="button flex text-white font-bold items-center gap-4 mt-4">
              //       <span>CHOOSE</span>
              //       <HiArrowLongRight className="text-[2rem]" />
              //     </div>
              //   </motion.div>
              //   <motion.div
              //     initial={{ opacity: 0 }}
              //     animate={{ opacity: isVisible ? 1 : 0 }}
              //     transition={{ duration: 0.5 }}
              //     className="opt w-72 flex-col gap-1 flex cursor-pointer bg-[#5d7480] bg-opacity-40 p-7 pl-10 rounded-lg z-10 hover:shadow-black shadow-2xl"
              //   >
              //     <h5 className="text-white text-[1.5rem] font-bold">
              //       Gain Weight
              //     </h5>
              //     <p className="text-white text-[0.8rem]">
              //       Lorem ipsum dolor sit amet consectetur adipisicing elit.
              //     </p>
              //     <div className="button flex text-white font-bold items-center gap-4 mt-4">
              //       <span>CHOOSE</span>
              //       <HiArrowLongRight className="text-[2rem]" />
              //     </div>
              //   </motion.div>
              //   <motion.div
              //     initial={{ opacity: 0 }}
              //     animate={{ opacity: isVisible ? 1 : 0 }}
              //     transition={{ duration: 0.5 }}
              //     className="opt w-72 flex-col gap-1 flex cursor-pointer bg-[#5d7480] bg-opacity-40 p-7 pl-10 rounded-lg z-10 hover:shadow-black shadow-2xl"
              //   >
              //     <h5 className="text-white text-[1.5rem] font-bold">
              //       Gain Weight
              //     </h5>
              //     <p className="text-white text-[0.8rem]">
              //       Lorem ipsum dolor sit amet consectetur adipisicing elit.
              //     </p>
              //     <div className="button flex text-white font-bold items-center gap-4 mt-4">
              //       <span>CHOOSE</span>
              //       <HiArrowLongRight className="text-[2rem]" />
              //     </div>
              //   </motion.div>
              // </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
