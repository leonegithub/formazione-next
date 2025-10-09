import { useState } from "react";
import Link from "next/link";

interface Option {
    label: string;
    href: string;
}

interface AccordionComponentProps {
    options: Option[];
    accordionLabel: string;
}

function AccordionComponent({
                                options,
                                accordionLabel,
                            }: AccordionComponentProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mb-4 border  rounded-md">
            <button
                className="flex justify-between items-center w-full 0 focus:outline-none"
                onClick={toggleAccordion}
            >
                <span>{accordionLabel}</span>
                <span
                    className={`transform transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                >
          <i className="fa-solid fa-chevron-down"></i>
        </span>
            </button>
            {isOpen && (
                <div className="p-4 border-t ">
                    <ul>
                        {options.map((option, index) => (
                            <li key={index}>
                                <Link
                                    href={option.href}
                                    className="text-blue-600 hover:underline"
                                >
                                    {option.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default AccordionComponent;