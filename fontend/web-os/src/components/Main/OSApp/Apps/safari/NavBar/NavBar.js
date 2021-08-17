import React, { useState } from 'react';
import "./NavBar.css";
import axios from "axios"

//? importing logos from src dir--start

import back from "./src/arrow_back_ios_black_24dp.svg";
import forward from "./src/arrow_forward_ios_black_24dp (1).svg";
import refresh from "./src/refresh_black_24dp.svg";
import add from "./src/add_black_24dp (1).svg";
import copy from "./src/content_copy_black_24dp.svg";
import security from './src/security_black_24dp.svg'
import search from "./src/search_black_24dp (1).svg"

//? importing logos from src dir--end


export default function NavBar(props) {
    const [Query, setQuery] = useState('')
    const [actionIcon, setactionIcon] = useState(search)
    return (
        <div className='safariNavBar' >

            <div className="safariNavBarAction" >
                <button><img src={back} alt="back" /></button>
                <button><img src={forward} alt="forward" /></button>
            </div>


            <div className="safariNavBarAction1" >
                <button><img src={security} alt="security" /></button>
                <input onChange={(e) => {
                    setQuery(e.target.value)
                    setactionIcon(search)
                }} placeholder="Search or enter website name" className="safariNavBarInputSCR" type="text" />
                <button onClick={() => {



                    //? axios get data from user input Query state--start


                    //* setup options for axios get req--start

                    const options = {
                        method: 'GET',
                        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI',
                        params: { q: Query, pageNumber: '1', pageSize: '10', autoCorrect: 'true' },
                        headers: {
                            'x-rapidapi-key': '138c58e810mshc1cf004da5aa2dap1c5e7djsn4e67834f493b',
                            'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
                        }
                    };

                    //* setup options for axios get req--end


                    //! sending axios get req with options 

                    axios.request(options).then(function (response) {
                        //? passing user input Quey for child component--start

                        props.getSafariQuery(Query)

                        // ?passing user input Quey for child component-end

                        // ?passing res data  for child component-start

                        props.getSafariRes(response.data)

                        // ?passing res data  for child component-start

                        setactionIcon(refresh)
                        console.log(response.data);
                    }).catch(function (error) {
                        console.error(error);
                    });

                    //! sending axios get req with options 


                    //? axios get data from user input Query state--end





                    //? google api not using because of 100 searches pre month--start


                    // axios.get(`http://api.serpstack.com/search?access_key=5c17396c410e98b7549b0817700f63b0&query=${Query}`).then((res) => {
                    //     props.getSafariQuery(Query)
                    //     props.getSafariRes(res.data)
                    //     setactionIcon(refresh)
                    // })

                    //? google api not using because of 100 searches pre month--end

                }} ><img src={actionIcon} alt="refresh" /></button>
            </div>

            <div className="safariNavBarAction2" >

                <button><img onClick={()=>{
                    //!! copy url todo 
                }} src={copy} alt="copy" /></button>
                <button><img src={add} alt="add" /></button>


            </div>
        </div>
    )
}