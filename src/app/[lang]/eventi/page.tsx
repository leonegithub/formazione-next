import "./style.css";
import giornata from "./giornata.png";
import Image from "next/image";

export default function Eventi() {
  return (
    <div className="container mx-auto px-4 eventi jumbo">
      <h1 className="blue font-bold py-3">Eventi</h1>
      <h3 className="red">XCN Learning</h3>
      <p>
        Un’opportunità per professionisti odontoiatrici di accedere a corsi
        avanzati, workshop pratici e risorse educative per arricchire le loro
        competenze e garantire un’eccellente assistenza ai pazienti.
      </p>
      <div className="row sezione d-flex">
        <div className="col-12 col-md-8 left">
          <Image src={giornata} alt="giornata"></Image>
        </div>
        <div className="col-12 col-md-4 right">
          <h4 className="py-3 red">Dimostrazione live di chirurgia e protesi su impianti</h4>
          <p>
            Vieni a conoscere l’eccellenza della Sistematica Implantare Leone
            grazie a una giornata dedicata alle soluzioni disponibili sia con
            flusso analogico che digitale.
          </p>
          {/*<button className="btn btn-ads">
            Iscriviti alla giornata gratuita del 28 ottobre 2024
          </button>
          <button className="btn btn-ads">
            Iscriviti alla giornata gratuita del 28 ottobre 2024
          </button>*/}
        </div>
      </div>
    </div>
  );
}
