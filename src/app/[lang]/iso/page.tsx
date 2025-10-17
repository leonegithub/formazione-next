"use client";

import "./style.css";
import IsoClient from "./IsoClient";
import Image from "next/image";
import Link from "next/link";
import IsoPic from './Iso.png';
import corsoAllineatori from './Corso Avanzato Allineatori - Marzo 2025.png';
import corsoCelli from './Corso Avanzato Celli-Fortini social.png';
import corsoChirurgia from './Corso Chirurgia Parodontale_Milano 2025.png';
import corsoOrtognatodonzia from './Corso clinico di ortodonzia 2025 social.png';

export default function Iso() {
  const corsiInEvidenza = [
    {
      id: "corso-allineatori-marzo-2025",
      title: "Corso Avanzato Allineatori",
      subtitle: "Marzo 2025 - Tecniche innovative",
      image: corsoAllineatori,
      link: "/corsi/allineatori-marzo-2025"
    },
    {
      id: "corso-celli-fortini",
      title: "Corso Avanzato Celli-Fortini",
      subtitle: "Metodiche ortodontiche avanzate",
      image: corsoCelli,
      link: "/corsi/celli-fortini"
    },
    {
      id: "corso-chirurgia-parodontale",
      title: "Corso Chirurgia Parodontale",
      subtitle: "Milano 2025 - Tecniche chirurgiche",
      image: corsoChirurgia,
      link: "/corsi/chirurgia-parodontale-milano"
    },
    {
      id: "corso-ortodonzia-clinico",
      title: "Corso Clinico di Ortodonzia",
      subtitle: "2025 - Approccio pratico",
      image: corsoOrtognatodonzia,
      link: "/corsi/ortodonzia-clinico-2025"
    }
  ];

  return (
    <div className="iso-info">
      <div className="img-container carosello">
        <Image src={IsoPic} alt="isopic" />
      </div>
      <div className="container">
          <div className="sezione-uno">
          <h1 className="blue font-bold mt-5 mb-2">ISO - Istituto Studi Odontoiatrici</h1>
          <p>
            L&apos;Istituto Studi Odontoiatrici, divisione scientifica e centro
            formazione della società Leone, opera su tutto il territorio
            nazionale con lo scopo di promuovere e divulgare l&apos;ortodonzia e
            l&apos;implantologia a livelli sempre più elevati. La sede di Firenze,
            nata nel 1982, è strutturata su due piani con una superficie
            complessiva di 1.000 mq. ed in quasi 40 anni di attività ha ospitato
            circa 50.000 corsisti. L&apos;ISO offre un programma completo di corsi
            residenziali e online, per il medico-chirurgo, l&apos;odontoiatra, lo
            specialista in odontostomatologia ed ortognatodonzia. Sono inoltre
            organizzati corsi dedicati agli odontotecnici e all&apos;insegnamento
            della merceologia ortodontica e implantologica per gli operatori
            commerciali italiani ed esteri.
          </p>
        </div>
        <div className="sezione-due">
          <h1 className="blue font-bold mt-4 mb-2">Struttura all&apos;avanguardia</h1>
           <p className="mb-5">
            Il primo piano, oltre ad accogliere i locali riservati ai servizi di
            ricevimento e di segreteria, è completamente dedicato alle aule
            d&apos;insegnamento: - studio dentistico attrezzato con 3 riuniti per
            dimostrazioni live di interventi ortodontici e implantologici su
            pazienti - annessa una sala da 40 posti per i medici che partecipano
            visivamente agli interventi - telecamere endorali ed extraorali
            collegate in rete rendono tutti gli interventi visibili in tempo
            reale nelle varie aule - laboratorio odontotecnico completamente
            attrezzato per 18 posti - aula polivalente per 80 corsisti dotata
            recentemente anche di ambiente Active Classroom, ovvero un sistema
            integrato di lavagna interattiva multimediale Active Board e
            risponditori Active Expressions utili alla partecipazione attiva
            durante il corso Al secondo piano: - Aula Magna &quot;Marco Pozzi&quot; che
            accoglie 250 congressisti. La sala è dotata di tutti i dispositivi
            multimediali. Gli strumenti didattici di cui l&apos;Istituto Studi
            Odontoiatrici è dotato fanno sì che le lezioni, svolte da relatori
            di indiscussa esperienza, offrano ai partecipanti la possibilità di
            apprezzarne appieno la validità, traendone il massimo profitto.
          </p>
        </div>
        </div>

        
        {/* Sezione Corsi in Evidenza */}
        <div className="sezione-corsi-evidenza mb-5">
          <div className="container pb-3">
          <h1 className="blue font-bold mb-4">Corsi in Evidenza</h1>
          <div className="grid gap-5 my-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {corsiInEvidenza.map((corso, index) => (
              <div
                className="download-magazines cursor-pointer flex flex-col"
                id={corso.id}
                key={index}
              >
                <Link
                  className="download-link"
                  href={corso.link}
                  target="_blank"
                >
                  <Image
                    src={corso.image}
                    alt={corso.title}
                    width={400}
                    height={400}
                  />
                </Link>
                <Link href={corso.link} target="_blank">
                  <h5 className="text-lg p-2">{corso.title}</h5>
                </Link>
              {/*   <p className="text-sm px-2 pb-2">{corso.subtitle}</p> */}
              </div>
            ))}
          </div>
          </div>
        </div>

          <div className="container">
                  <div className="iso-contatti row d-flex">
                    <div className="col-12 col-md-6 left">
                      <div>
                        <h1 className="blue font-bold">Contatti</h1>
                        <ul className="text-lg">
                          <li>
                            Telefono: <a className="underline" href="tel:+39055304458">055.304458</a>
                          </li>
                          <li>
                            Email: <a className="underline" href="mailto:iso@leone.it">iso@leone.it</a>
                          </li>
                          <li>WhatsApp: 3453815578</li>
                        </ul>
                      </div>
                    </div>
                    <div className="gallery mt-4">
                      <IsoClient />
                    </div>
                  </div>
          </div>
      </div>

  );
}