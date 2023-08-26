import React from "react";
import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";
import Image from "next/image";
import ProfileCard from "@/components/ProfileCard";

export default function telaPerfil() {
    return (
      <div className="bg-blue-jeans-50 min-h-screen">
        <Header />
       <ProfileCard  />
        <FooterNavbar />
      </div>
    );
  }
  
