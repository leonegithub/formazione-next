import Link from "next/link";
import { getDictionary} from "@/app/dictionaries";
import "./footer.css";

export default async function Footer({ params
                                     }: {
    params: { lang: "it" | "en" | "es"};
}) {
    const { lang } = params;
    const dict = await getDictionary(lang);
    return (
        <footer className="bg-gray-200 blue">
            {/* Widgets Section */}
            <section className="py-4 md:py-5 xl:py-6 2xl:py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div>
                            <div className="link-wrapper">
                                <div className="mb-1 font-bold">{dict.footer.services}</div>
                                <ul className="m-0 list-none pl-0">
                                    <li className="mb-1">
                                        <Link href={`/${lang}/servizi/downloads`}>
                                            {dict.footer.downloads}
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href={`/${lang}/servizi/newslist`}>
                                            {dict.footer.newslist}
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href={`/${lang}/servizi/assistenza-clienti`}>
                                            {dict.footer.customer_support}
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href={`/${lang}/login`}>
                                            {dict.footer.restricted_area}
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href={`/${lang}/azienda/whistleblowing`}>
                                            Whistleblowing
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="link-wrapper">
                                <div className="mb-1 font-bold">
                                    {dict.footer.scientific_publications}
                                </div>
                                <ul className="m-0 list-none pl-0">
                                    <li className="mb-1">
                                        <Link href={`/${lang}/pubblicazioni/ortodonzia`}>
                                            {dict.footer.orthodontics}
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href={`/${lang}/pubblicazioni/implantologia`}>
                                            {dict.footer.implantology}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="link-wrapper">
                                <div className="mb-1 font-bold">{dict.footer.quality}</div>
                                <ul className="m-0 list-none pl-0">
                                    <li className="mb-1">
                                        <Link href={`/${lang}/qualita/sistema-di-qualita`}>
                                            {dict.footer.quality_system}
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href={`/${lang}/qualita/schede-di-sicurezza`}>
                                            {dict.footer.safety_sheets}
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href={`/${lang}/qualita/istruzioni`}>
                                            {dict.footer.instructions}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="link-wrapper">
                                <div className="mb-1 font-bold">{dict.footer.distributors}</div>
                                <ul className="m-0 list-none pl-0">
                                    {lang === "it" ? (
                                        <>
                                            <li className="mb-1">
                                                <Link href={`/${lang}/distributori/ortodonzia`}>
                                                    Ortodonzia
                                                </Link>
                                            </li>
                                            <li className="mb-1">
                                                <Link href={`/${lang}/distributori/implantologia`}>
                                                    Implantologia
                                                </Link>
                                            </li>
                                        </>
                                    ) : (
                                        <li className="mb-1">
                                            <Link href={`/${lang}/distributori/worldwide`}>
                                                Worldwide
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Social Media Section */}
            <div className="pb-4">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-12 gap-3 items-start sm:items-center">
                        <div className="col-span-1 md:col-span-9">
                            <div className="link-wrapper">
                                <strong>Leone S.p.A.</strong>
                                <br/>
                                Via P. a Quaracchi, 50 - 50019 Sesto Fiorentino, Firenze
                                <br />
                                P. IVA 01686960483 Uff. Reg. Imprese Firenze n. 01686960483
                                <br />
                                <em>Cap. soc. Euro 1.200.000,00 int. vers.</em>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-3">
                            <div className="social-media-wrapper">
                                <ul className="m-0 socials-list list-none pl-0 flex justify-start sm:justify-end">
                                    <li>
                                        <Link
                                            className="pr-3 hover:opacity-75"
                                            href={`https://www.instagram.com/leone__america/`}
                                            target="_blank"
                                        >
                                            <i className="fa-brands fa-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="px-3 hover:opacity-75"
                                            href={`https://www.facebook.com/LeoneAmericaDentalProducts/`}
                                            target="_blank"
                                        >
                                            <i className="fa-brands fa-square-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="pl-3 hover:opacity-75"
                                            href={`https://www.linkedin.com/company/leone-america`}
                                            target="_blank"
                                        >
                                            <i className="fa-brands fa-linkedin"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}