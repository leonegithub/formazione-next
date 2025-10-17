"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Spinner from "@/components/spinner";
import parse from "html-react-parser";

interface CorsoDettaglio {
  id: string;
  titolo: string;
  data: string;
  relatori: string;
  descrizione: string;
  immagine: string;
  file: string;
  caption: string;
  sede: string;
  flg_corso_iso: string;
  sezione: string;
  tipologia: string;
  tag: string;
  scadenza: string;
  stato: string;
  flg_iscrizione_online: string;
  programma: string
}

export default function CorsoSingolo() {
  const params = useParams();
  const id = params.slug as string;
  const [corso, setCorso] = useState<CorsoDettaglio | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`https://php.leone.it/api/GetCorso.php?id=${id}`, {
      headers: {
        Authorization: "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ReturnedObject && data.ReturnedObject.length > 0) {
          setCorso(data.ReturnedObject[0]);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Errore nel caricamento del corso:", error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div className="ortodonzia-corsi">
        <div className="jumbotron"></div>
        <div className="container">
          <div className="corso-dettaglio">
            <Spinner />
          </div>
        </div>
      </div>
    );
  }

  if (!corso) {
    return (
      <div className="ortodonzia-corsi">
        <div className="jumbotron"></div>
        <div className="container">
          <div className="corso-dettaglio">
            <h2>Corso non trovato</h2>
            <p>Il corso richiesto non è stato trovato o non è più disponibile.</p>
          </div>
        </div>
      </div>
    );
  }

  const relatori = corso.relatori.split(",").map((r) => r.trim());

  return (
    <div className="ortodonzia-corsi">
      <div className="container mx-auto px-4">
        <div className="corso-dettaglio">
              <h2 className="py-4 font-bold blue">{parse(corso.titolo || "")}</h2>
          <div className="grid pt-2 grid-cols-12">
            {/* Colonna sinistra - Informazioni del corso */}
            <div className="col-span-4">

              <div className="corso-info mb-4">
                <p><strong>Data:</strong> {corso.data}</p>
                <p><strong>Sede:</strong> {corso.sede}</p>
                <p><strong>Tipologia:</strong> {corso.tipologia}</p>
                <p><strong>Stato:</strong> {corso.stato === "attivo" ? "Attivo" : "Non Attivo"}</p>
                {corso.scadenza && <p><strong>Scadenza iscrizioni:</strong> {corso.scadenza}</p>}
              </div>

                {relatori.length > 0 && (
                    <div className="corso-relatori">
                        <h3 className="blue mb-3">Relatori:</h3>
                        {relatori.map((relatore, index) => (
                            <div key={index} className="relatore-item d-flex align-items-center mb-2">
                                <img
                                    src="https://www.studiogiuntoli.com/portals/studiogiuntoli/Staff-Giuntoli/Fabio-Giuntoli.jpg"
                                    alt={relatore}
                                    className="rounded-full max-h-10 pe-2 cursor-pointer"
                                />
                                <span>{relatore}</span>
                            </div>
                        ))}
                    </div>
                )}

              {/*{corso.file && (
                <div className="corso-file mb-4">
                  <a
                    href={`https://php.leone.it${corso.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-blue white hover:bg-blue-800 text-white"
                  >
                    Scarica Brochure
                  </a>
                </div>
              )}*/}

              {/*{corso.flg_iscrizione_online === "1" && (
                <div className="iscrizione-online">
                  <button className="btn btn-success">
                    Iscriviti Online
                  </button>
                </div>
              )}*/}
            </div>

            {/* Colonna destra - Descrizione del corso */}
            <div className="col-span-8">
              {corso.descrizione && (
                <div>
                  <h3 className="blue mb-3">Descrizione del corso</h3>
                  <div className="corso-descrizione">{parse(corso.descrizione || "Nessuna descrizione fornita.")}</div>
                </div>
              )}
            </div>
          </div>
            <div className="grid grid-cols-12">
                <div className="col-span-4"></div>
                <div className="col-span-8">
                <h3 className="blue mb-3">Programma</h3>
                    {parse(corso.programma || "Nessun programma disponibile. ")} <br/>
                  <button className="mt-4 text-white bg-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 focus:outline-none">
                      Iscriviti al corso
                  </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
