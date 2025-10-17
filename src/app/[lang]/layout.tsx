import Footer from "@/app/Footer";
import type { Metadata } from "next";
import "../globals.css";
import Script from "next/script";
import Header from "@/app/Header";

export const metadata: Metadata = {
    title: "Formazione ISO",
};

export async function generateStaticParams() {
    return [{ lang: "it" }, { lang: "en" }];
}

export default async function RootLayout(
    props: Readonly<{
        children: React.ReactNode;
        params: Promise<{ lang: string }>;
    }>
) {
    const params = await props.params;

    const {
        children
    } = props;

    // Assicuriamoci che lang sia uno dei valori supportati
    const lang = params.lang as "it" | "en" | "es";
    const resolvedParams = { lang };

    return (
        <html lang={resolvedParams.lang}>
        <head>
            <title>Formazione Leone</title>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" rel="stylesheet" />
            <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css" rel="stylesheet" />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-9ndCyUa1jO0H1M2Kmhki/hmG57x4ANH6cKOJ6DkzBrr8kkpcFH/5FVn5Vw5i/Un"
                crossOrigin="anonymous"
            />

            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
                integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
            <link
                rel="stylesheet"
                href="https://use.typekit.net/qxk4lzc.css"
            />
        </head>
        <body>
            {/* Passa i params risolti al componente server Header */}
            <Header />
            {/* <Chatbot /> */}
            <main>{children}</main>
            <Footer />
        <Script
            src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"
            strategy="afterInteractive"
        />
        </body>
        </html>
    );
}
