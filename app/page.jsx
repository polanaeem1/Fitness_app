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
      <div className="container flex justify-center flex-col sm:w-screen h-screen ">
        <div className="hero pl-6 xl:pl-48 lg:pl-36 sm:pl-20">
          <h1 className="head text-white text-[2.5rem] sm:text-[4rem] font-bold lg:text-[6rem] xl:text-[10rem]">
            Healthy Body
          </h1>
          <p className="text-white text-xs mt-[-0.5rem] lg:text-md lg:mt-[-1rem] xl:text-lg xl:mt-[-1.5rem]">
            Write in the questionnaire and we help you achieve results !
          </p>
        </div>
        <div className="hero-section pl-10 xl:pl-48 flex gap-16 mt-12 lg:pl-36 sm:pl-20">
          <p className="basis-1/5 text-white text-[1rem] hidden lg:text-[0.9rem] xl:text-[1rem] xl:block lg:hidden sm:hidden">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            voluptatum ipsam voluptas, in similique repudiandae suscipit omnis
            harum. Saepe sequi quod dolorem esse aut? Quidem a voluptates sunt
            reiciendis possimus.
          </p>
          <div className="hero-options basis-4/5 flex  gap-6 flex-wrap h-44  lg:basis-full ">
            {shouldRender ? (
              <>
                <motion.div
                  onClick={() => handleClick("weight-loss")}
                  value={"weight-loss"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="big-opt p-5 pl-10 sm:w-96 flex-col gap-1 flex cursor-pointer bg-[#5d7480] bg-opacity-40 rounded-lg hover:shadow-black shadow-2xl lg:p-5 lg:pl-10 xl:p-7 xl:pl-12 sm:p-7 sm:pl-12"
                >
                  <h5
                    value="weight-loss"
                    className="text-white text-[1.5rem] font-bold lg:text-[1.5rem] xl:text-[2rem]"
                  >
                    Weight Loss
                  </h5>
                  <p className="text-white text-[0.7rem] lg:text-[0.8rem] xl:text-[1rem]">
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
                  className="big-opt p-5 pl-10 sm:w-96 flex-col gap-1 flex cursor-pointer bg-[#5d7480] bg-opacity-40 rounded-lg hover:shadow-black shadow-2xl lg:p-5 lg:pl-10 xl:p-7 xl:pl-12 sm:p-7 sm:pl-12"
                >
                  <h5 className="text-white text-[1.5rem] font-bold lg:text-[1.5rem] xl:text-[2rem]">
                    Weight Gain
                  </h5>
                  <p className="text-white text-[0.7rem] lg:text-[0.8rem] xl:text-[1rem]">
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
                  <h3 className="text-white sm:text-[3rem] font-bold text-[1.5rem]">
                    Do you do sport ?
                  </h3>
                  <motion.div className="flex gap-10 sm:gap-12 mt-8 flex-wrap sm:flex-nowrap">
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
                      className="opt w-60 sm:w-72 flex-col gap-1 flex cursor-pointer bg-[#5d7480] bg-opacity-40 p-7 rounded-lg z-10 items-center hover:shadow-black shadow-2xl"
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
                      className="opt w-60 sm:w-72 flex-col gap-1 flex cursor-pointer bg-[#5d7480] bg-opacity-40 p-7 rounded-lg z-10 items-center hover:shadow-black shadow-2xl"
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
