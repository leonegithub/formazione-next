"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface GiornataLive {
  id: string;
  titolo: string;
  data: string;
  scadenza: string;
  relatori: string;
  immagine: string;
  file: string;
  caption: string;
  sede: string;
  flg_corso_iso: string;
  sezione: string;
  tipologia: string;
  tag: string;
  stato: string;
  flg_iscrizione_online: string
}

function GiornateClient() {
    const [result, setResult] = useState<GiornataLive[] | null>([]);

    useEffect(() => {
        fetch("https://php.leone.it/api/GetElencoCorsi.php?sezione=implantologia", {
            headers: {
                Authorization: "Bearer LbbYPIuVNtiJEOiZe5KhaPW1kMk0iTiG11RI6ATg5JM"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            setResult(data.ReturnedObject);
    });
    return () => {}
    }, [])

return (
    <>
    <div className="corsi-grid">
        {result?.map((corso) => (
            <div key={corso.id} className="corso-singolo d-flex flex-column flex-lg-row align-items-center align-items-lg-start text-center text-lg-start">
                <div className="corso-immagine">
                    <Image alt={corso.titolo} src={corso.immagine} width={300} height={200} />
                </div>
                <div className="corso-desc">
                    <div className="corso-top">
                        <h2 className="titolo blue">{corso.titolo}</h2>
                    </div>
                    <div className="corso-bottom">
                        <p>
                            <strong>Data Inizio:</strong> {corso.data}
                        </p>
                        <p>
                            <strong>Sede:</strong> {corso.sede}
                        </p>
                        <p>
                            <strong>Stato:</strong>{" "}
                            {corso.stato === "attivo" ? "Attivo" : "Non Attivo"}
                        </p>
                        {corso.relatori.length > 0 && (
                            <div className="corso-relatori">
                                <h3>Relatori:</h3>
                                {corso.relatori}
                            </div>
                        )}
                        {corso.file && (
                            <div className="corso-file">
                              <Link className="bg-blue" href={corso.file} target="_blank" rel="noopener noreferrer">
                              Scarica PDF
                              </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        ))}
    </div>
    </>
);

}

export default GiornateClient;