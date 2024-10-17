import Image from "next/image";
import { useIntl } from "react-intl";

export default function Footer() {
  const intl = useIntl();
  return (
    <div className="mt-8 flex flex-col py-4 space-y-2 items-center px-4">
      <div className="md:self-center hidden dark:flex pb-2 md:pb-0">
        <Image
          alt="smolpadok logo"
          src="/img/logo-light-v2.png"
          width={40}
          height={40}
          placeholder="empty"
        ></Image>
      </div>
      <div className="flex md:self-center dark:hidden pb-2 md:pb-0">
        <Image
          alt="smolpadok logo"
          src="/img/logo-dark-v2.png"
          width={40}
          height={40}
          placeholder="empty"
        ></Image>
      </div>
      <small className="font-sans text-center text-xs opacity-50">
        {intl.formatMessage({
          id: "Artworks © Qayyum Yazid (A.K.A. purrnama). All non-original characters are copyright of their respective owners. Do not use any images commercially without my permission.",
        })}
      </small>
    </div>
  );
}
