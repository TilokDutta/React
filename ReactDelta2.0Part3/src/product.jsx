import "./product.css";

function product({ title, price, features }) {
    let styles = {backgroundColor: price >= 20 ? "grey":""}
    return (
        <div className="product" style={styles}>
          <h1>{title}</h1>
          <p>Price : {price}</p>
          <p>
            {features.map((feature) =>
              <li>{feature}</li>
            )}
          </p>
          {price >= 20 ? <p>Discount of 10%</p> : ""}
        </div>
      );
  
}
export default product;
