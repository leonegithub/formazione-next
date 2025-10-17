"use client";

import { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {toast, ToastContainer} from "react-toastify";
import {useRouter} from "next/navigation";

export interface Relatore {
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
  thumb: string;
}

export default function Relatori() {
  const [data, setData] = useState<Relatore[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  const fetchOptions = {
    headers: {
      Authorization:
        "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
    },
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    setIsLoading(true);
  };

  const resetFilter = () => {
    setSelectedValue("");
    setIsLoading(true);
  };

  const baseUrl = "https://php.leone.it/api/GetRelatori.php";

  useEffect(() => {
    const url = selectedValue ? `${baseUrl}?sezione=${selectedValue}` : baseUrl;
    fetch(url, fetchOptions)
      .then((response) => response.json())
      .then((data) => {
        setData(data.ReturnedObject as Relatore[]);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [selectedValue]);

  const validDentists: Relatore[] = data.filter((dentist) =>
      dentist.sezione.includes("ortodonzia") || dentist.sezione.includes("implantologia"));
  const hasBoth = validDentists.some((dentist) => {
      const section = dentist.sezione.split("-");
      return section.includes("exacone-team") && section.includes("ortodonzia");
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold blue mb-8">Relatori {selectedValue}</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full">
          <div className="bg-white rounded-lg border p-6">
            <label htmlFor="sezione" className="block mb-4 font-semibold blue text-lg">
              Filtra per sezione
            </label>
            <select
              id="sezione"
              value={selectedValue}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-3 mb-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            >
              <option value="">Tutte le sezioni</option>
              <option value="ortodonzia">Ortodonzia</option>
              <option value="implantologia">Implantologia</option>
            </select>
            <button
              type="button"
              className="text-sm text-blue-700 hover:text-blue-900 underline transition-colors"
              onClick={resetFilter}
            >
              Resetta filtri
            </button>
          </div>
        </aside>

        {/* Lista relatori */}
        <section className="lg:w-3/4 w-full">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-blue-200 border-t-blue-600" />
            </div>
          ) : validDentists.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {validDentists.map((relatore) => (
                  <div key={relatore.id} className="bg-white rounded-lg p-6 text-center h-full">
                      <Link href={`relatori/${relatore.id}`} className="group block">
                          <Image
                              src={`https://php.leone.it/img/relatori/${relatore.url_thumb_BN}`}
                              alt={`${relatore.nome} ${relatore.cognome}`}
                              width={200}
                              height={200}
                              className={`w-48 h-48 rounded-full border-1 object-cover mx-auto mb-4 ${
                                  hasBoth
                                      ? "bg-gradient-to-r from-[#1A56DB] to-[#E02424]"
                                      : relatore.sezione.includes("ortodonzia")
                                          ? "border-blue-700"
                                          : "border-red-600"
                              } transition-colors`}
                          />
                      </Link>
                      <h3 className={`font-semibold ${relatore.sezione === "ortodonzia" ? "blue" : "red"} text-lg`}>
                          {relatore.appellativo} {relatore.nome} {relatore.cognome} <br/></h3>

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
          <ToastContainer />
      </div>
    </div>
  );
}