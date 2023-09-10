import { useSelector, useDispatch } from "react-redux";
// import { changeStateName, changeCollegeName, getStates, getCollegeName } from "../../features/collegeDetails/collegeDetailsSlice";
import { useEffect, useState } from "react";

function Colleges() {

    // const [college, setCollege] = useState(false)
    // const [state, setState] = useState(false)

    // console.log(getCollegeName);
    // const aa=useSelector()
    
    // setCollege(useSelector(getCollegeName))
    // setState(useSelector(getStates))
    


    // console.log(aa);
    // console.log("college:" + college);
    // console.log("state:" + state);


    // console.log(college);
    // console.log(college.name);
    // console.log(college.location);
    // const [college, setCollege] = useState({
    //     name: '',
    //     location: ''
    // })

    // setCollege({
    // name:useDispatch(state=>state.collegeDetail.stateName),
    // location:useDispatch(state=>state.collegeDetail.collegeName)
    // })

    return <>
        <h1>Colleges</h1>
        {/* <div>{college.name}</div>
        <div>{college.location}</div> */}
    </>
}

export default Colleges
