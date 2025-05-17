import Image from "next/image";
import PurrnamaTypography from "../lib/svg/PurrnamaTypography";
import { useIntl } from "react-intl";

export default function Footer() {
  const intl = useIntl();
  return (
    <div className="w-full bg-black/10 flex justify-center mt-8 py-8">
      <div className="lg:container grid grid-cols-4 py-4 space-y-2 items-center px-4">
        <div className= "flex flex-col space-y-4">
          <div className="flex flex-row space-x-2 -ml-2 dark:ml-0 items-center">
            <div className="hidden dark:flex pb-2 md:pb-0">
              <Image
                alt="smolpadok logo"
                src="/img/logo-light-v2.png"
                width={40}
                height={40}
                placeholder="empty"
              ></Image>
            </div>
            <div className="flex dark:hidden pb-2 md:pb-0">
              <Image
                alt="smolpadok logo"
                src="/img/logo-dark-v2.png"
                width={40}
                height={40}
                placeholder="empty"
              ></Image>
            </div>
              <PurrnamaTypography className="h-[18px]" />
          </div>
          <small className="font-sans text-xs opacity-50">
            {intl.formatMessage({
              id: "Artworks © Qayyum Yazid (A.K.A. purrnama). All non-original characters are copyright of their respective owners. Do not use any images commercially without my permission.",
            })}
          </small>
        </div>
      </div>
    </div>
  );
}
