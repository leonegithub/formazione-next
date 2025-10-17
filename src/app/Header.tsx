"use client";

import { useState } from "react";
import { Drawer } from "flowbite-react";
import AccordionComponent from "@/components/Accordion";
import DropdownComponent from "@/components/Dropdown";
import Link from "next/link";
import Image from "next/image";
import logoLeone from '@/../public/logoLeone.png'
import "./header.css";
import {
    getOptions2,
    getOptions4
} from "@/components/header-options";

export default function Header() {
    const [show, setShow] = useState(false);

    const options2 = getOptions2();
    const options4 = getOptions4();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <header className="flex items-center justify-center">
                <div className="container px-4 mx-auto flex items-center justify-between w-full">
                    <div className="logo">
                        <Link href={`/`}>
                            <Image src={logoLeone} width={125} alt="logo-leone" />
                        </Link>
                    </div>
                    <nav className="nav-menu flex-1 flex justify-center">
                        <ul className="xl:flex  items-center space-x-4">
                            <li>
                                <Link href={"/it"}>Centro Corsi ISO</Link>
                            </li>
                            <li>
                                <DropdownComponent options={options2} dropdownLabel="Corsi" />
                            </li>
                            <li>
                                <Link href={"/it/eventi"}>Eventi</Link>
                            </li>
                            <li>
                                <DropdownComponent options={options4} dropdownLabel="Relatori" />
                            </li>
                        </ul>
                    </nav>

                        <Link href="https://leoneit-next.vercel.app/it/login">
                            <div className="hidden md:flex blue items-center">
                                Register / Login
                            </div>
                        </Link>

                    <button className="hamburger" onClick={handleShow} aria-label="Menu">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>

                <Drawer
                    open={show}
                    onClose={handleClose}
                    position="right"
                    className="w-80"
                >
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-4">Menu</h2>
                        <nav className="mobile-body">
                            <ul>
                                <li>
                                    <Link href={"/it"}>Centro Corsi ISO</Link>
                                </li>
                                <li>
                                    <AccordionComponent
                                        options={options2}
                                        accordionLabel="Corsi"
                                    />
                                </li>
                                <li>
                                    <Link href={"/it/eventi"}>Eventi</Link>
                                </li>
                                <li>
                                    <AccordionComponent
                                        options={options4}
                                        accordionLabel="Relatori"
                                    />
                                </li>

                            </ul>
                        </nav>
                    </div>
                </Drawer>
            </header>
        </>
    );
}