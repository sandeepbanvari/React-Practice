import { Child } from "./Child"
import products from "./utils"

export const Parent = () => {
    return (
        <>
            <h2 className="heading">All Products</h2>
            <div className="product-container">
                {products.map((item) => (
                    <Child
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                    />
                ))}
            </div>
        </>
    )
}