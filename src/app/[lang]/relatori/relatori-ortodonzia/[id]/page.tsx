"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import parse from "html-react-parser";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {Spinner} from "flowbite-react";

interface Relatore {
    id: string | number;
    appellativo: string;
    nome: string;
    cognome: string;
    curriculum?: string;
    thumb?: string | StaticImport;
    email?: string;
    // aggiungi altri campi se servono
}

export default function RelatoreDetail({}: {
    params: Promise<{ lang: "en" | "it" }>;
}) {
    const { id } = useParams();
    const [relatore, setRelatore] = useState<Relatore | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchOptions = {
        headers: {
            Authorization:
                "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
        },
    };

    useEffect(() => {
        if (id) {
            fetch(`https://php.leone.it/api/GetRelatori.php?id=${id}`, fetchOptions)
                .then((response) => response.json())
                .then((data) => {
                    setRelatore(data.ReturnedObject[0]);
                    setIsLoading(false);
                    console.log(data.ReturnedObject[0].id);
                })
                .catch((error) => {
                    console.error("Error fetching relatore details:", error);
                    setIsLoading(false);
                });
        }
    }, [id]);

    if (isLoading) {
        return (
            <div className="container mx-auto px-4">
                <Spinner />
            </div>
        );
    }

    if (!relatore) {
        return (
            <div className="container mx-auto px-4">
                <h3>Dettagli del relatore non trovati.</h3>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4">
            {relatore.thumb && (
                <Image
                    src={relatore.thumb}
                    alt={`${relatore.appellativo} ${relatore.nome} ${relatore.cognome}`}
                    width={200}
                    height={200}
                    className="rounded-full object-cover mx-auto mb-4"
                />
            )}
            <h1 className="blue font-bold pb-3">
                {relatore.appellativo}&nbsp;
                {relatore.nome}&nbsp;
                {relatore.cognome}
            </h1>
            <p>{parse(relatore.curriculum ? relatore.curriculum : "Curriculum mancante")}</p> <br/>
            <p>{relatore.email}</p>
        </div>
    );
}
