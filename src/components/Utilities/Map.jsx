import products from "./Products";
import Cards from "../Cards";

function Map() {
  return (
    <>
      <h2 className="heading">All Products</h2>

      <div className="product-container">
        {products.map((item) => (
          <Cards
            key={item.id}
            image={item.image}
            title={item.title}
            desc={item.desc}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
}

export default Map;