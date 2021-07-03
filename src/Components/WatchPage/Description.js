import React from 'react'
import '../../Styles/WatchPage/Description.css'
import Markdowm from 'react-remarkable'
import clsx from 'clsx'

function Description() {
    const [showMore, setShowMore] = React.useState(false)
    
    let str=`In this video you will be able to learn 3rd Normal form with examples. How to find whether a table in 3NF or not. How to decompose the table to 3NF. All the points are explained with easiest examples and this topic is very important for competitive exams like GATE, UGC NET, PSUs, NIELIT, IT officer, Placement interviews & College/University examples.\n\n► Full course of DBMS\nhttps://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y\n\n►Subscribe to our new channel:\nhttps://www.youtube.com/c/GateSmashersPlus\n\nOther subject playlist Link:\n--------------------------------------------------------------------------------------------------------------------------------------\n►Design a nd Analysis of algorithms (DAA):\nhttps://www.youtube.com/playlist?list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa\n►Operating System: \nhttps://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p\n► Theory of Computation\nhttps://www.youtube.com/playlist?list=PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i\n►Artificial Intelligence:\nhttps://www.youtube.com/playlist?list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI\n►Computer Architecture:\nhttps://www.youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX\n►Computer Networks:\nhttps://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_\n►Structured Query Language (SQL):\nhttps://www.youtube.com/playlist?list=PLxCzCOWd7aiHqU4HKL7-SITyuSIcD93id \n►Discrete Mathematics:\nhttps://www.youtube.com/playlist?list=PLxCzCOWd7aiH2wwES9vPWsEL6ipTaUSl3\n►Compiler Design:\nhttps://www.youtube.com/playlist?list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc\n►Number System:\nhttps://www.youtube.com/playlist?list=PLxCzCOWd7aiFOet6KEEqDff1aXEGLdUzn\n►Cloud Computing & BIG Data:\nhttps://www.youtube.com/playlist?list=PLxCzCOWd7aiHRHVUtR-O52MsrdUSrzuy4\n►Software Engineering:\nhttps://www.youtube.com/playlist?list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2\n►Data Structure:\nhttps://www.youtube.com/playlist?list=PLxCzCOWd7aiEwaANNt3OqJPVIxwp2ebiT\n►Graph Theory:\nhttps://www.youtube.com/playlist?list=PLxCzCOWd7aiG0M5FqjyoqB20Edk0tyzVt\n►Programming in C:\nhttps://www.youtube.com/playlist?list=PLxCzCOWd7aiGmiGl_DOuRMJYG8tOVuapB\n---------------------------------------------------------------------------------------------------------------------------------------\n\nOur Social Media:\n► Subscribe us on YouTube-https://www.youtube.com/gatesmashers\n►Telegram Channel Link: https://telegram.me/gatesmashersofficial\n► Like Our page on Facebook -  https://www.facebook.com/gatesmashers\n► Follow us on Instagram-https://www.instagram.com/gate.smashers\n\n--------------------------------------------------------------------------------------------------------------------------------------\n►A small donation would help us continue making GREAT Lectures for you.\n►Be a Member & Give your Support on bellow link : https://www.youtube.com/channel/UCJihyK0A38SZ6SdJirEdIOw/join\n►UPI: gatesmashers@apl\n►For any other Contribution like notes pdfs, feedback ,suggestion etc\ngatesmashersconribution@gmail.com\n►For Business Query\ngatesmashers2018@gmail.com\n#3NF#ThirdNormalForm#DBMS`
    str = str.replace(/(?:\r\n|\r|\n)/g, '<br />')
    console.log(str)

    const handleShowMore = () => {
        setShowMore(!showMore)
    }

    return (
        <>
            <div className='video-secondary-details__description--container'>
                <div className='video-secondary-details__description--space'></div>
                <div className={clsx('video-secondary-details__description',{['hide-desc']:!showMore})}>
                    <Markdowm 
                        options={{linkify: true, html: true}}
                    >
                        {str}
                    </Markdowm>
                </div>
            </div>
            <div className='video-secondary-details__description--btn-container'>
                {showMore ?
                    <button className='video-secondary-details__description--btn' onClick={handleShowMore}>SHOW LESS</button>
                    :
                    <button className='video-secondary-details__description--btn' onClick={handleShowMore}>SHOW MORE</button>
                }
            </div>
        </>
    )
}

export default Description
