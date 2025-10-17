"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import parse from "html-react-parser";

interface Relatore {
  id: string | number;
  appellativo: string;
  nome: string;
  cognome: string;
  curriculum?: string;
  url_thumb?: string;
  url_thumb_BN: string;
  email?: string;
  sezione: string
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
      <div className="container jumbo">
        <div
          className="spinner-grow"
          style={{
            width: "5rem",
            height: "5rem",
            color: "var(--colore-primario)",
          }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
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
    <div className="container mx-auto px-4 py-10 flex">
        <div className="pfp pe-10">
            {relatore.url_thumb_BN && (
                <div className="relative w-60 h-60 overflow-hidden rounded-md">
                    <Image
                        src={`https://php.leone.it/img/relatori/${relatore.url_thumb_BN}`}
                        alt={relatore.url_thumb_BN}
                        fill
                        sizes="192px"
                        className="object-cover"
                        priority={true}
                    />
                </div>
            )}
        </div>

        <div className="info">
          <h1 className={`${relatore.sezione.includes("implantologia") ? "red" : "blue"} font-bold pb-3`}>
            {relatore.appellativo}&nbsp;
            {relatore.nome}&nbsp;
            {relatore.cognome}
          </h1>
          <p>{parse(relatore.curriculum ? relatore.curriculum : "Curriculum mancante")}</p> <br/>
            {relatore.email &&
                <p><strong>Email: &nbsp;</strong>{relatore.email}</p>
            }
        </div>
    </div>
  );
}
