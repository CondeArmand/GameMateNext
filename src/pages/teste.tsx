import ExibirSenha from "@/components/ExibirSenha";
import Footer from "@/components/FooterNavbar";
import FormularioCadastro from "@/components/FormularioCadastro";
import HeaderGameMate from "@/components/Header";


export default function Testes() {
    return (
        <div className="bg-blue-jeans-50 h-screen">
            <>
                <HeaderGameMate/>
            
                <FormularioCadastro/>
                <ExibirSenha />
                <Footer/>
            </>
        </div>

    )
}