import React ,{useEffect,useState}from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import RootLoader from '../components/loader/RootLoader';
function Root() {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 2500)
    }, [])
    if (loading) {
        return <RootLoader/>
    }
  return (
    <div>
        <Header/>
        <div className='min-h-[calc(100vh-64px)]'>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Root