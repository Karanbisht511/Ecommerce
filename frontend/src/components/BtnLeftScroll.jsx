const BtnLeftScroll = ({ btnId }) => {
    console.log(btnId);
    const scrollLeft = () => {
        // console.log(document.querySelectorAll('.overFlow-x')[0]);
        document.querySelectorAll('.overFlow-x')[btnId].scrollLeft -= 50
    }
    return <button className="btn-scroll scroll-left" onClick={scrollLeft}>{`<`}</button>
}

export default BtnLeftScroll
