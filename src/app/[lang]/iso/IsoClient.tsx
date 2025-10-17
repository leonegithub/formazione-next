"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import foto1 from '../../../../public/foto-iso/Iso Slide 1.png';
import foto2 from '../../../../public/foto-iso/Iso Slide 2.png';
import foto3 from '../../../../public/foto-iso/Iso Slide 3.png';
import foto4 from '../../../../public/foto-iso/Iso Slide 4.png';
import foto5 from '../../../../public/foto-iso/Iso Slide 5.png';
import foto6 from '../../../../public/foto-iso/Iso Slide 6.png';
import foto7 from '../../../../public/foto-iso/Iso Slide 7.png';
import foto8 from '../../../../public/foto-iso/Iso Slide 8.png';
import foto9 from '../../../../public/foto-iso/Iso Slide 9.png';

const images = [
  foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9
];

function IsoClient() {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | StaticImageData | null>(null);

  function openModal(img: string | StaticImageData) {
    setSelectedImg(img);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    setSelectedImg(null);
  }

  return (
    <>
    {/* scegli tra carosello o immagini in sequenza */}
    
   {/*   <Carousel fade data-bs-theme="dark">
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <div 
              className="relative cursor-pointer"
              onClick={() => openModal(image)}
            >
              <Image 
                src={image} 
                alt={`ISO Slide ${index + 1}`} 
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel> */}
      <div className="grid my-5 grid-cols-6 gap-4">
        {images.map((image, index) => (
          <div key={index} className="w-full  relative cursor-pointer" onClick={() => openModal(image)}>
            <Image
              src={image}
              alt={`immagine-${index}`}
              
              className="rounded-lg"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
  {open && selectedImg && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
    onClick={closeModal}
    aria-modal="true"
    role="dialog"
  >
    <div
      className="relative  rounded-lg max-w-4xl w-full"
      onClick={e => e.stopPropagation()} // Previene la chiusura se clicchi sulla modale
    >
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
        aria-label="Chiudi"
      >
        &times;
      </button>
      <div className="flex justify-center items-center">
        <Image
          src={selectedImg}
          alt="Immagine grande"
          width={3840}
          height={2160}
          className="rounded-lg"
          style={{ objectFit: "contain", maxHeight: "70vh", width: "auto" }}
        />
      </div>
    </div>
  </div>
)}
    </>
  );
}

export default IsoClient;