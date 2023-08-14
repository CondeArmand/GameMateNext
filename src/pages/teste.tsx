// pages/teste.tsx
import React from 'react';
import HeaderGameMate from '@/components/Header';
import Footer from '@/components/FooterNavbar';
import GameCard from '@/components/GameCard';
import SearchPage from '@/pages/searchPage'; // Certifique-se de ajustar o caminho correto

export default function Testes() {
  return (
    <div className="bg-blue-jeans-50 h-screen">
      <>
        <HeaderGameMate />
        <SearchPage /> {/* Renderiza a página de busca com os GameCards */}
        <Footer />
      </>
    </div>
  );
}
