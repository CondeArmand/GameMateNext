
import Header from "@/components/Header";
import SearchPage from "./searchPage";
import FooterNavbar from "@/components/FooterNavbar";
import SimpleCard from "@/components/SimpleCard";

export default function Biblioteca(){
    return(
        <div className="bg-blue-jeans-50">
            
            <>
            <Header/>
            
           <SearchPage/>
           <FooterNavbar/>
            </>
        </div>
    )
}