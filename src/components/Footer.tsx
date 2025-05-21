import PurrnamaLogo from "./svg/PurrnamaLogo";
import PurrnamaText from "./svg/PurrnamaText";
import { useIntl } from "react-intl";

export default function Footer() {
  const intl = useIntl();
  return (
    <div className="w-full bg-black/10 flex justify-center mt-8 py-8">
      <div className="lg:container grid grid-cols-2 lg:grid-cols-4 py-4 space-y-2 items-center px-4">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-2 items-center">
            <PurrnamaLogo className="h-6 w-auto" />
            <PurrnamaText className="h-4 w-auto" />
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
