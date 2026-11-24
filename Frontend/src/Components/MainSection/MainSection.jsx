import './MainSection.css';
import OnSale from "./OnSaleSection/OnSale";
import PopularSection from "./PopularSection/PopularSection.jsx";
function MainSection(){
    return(
        <>
        <div className="main-section">
            <OnSale></OnSale>
            <PopularSection></PopularSection>
            
            
        </div>
        </>
    )
}
export default MainSection;