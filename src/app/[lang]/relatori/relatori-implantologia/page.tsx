"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Relatore {
    id: string | number;
    appellativo: string;
    nome: string;
    cognome: string;
    curriculum: string;
    url_thumb: string;
    url_thumb_BN: string;
    email: string;
    sito: string;
    sezione: string;
}

export default function RelatoriImplantologia() {
    const [data, setData] = useState<Relatore[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchOptions = {
        headers: {
            Authorization:
                "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
        },
    };

    const baseUrl = "https://php.leone.it/api/GetRelatori.php?sezione=implantologia";

    useEffect(() => {
        fetch(baseUrl, fetchOptions)
            .then((response) => response.json())
            .then((data) => {
                setData(data.ReturnedObject as Relatore[]);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, []);


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold red mb-8">Relatori Implantologia</h1>

            <div className="flex flex-col lg:flex-row gap-8">

                {/* Lista relatori */}
                <section className="lg:w-3/4 w-full">
                    {isLoading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-2 border-blue-200 border-t-blue-600" />
                        </div>
                    ) : data.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {data.map((relatore) => (
                                <div key={relatore.id} className="bg-white rounded-lg p-6 text-center h-full">
                                    <Link
                                        href={`${relatore.id}`}
                                        className="group block"
                                    >
                                        <Image
                                            src={`https://php.leone.it/img/relatori/${relatore.url_thumb_BN}`}
                                            alt={`${relatore.nome} ${relatore.cognome}`}
                                            width={200}
                                            height={200}
                                            className={`rounded-full border-1 object-cover mx-auto mb-4 ${relatore.sezione === "ortodonzia" ? "border-blue-700" : "border-red-600"} transition-colors`}
                                        />
                                    </Link>
                                    <h3 className={`font-semibold ${relatore.sezione === "ortodonzia" ? "blue" : "red"} text-lg`}>
                                        {relatore.appellativo} {relatore.nome} {relatore.cognome}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center bg-white rounded-lg  border p-12">
                            <h4 className="text-gray-600 text-lg">Nessun relatore trovato</h4>
                            <p className="text-gray-500 text-sm mt-2">Prova a modificare i filtri di ricerca</p>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}