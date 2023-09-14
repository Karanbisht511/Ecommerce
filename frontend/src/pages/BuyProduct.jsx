import OrderCard from "../components/OrderCard"

export default function BuyProduct() {
    return (
        <div>
            hello
            <div className="order-details">
                <OrderCard heading="Delivery Address" />
                <OrderCard heading="Order Summary" />
                <OrderCard heading="Payment options" />
            </div>
            <div className="price-details">Total pricing</div>
        </div>
    )
}
