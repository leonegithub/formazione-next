import { useState } from "react";
import Image from "next/image";
import ItalianFlag from '@/../public/italia.png';
import UsaFlag from '@/../public/united-states.png';
import EspanaFlag from '@/../public/espana.png'
import { usePathname, useRouter } from "next/navigation";

const languages = [
    { code: "it", flag: ItalianFlag, alt: "italian-flag" },
    { code: "en", flag: UsaFlag, alt: "american-flag" },
    { code: "es", flag: EspanaFlag, alt: "espana-flag"}
];

function LanguageDropdown({ lang }: { lang: string }) {
    const router = useRouter();
    const pathname = usePathname();
    const current = languages.find(l => l.code === lang) || languages[0];

    // Stato per mostrare/nascondere il dropdown
    const [open, setOpen] = useState(false);

    function handleLanguageChange(code: string) {
        if (code === lang) return;
        const segments = pathname.split("/");
        segments[1] = code;
        const newPath = segments.join("/");
        setOpen(false); // chiudi il dropdown dopo il click
        router.push(newPath);
    }

    return (
        <div className="relative pt-2">
            <button
                id="dropdownDefaultButton"
                onClick={() => setOpen((prev) => !prev)}
                className="blue focus:outline-none font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
            >
                <Image src={current.flag} alt="Selected language" width={24} height={16} />
                <svg className="w-2.5 h-2.5 mx-3" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <div
                id="dropdown"
                className={`z-10 ${open ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-22 dark:bg-gray-700 absolute`}
            >
                <ul style={{paddingLeft: 0}} className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    {languages.map(langObj => (
                        <li className="py-1" key={langObj.code}>
                            <Image
                                onClick={() => handleLanguageChange(langObj.code)}
                                src={langObj.flag}
                                alt={langObj.alt}
                                width={24}
                                height={16}
                                style={{
                                    cursor: langObj.code === lang ? "not-allowed" : "pointer",
                                    opacity: langObj.code === lang ? 0.5 : 1
                                }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default LanguageDropdown;