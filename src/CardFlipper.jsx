// CardFlipper.js
import React, { useState } from "react";
import "./CardFlipper.css";
import bcaImport from "./assets/bca.png";
import chipCard from "./assets/chip.png";
import gpn from "./assets/gpn.png";
import atmbca from "./assets/atmbca.svg";
import alto from "./assets/alto.png";
import debitbca from "./assets/debitbca.png";
import prima from "./assets/prima.png";
import { GoTriangleLeft } from "react-icons/go";
import { TfiEmail } from "react-icons/tfi";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


const CardFlipper = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex justify-center items-center mt-10 ">
      <div
        className={`card ${isFlipped ? "flip" : ""}`}
        onClick={handleCardClick}
      >
        <div className="front">
          <div className="TopCard">
            <h1 className="text-xl font-bold text-white">
              <i>Paspor</i> <span className="text-xs font-medium"> blue</span>{" "}
              <span className="text-xs font-thin"> debit</span>
            </h1>
            <div>
              <img src={bcaImport} alt="" className="w-16" />
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <GoTriangleLeft size={30} color="white" />
              <img src={chipCard} alt="" className="w-16" />
            </div>
            <p
              className="text-xl flex justify-center font-eb-garamond text-white"
              style={{ letterSpacing: "2.4px" }}
            >
              3244 6456 4567 9732
            </p>
          </div>
          <div className="absolute bottom-0 mb-2 me-2 left-0 right-0 text-right">
            <p className="text-[7px] text-white inline-block ">
              VALID <br /> THRU
            </p>
            <p className="text-[7px] text-white inline-block mx-2 mr-10">
              05/28
            </p>
            <img src={gpn} alt="" className="w-8 h-8 inline-block" />
          </div>
        </div>
        <div className="back">
          <div className="flex justify-between text-[6px] px-4 pt-1">
            <p>PT. Bank Central Asia Tbk</p>
            <p>Halo BCA 15000888</p>
          </div>
          <div className="bg-black w-[300px] h-9 mt-1"></div>
          <p className="text-[6px] text-right mt-1 mr-4">
            SDFG SF 5678428B 11/22 IDEASS
          </p>
          <div className="bg-white h-7 w-[170px] flex items-center justify-end ml-4 pr-2">
            <p className="text-black text-[10px]">001</p>
          </div>
          <div className="mt-[1px] ml-4">
            <p className="text-[6px]">Authorized Signature</p>
            <p className="text-[6px] mt-[3px]">Jaga kerahasiaan PIN Anda</p>
            <p className="text-[6px] mt-[1px]">
              Pengguna kartu ini diatur menurut perjanjian/syarat dan
            </p>
            <p className="text-[6px]">
              ketentuan kartu PT Bank Central Asia Tbk
            </p>
            <div className="flex items-center">
              <TfiEmail size={6} />
              <p className="ml-[2px] text-[6px]"> halobca@bca.co.id</p>
            </div>
          </div>
          <div className="mt-2 flex ml-3">
            <img src={atmbca} alt="ATM BCA" className="w-10 h-5" />
            <img src={debitbca} alt="Debit BCA" className="w-8 h-5 mr-1 " />
            <img src={prima} alt="PRIMA" className="w-7 h-5 mr-1 " />
            <img src={debitbca} alt="Debit BCA" className="w-8 h-5 mr-1 " />
            <img src={alto} alt="ALTO" className="w-8 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFlipper;
