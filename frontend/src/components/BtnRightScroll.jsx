const BtnRightScroll = ({btnId}) => {
console.log(btnId);
    const scrollRight = () => {
        document.querySelectorAll('.overFlow-x')[btnId].scrollLeft += 50
    }

    return <button className="btn-scroll scroll-right" onClick={scrollRight}>{`>`}</button>
}

export default BtnRightScroll
