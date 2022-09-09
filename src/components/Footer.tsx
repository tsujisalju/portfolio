import Image from "next/image";
import { useIntl } from "react-intl";

export default function Footer() {
  const intl = useIntl();
  return (
    <div className="mt-8 flex flex-col py-4 space-y-2 items-center">
      <div className="md:self-center hidden dark:flex pb-2 md:pb-0">
        <Image
          alt="smolpadok logo"
          src="/img/logo-light.png"
          width={30}
          height={30}
          placeholder="empty"
          layout="fixed"
        ></Image>
      </div>
      <div className="flex md:self-center dark:hidden pb-2 md:pb-0">
        <Image
          alt="smolpadok logo"
          src="/img/logo-dark.png"
          width={30}
          height={30}
          placeholder="empty"
          layout="fixed"
        ></Image>
      </div>
      <p>
        {intl.formatMessage({ id: "Made with 😻 using Next.js and Tailwind" })}
      </p>
      <small>© 2022 smolpadok</small>
    </div>
  );
}
