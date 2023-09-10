import Header from "@/components/Main/Header";
import SearchPage from "./searchPage";
import FooterNavbar from "@/components/Main/FooterNavbar";

export default function Biblioteca() {
    return (
        <div className="bg-blue-jeans-50">

            <>
                <Header/>

                <SearchPage/>
                <FooterNavbar/>
            </>
        </div>
    )
}