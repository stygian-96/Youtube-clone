import React,{useState, useEffect, useLayoutEffect}  from 'react'
import Sidebar from './Sidebar'
import TopNav from './TopNav'

const checkWidthChange = () => {
    if (window.innerWidth < 1328) return false;
    else return true;
}

const Navigation = ({changePadding, isWatchPage, setIsWatchPageSidebarOpen}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [onceToggled, setOnceToggled] = useState(false)
    const [className, setClassName] = useState('home-sidebar-open')

    useEffect(() => {
        setIsSidebarOpen(isWatchPage ? false : checkWidthChange())
        if(!isWatchPage){
            let timeoutId = null
            const resizeListener = () => {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {setIsSidebarOpen(checkWidthChange())}, 100);
            };
            window.addEventListener('resize', resizeListener);
        
            return () => {
                window.removeEventListener('resize', resizeListener);
            }
        }
    }, [isWatchPage])

    useLayoutEffect(() => {
        setIsSidebarOpen(!isWatchPage)
    }, [isWatchPage])

    useEffect(() => {
        if(isSidebarOpen && !isWatchPage){
            setClassName('home-sidebar-open')
            changePadding('248')
        }else if(!isSidebarOpen && !isWatchPage){
            setClassName('home-sidebar-closed')
            changePadding('80')
        }else if(isSidebarOpen && isWatchPage){
            setClassName('watch-sidebar-open')
            changePadding('0')
            setIsWatchPageSidebarOpen(true)
        }else if(!isSidebarOpen && isWatchPage){
            setClassName('watch-sidebar-close')
            changePadding('0')
            setIsWatchPageSidebarOpen(false)
        } 
    },[isSidebarOpen,isWatchPage])

    const changeSidebarState = () => {
        if (!onceToggled){
            setOnceToggled(true)
        }
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <>
            <TopNav changeSidebarState={changeSidebarState}/>
            <Sidebar changeSidebarState={changeSidebarState} clsName = {className} />  
        </>
    )
}

export default Navigation
