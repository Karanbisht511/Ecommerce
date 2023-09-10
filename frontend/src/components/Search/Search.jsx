import { useState } from "react";
import data from "../../data/colleges.json"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { changeStateName,changeCollegeName } from "../../features/collegeDetails/collegeDetailsSlice";

function Search() {

    let [states, setStates] = useState()
    let [colleges, setColleges] = useState()

    // let dispatch = useDispatch()

    function getStates(text) {
        let firstChar = text.at(0)
        if (firstChar == firstChar.toLowerCase()) {
            firstChar = firstChar.toUpperCase()
            text = firstChar + text.slice(1)
            console.log(text);
        }

        // return new Promise(function (resolve, reject) {
        //     let options = [];
        //     data.data.forEach((element) => {
        //         if (element[1].startsWith(text)) {
        //             if (!options.includes(element[1]))
        //                 options.push(element[1])
        //         }
        //     });
        //     return resolve(options)
        // })

        let options = [];
        data.data.forEach((element) => {
            if (element[1].startsWith(text)) {
                if (!options.includes(element[1]))
                    options.push(element[1])
            }
        });
        return options
    }

    function getColleges(state, college) {
        let firstChar = college.at(0)
        if (firstChar == firstChar.toLowerCase()) {
            firstChar = firstChar.toUpperCase()
            college = firstChar + college.slice(1)
            console.log(college);
        }
        // return new Promise(function){}

        // if(state is blank){ filters from every college }
        let colleges = []
        data.data.forEach((element) => {
            if (element[1] == state
                && element[3].startsWith(college)
                && !colleges.includes(element[3])) {
                colleges.push(element[3])
                console.log(element[3]);
            }
            // console.log(element[3]);
            // if(){

            // }
        })
        // colleges.forEach((element)=>{
        //     console.log(element);
        // })
        return colleges
    }

    function handleStatesChange(e) {
        let value = e.target.value;
        // console.log(locationToSearch.length);
        if (value == '') {
            setStates(false)
        }
        else{
            // setStates(getStates(value)) 
            // console.log(changeStateName);   
            // dispatch(changeStateName(states))
        }
    }

    function handleCollegesChange(e) {
        let college = e.target.value
        if (college == '') {
            setColleges(false)
        } else {
            let state = document.getElementById('states').value
            // setColleges(getColleges(state, college))
            // console.log(changeCollegeName);  
            // dispatch(changeCollegeName(colleges))
        }
    }

    return <>
        <div className="search-container-wrapper">
            <div className="search-container">
                <div className="search-input-wrapper" >
                    <LocationOnIcon className="search-page-icon" />
                    <datalist id="state-dropdown">
                        {states &&
                            states.map(function (element, index) {
                                return <option key={index}
                                    onClick={() => {
                                        document.getElementById('states').value = element
                                    }}
                                    value={element}>{element}</option>
                            })
                        }
                    </datalist>
                    <input autoComplete="on" list="state-dropdown" onChange={handleStatesChange} type="search" name="" id="states" placeholder="Search Location" />
                    <KeyboardArrowDownIcon className="search-page-icon" />
                </div>

                <div className="search-input-wrapper" >
                    <datalist id="college-dropdown">
                        {colleges &&
                            colleges.map(function (element, index) {
                                return <option key={index}
                                    onClick={() => {
                                        document.getElementById('colleges').value = element
                                    }}
                                    value={element}>{element}</option>
                            })
                        }
                    </datalist>
                    <input autoComplete="on" list="college-dropdown" onChange={handleCollegesChange} type="search" name="" id="colleges" placeholder="Search colleges/courses" />
                    <Link to="/college"><SearchIcon className="search-page-icon" /></Link>
                </div>
            </div>
        </div>
    </>
}

export default Search;