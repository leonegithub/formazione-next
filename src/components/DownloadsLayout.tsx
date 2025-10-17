import React from "react";

export default function DownloadsLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="downloads">
      <div className="container">
        <h1 className="blue py-5 text-5xl font-bold">{title}</h1>
        {children}
      </div>
    </div>
  );
}