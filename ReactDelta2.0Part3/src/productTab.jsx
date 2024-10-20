import Product from "./product.jsx"
import "./productTab.css"

function ProductTab(){
    let features = ["Fast","Furious","Cool"];
    return (
        <div class = "productTab">
            <Product title="Pen" price = "50" features={features}/>
            <Product   title="Pencil" price = "20" features={features}/>
            <Product  title="Eraser" price = "10" features={features}/>
        </div>
    )
}

export default  ProductTab;
