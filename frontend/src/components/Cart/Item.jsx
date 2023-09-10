import Counter from "./Counter"

export default function Item({ item }) {

    const { category, title, image, description, price, count } = item

    return <>
        <div className="product-template-box">
            {category && <div>Category: {category}</div>}
            {title && <div><h2>Title</h2> {title}</div>}
            {image && <div><img src={image} alt="" /></div>}
            {description && <div><h2>Description:</h2> {description}</div>}
            {price && <div><h2> Price:</h2>{price}</div>}
            <Counter item={item} />
        </div>
    </>
}
