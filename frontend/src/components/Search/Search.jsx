import { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";


function Search() {

    let [states, setStates] = useState()
    let [colleges, setColleges] = useState()


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