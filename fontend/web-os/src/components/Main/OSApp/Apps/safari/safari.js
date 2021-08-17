import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Knowledge_graph from './knowledge_graph/knowledge_graph'
import './safari.css'
import Results from './SafariResults/Results'
import SafariHome from './SafariResults/SafariHome/SafariHome'
import WebPage from './WebPage/WebPage'

export default function Safari(props) {
    const [Res, setRes] = useState([])
    const [IMG, setIMG] = useState([])
    const [WEBPAGEURL, setWEBPAGEURL] = useState("")
    const [OpenWebPage, setOpenWebPage] = useState(false)

    useEffect(() => {

        if (props.data !== []) {
            setRes(props.data)
            console.log(props.data)
        }

        //! TODO
        // ? add img to page
        // ? maps
        // ? videos and more


        if (props.data !== []) {
            // call something after data have been stored
            //? eg : get some img from other apis (setIMg)
        }
    }, [props.data])


    //? a function that have to be call from child component--start
    // * open webpage as html 

    function OpenwebPage(url) {
        setWEBPAGEURL(url)
        setOpenWebPage(true)
    }

    // * open webpage as html 
    //? a function that have to be call from child component--start


    return (
        <div className="safari" >
            <div className="safariContent" >


                {/* <Contextmenu
                    openAction={openAction}
                    ContextmenuItemsObj="desktop"
                    ContextmenuX={ContextmenuX}
                    ContextmenuY={ContextmenuY} /> */}



                {OpenWebPage && <WebPage url={WEBPAGEURL} />}

                {Res.value ? Res.value.map((obj) => {
                    return (
                        <Results
                            OpenWebPage={OpenwebPage}
                            description={obj.description}
                            displayed_url={obj.title}
                            url={obj.url}
                            title={obj.title}
                        />
                    )
                }) : <SafariHome />}
                {Res.knowledge_graph ? <Knowledge_graph
                    img_url={IMG ? IMG[0].image_url : "#"}
                    type={Res.knowledge_graph.type}
                    description={Res.knowledge_graph.description}
                    title={Res.knowledge_graph.title}
                    website={Res.knowledge_graph.website}
                /> : null}

            </div>
        </div>
    )
}


// ? google api
// !! only have 100/m (100 searches per month) for free other have to pay

//? Your API Access Key

//* 5c17396c410e98b7549b0817700f63b0

//? epx http://api.serpstack.com/search?access_key=5c17396c410e98b7549b0817700f63b0&query=mcdonalds

//* http://api.serpstack.com/ base url

// ? google api
// !! only have 100/m (100 searches per month) for free other have to pay