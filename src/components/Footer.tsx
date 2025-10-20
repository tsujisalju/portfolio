import TsujisaljuTextLogoHologram from "../lib/svg/TsujisaljuTextLogoHologram";
import TsujisaljuTextPlain from "../lib/svg/TsujisaljuTextLogoPlain";
import { useIntl } from "react-intl";

export default function Footer() {
  const intl = useIntl();
  return (
    <div className="w-full bg-black/10 flex justify-center mt-8 py-8">
      <div className="lg:container grid grid-cols-2 lg:grid-cols-4 py-4 gap-2 items-center px-4">
        <div className="flex flex-col gap-4">
          <div>
            <TsujisaljuTextLogoHologram className="h-10 hidden dark:inline" />
            <TsujisaljuTextPlain className="h-10 inline dark:hidden" />
          </div>
          <small className="font-sans text-xs opacity-50">
            {intl.formatMessage({
              id: "Artworks © Qayyum Yazid (A.K.A. tsujisalju). All non-original characters are copyright of their respective owners. Do not use any images commercially without my permission.",
            })}
          </small>
        </div>
      </div>
    </div>
  );
}
