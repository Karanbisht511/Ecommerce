import ItemDetails from "./ItemDetails";

const ShowProducts = function ShowProducts({ products }) {
    return <> {products && products.map(function (item, index) {
        return <ItemDetails key={index} item={item} index={index} />
    })}
    </>
}

export default ShowProducts
