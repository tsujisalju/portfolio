import { useState } from "react";
import { Listbox } from "@headlessui/react";

interface language {
  id: number;
  name: string;
  unavailable: boolean;
}

const languages: language[] = [
  { id: 1, name: "ENG", unavailable: false },
  { id: 2, name: "DE", unavailable: false },
  { id: 3, name: "MY", unavailable: false },
];

export default function LanguageSelect() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  return (
    <Listbox as={"div"} value={selectedLang} onChange={setSelectedLang}>
      <Listbox.Button className="text-left w-24 font-sans bg-stone-800 text-lg py-1 px-4 rounded-lg">
        {selectedLang.name}
      </Listbox.Button>
      <Listbox.Options
        className={
          "absolute w-24 right-6 text-lg bg-stone-700 p-2 mt-2 rounded-md space-y-1"
        }
      >
        {languages.map((lang) => (
          <Listbox.Option
            key={lang.id}
            value={lang}
            disabled={lang.unavailable}
          >
            {({ active, selected }) => (
              <li
                className={
                  "py-1 px-4 rounded-md " +
                  `${active ? "bg-stone-600" : "bg-transparent"}`
                }
              >
                {lang.name}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
