import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { friendsAvatar } from "../../lib/ffxiv";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ReactNode, useState } from "react";

type dialogs = {
  char: string;
  text: string;
  className?: string;
}[];

export default function ScrapbookPhoto({
  children,
  alt,
  src,
  height,
  width,
  className,
  imgClassName,
  dialogs,
  noborder,
}: {
  children?: ReactNode;
  alt: string;
  src: string;
  height: number;
  width: number;
  className?: string;
  imgClassName?: string;
  dialogs?: dialogs;
  noborder?: boolean;
}) {
  const [isShowing, setIsShowing] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const dialogBoxVariant: Variants = {
    hideDialog: {
      opacity: 0,
      y: -5,
      transition: {
        duration: 0.1,
        ease: "easeIn",
      },
    },
    showDialog: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 0.1,
        ease: "easeOut",
        staggerChildren: 2,
        when: "beforeChildren",
      },
    },
  };
  const dialogVariant: Variants = {
    hideDialog: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.1,
        ease: "easeIn",
      },
    },
    showDialog: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        type: "spring",
        stiffness: 300,
        damping: 32,
      },
    },
  };

  return (
    <motion.div
      className={className + " m-auto flex flex-col flex-auto"}
      initial="hideDialog"
      animate={isShowing ? "showDialog" : "hideDialog"}
      whileHover="showDialog"
      onHoverStart={() => {
        setIsHover(true);
      }}
      onHoverEnd={() => {
        setIsHover(false);
      }}
      onTap={() => {
        !isHover && setIsShowing(!isShowing);
      }}
    >
      <Tilt
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        tiltReverse
        scale={1.02}
        className="mx-auto"
      >
        <Image
          alt={alt}
          src={src}
          height={height}
          width={width}
          key={src}
          className={
            "transition duration-400 " +
            (!noborder &&
              "border-[16px] border-b-[32px] border-solid border-white shadow-md hover:shadow-xl ") +
            imgClassName
          }
        ></Image>
        {children}
        {dialogs && dialogs.length !== 0 && (
          <AnimatePresence>
            <motion.div
              variants={dialogBoxVariant}
              className="absolute top-4 left-4 backdrop-blur-sm dark:bg-black/30 bg-white/30 py-2 px-3 xl:py-4 xl:px-6 m-2 xl:m-4 rounded-lg shadow-lg transition duration-400 transform space-y-2"
            >
              {dialogs.map((dialog) => (
                <motion.div
                  variants={dialogVariant}
                  key={src}
                  className="flex flex-row flex-auto space-x-2 xl:space-x-4 items-center"
                >
                  <Image
                    src={friendsAvatar[dialog.char]}
                    alt={dialog.char + "'s avatar"}
                    height={64}
                    width={64}
                    className="rounded-full shadow-md w-[48px] h-auto xl:w-auto"
                  ></Image>
                  <div>
                    <div className="bg-stone-50 dark:bg-stone-800 px-4 py-2 rounded-lg shadow-md">
                      <p className={"font-sans text-md " + dialog.className}>
                        {dialog.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </Tilt>
    </motion.div>
  );
}
