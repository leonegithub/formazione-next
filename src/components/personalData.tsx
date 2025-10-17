"use client";

import React from "react";

interface User {
  Nome: string;
  Cognome: string;
  Tipologia: string;
  Email: string;
  RS: string;
  Indirizzo: string;
  NumeroCivico: string;
  Città: string;
  CAP: string;
  Paese: string;
  IDIva: string;
  CodiceFiscale: string;
  CodiceSDI: string;
  FlgComCom: string;
  DataInserimento: string;
  FlgEmailConfermata: boolean;
  FlgControllatoPiva: boolean;
  PEC?: string;
}

interface UserDataProps {
  data: User;
}

const UserData = ({ data }: UserDataProps) => {
  return (
    <div className="user-data">
      <h1 className="text-3xl font-bold my-4">Your Registration Data</h1>
      <div className="space-y-2 text-lg  text-gray-800">
        <p>
          <strong>Company Name:</strong> {data.RS}
        </p>
        <p>
          <strong>Email:</strong> {data.Email}
        </p>
        <p>
          <strong>First Name:</strong> {data.Nome}
        </p>
        <p>
          <strong>Last Name:</strong> {data.Cognome}
        </p>
        <p>
          <strong>Address:</strong> {data.Indirizzo}
        </p>
        <p>
          <strong>Street Number:</strong> {data.NumeroCivico}
        </p>
        <p>
          <strong>City:</strong> {data["Città"]}
        </p>
        <p>
          <strong>Postal Code:</strong> {data.CAP}
        </p>
        <p>
          <strong>Country:</strong> {data.Paese}
        </p>
        <p>
          <strong>Type:</strong> {data.Tipologia}
        </p>
        <p>
          <strong>Consent to Commercial Communications:</strong>{" "}
          {data.FlgComCom === "0" ? "No" : "Yes"}
        </p>
        <p>
          <strong>Registration Date:</strong> {data.DataInserimento}
        </p>
        {data.Paese === "IT" && (
          <p>
            <strong>PEC:</strong>{" "}
            {data.PEC === "" ? (
              <span className="text-red-600">Not provided</span>
            ) : (
              data.PEC
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default UserData;
