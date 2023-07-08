import IntroductoryContent from "./IntroductoryContent";
import "./css/MainContent.css"
import ProductContent from "./ProductContent";

export default function MainContent() {

    return (
        <div className="mainContent">
            <div className="mainContent--introductoryContent">
                <IntroductoryContent />
            </div>
            <div className="mainContent--productContent">
                <ProductContent />
            </div>
        </div>
    )
}