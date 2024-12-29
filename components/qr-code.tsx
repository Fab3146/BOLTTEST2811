"use client";

import Image from "next/image";

export const QrCode = () => {
  return (
    <div className="absolute top-full right-0 mt-2 z-50 flex justify-center w-[200px] -translate-x-4">
      <div className="relative w-32 h-32">
        <Image
          src="https://github.com/Fab3146/Village-Padel-Flavien/blob/main/qrcode_App_VP.png?raw=true"
          alt="QR Code Village Padel App"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};