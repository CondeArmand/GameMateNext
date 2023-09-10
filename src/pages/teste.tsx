// pages/teste.tsx
import React from 'react';
import HeaderGameMate from '@/components/Main/Header';
import Footer from '@/components/Main/FooterNavbar';
import SearchPage from '@/pages/searchPage'; // Certifique-se de ajustar o caminho correto

export default function Testes() {
    return (
        <div className="bg-blue-jeans-50 h-screen">
            <>
                <HeaderGameMate/>
                <SearchPage/> {/* Renderiza a página de busca com os GameCards */}
                <Footer/>
            </>
        </div>
    );
}
