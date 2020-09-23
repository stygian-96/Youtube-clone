import React,{useState, useEffect}  from 'react'
import Sidebar from './Sidebar'
import TopNav from './TopNav'

const checkWidthChange = () => {
    if (window.innerWidth < 1328) return false;
    else return true;
}

function Navigation() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [onceToggled, setOnceToggled] = useState(false)
    const [className, setClassName] = useState('home-sidebar-open')

    useEffect(() => {
        let timeoutId = null;
        const resizeListener = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                console.log(onceToggled)
                if (!onceToggled){
                    setIsSidebarOpen(checkWidthChange())
                }}, 100);
        };
        window.addEventListener('resize', resizeListener);
    
        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, [onceToggled])

    useEffect(() => {
        if(isSidebarOpen){
            setClassName('home-sidebar-open')
        }
        else{
            setClassName('home-sidebar-closed')
        }
    },[isSidebarOpen])

    const changeSidebarState = () => {
        if (!onceToggled){
            setOnceToggled(true)
        }
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <>
            <TopNav changeSidebarState={changeSidebarState}/>
            <Sidebar clsName = {className} />  
        </>
    )
}

export default Navigation
