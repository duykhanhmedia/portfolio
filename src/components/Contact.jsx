import React, { useRef, useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { publicUrls } from "../constants";

const Contact = () => {
  return (
    <>
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="relative flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          {/* Social Profiles */}
          <div className="flex items-center justify-end space-x-4 absolute top-8 right-4">
            {Object.keys(publicUrls.socialProfiles).map((socialProfile) => {
              const profile = publicUrls.socialProfiles[socialProfile];
              return (
                <div
                  key={`social_${profile.title}`}
                  onClick={() => window.open(profile.link, "_blank")}
                  className="green-pink-gradient lg:w-10 lg:h-10 h-8 w-8 rounded-full flex justify-center items-center cursor-pointer hover:scale-110"
                >
                  <img
                    src={profile.icon}
                    alt={`social_${profile.title}`}
                    className="w-4/6 h-4/6 object-contain"
                  />
                </div>
              );
            })}
          </div>

          <h3 className={styles.sectionHeadText}>Contact</h3>

          {/* Contact Information */}
          <div className="mt-12 flex flex-col gap-8">
            <div className="flex items-center space-x-3">
              <div className="text-blue-500" size={20} />
              <p className="text-white font-medium">
                <strong>Phone:</strong> 0345 202 500
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-blue-500" size={20} />
              <p className="text-white font-medium">
                <strong>Facebook:</strong>{" "}
                <a
                  href="https://www.facebook.com/duykhanhit15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-500"
                >
                  https://www.facebook.com/duykhanhit15
                </a>
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-blue-500" size={20} />
              <p className="text-white font-medium">
                <strong>Zalo:</strong>{" "}
                <a
                  href="https://zalo.me/0345202500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-500"
                >
                  https://zalo.me/0345202500
                </a>
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-blue-500" size={20} />
              <p className="text-white font-medium">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:ndkhanh151097@gmail.com"
                  className="underline text-blue-500"
                >
                  ndkhanh151097@gmail.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
