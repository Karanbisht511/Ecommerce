import Counter from "./Counter"

export default function Item({ item }) {
console.log(item);
    const { category, name, images, description, price, count } = item?.details
    

    return <>
        <div className="product-template-box">
            {/* {category && <div>Category: {category}</div>} */}
            {name && <div><h2>Title</h2> {name}</div>}
            {images && <div><img src={images[0]} alt="" /></div>}
            {description && <div><h2>Description:</h2> {description}</div>}
            {price && <div><h2> Price:</h2>{price}</div>}
            <Counter quantity={item?.quantity} />
        </div>
    </>
}
