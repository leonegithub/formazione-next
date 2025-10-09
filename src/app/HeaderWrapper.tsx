import Header from "@/app/Header";
import { getDictionary } from "@/app/dictionaries";

export default async function HeaderWrapper({
    params,
}: {
    params: { lang: "it" | "en" | "es" };
}) {
    const { lang } = params;
    const dict = await getDictionary(lang);

    // Prepara le opzioni per i dropdown
    const options1 = [
        { label: dict.header?.company?.about || "About", href: `/${lang}/azienda/chi-siamo` },
        { label: dict.header?.company?.history || "History", href: `/${lang}/azienda/storia` },
        { label: dict.header?.company?.quality || "Quality", href: `/${lang}/azienda/qualita` },
    ];

    const options2 = [
        { label: dict.header?.orthodontics?.products || "Products", href: `/${lang}/ortodonzia/prodotti` },
        { label: dict.header?.orthodontics?.solutions || "Solutions", href: `/${lang}/ortodonzia/soluzioni` },
    ];

    const options3 = [
        { label: dict.header?.implantology?.products || "Products", href: `/${lang}/implantologia/prodotti` },
        { label: dict.header?.implantology?.solutions || "Solutions", href: `/${lang}/implantologia/soluzioni` },
    ];

    const options4 = [
        { label: dict.header?.courses?.list || "Courses", href: `/${lang}/corsi/lista` },
        { label: dict.header?.courses?.calendar || "Calendar", href: `/${lang}/corsi/calendario` },
    ];

    return (
        <Header
            lang={lang}
            options1={options1}
            options2={options2}
            options3={options3}
            options4={options4}
            dropdownCompanyLabel={dict.header?.company?.title || "Company"}
            dropdownOrthodonticsLabel={dict.header?.orthodontics?.title || "Orthodontics"}
            dropdownImplantologyLabel={dict.header?.implantology?.title || "Implantology"}
            dropdownCoursesLabel={dict.header?.courses?.title || "Courses"}
        />
    );
}

