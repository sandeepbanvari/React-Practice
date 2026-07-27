export const Child = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt="" />
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <h3>₹{props.price}</h3>
            <button>Add to Cart</button>
        </div>
    )
}