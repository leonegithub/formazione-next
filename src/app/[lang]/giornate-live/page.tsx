import Image from "next/image";
import bannerChirurgia from "./Banner_Sito_Chirurgia_Live.png";
import GiornateClient from "./GiornateClient";
import './style.css'

const vantaggi = ["stabilità assoluta",
    "annullamento di gap e micromovimenti",
    "resistenza elevata ai carichi dislocanti",
    "sicurezza nel collegamento impianto-moncone",
]

function GiornateLive() {
    return (
        <>
        <div className="img-container">
        <Image className="leone-logo" src={bannerChirurgia} alt="leone-grande" />
        </div>
        <div className="container">
            <h1 className="blue font-bold mt-5 mb-3">Giornate dimostrative di pratica implantare</h1>
            <div className="giornatelive main-text">
                            <p>
                Le <strong>giornate di pratica implantologica</strong> offrono l&apos;opportunità di <strong>assistere gratuitamente </strong>a interventi di chirurgia implantare, permettendo ai partecipanti di confrontarsi direttamente con specialisti del settore.                
                                </p>
                <p>
                    Durante l&apos;evento verranno approfondite le <strong>caratteristiche tecniche dell&apos;impianto Morse Taper</strong>, evidenziando i suoi vantaggi come:
                </p>
                <p>
                    <ul className="list-inside">
                        {vantaggi.map((vantaggio, index) => (
                            <li key={index} className="list-disc">{vantaggio}</li>
                        ))}
                    </ul>
                </p>
                <p>Particolare attenzione verrà data <strong>molteplici vantaggi clinici</strong>, in particolare ai risultati di guarigione e al mantenimento dei tessuti peri-implantari nel tempo, supportati da oltre 20 anni di esperienza.</p>
                <p>
                Verranno inoltre illustrate verranno illustrate tutte le opzioni attuabili con <strong>flusso digitale</strong>, inclusa la chirurgia guidata e le soluzioni protesiche compatibili con scanner intra-orali e software CAD.
                </p>
                <p>
                    Il programma propedeutico include <strong>ampia visibilità degli interventi dalla sala adiacente</strong>, oltre a fornire a ogni partecipante materiale informativo dettagliato, bibliografia e manuali di procedura chirurgica e protesica.
                </p>
                <p>
                    Non perdere l&apos;opportunità di aggiornare le tue conoscenze e migliorare le tue competenze nell&apos;implantologia con <strong>connessione Morse Taper</strong>!
                </p>
            </div>

            <h2 className="blue font-bold py-3">Calendario incontri</h2>
            <GiornateClient />
        </div>
        
        </>
    );
}

export default GiornateLive;