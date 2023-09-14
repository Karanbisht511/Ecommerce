import { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { Navigate, useNavigate } from 'react-router-dom'

const BtnBuyNow = ({productId}) => {

    useEffect(()=>{
        console.log("call buy api");
    })

    const navigate = useNavigate()
    const navigateToBuyProduct = () => {
        navigate("/products/buyProduct")
    }

    return <Button style={{ backgroundColor: '#fb641b', borderRadius: '0', border: '0' }} variant="primary" size="lg" onClick={navigateToBuyProduct}>Buy Now</Button>
}

export default BtnBuyNow
