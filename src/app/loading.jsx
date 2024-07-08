import Image from "next/image";
import logo from '../../public/img/logo.png'

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className="loading flex-col fixed top-0 left-0 bg-white" style={{zIndex:'99999999' , height:'100%' , width:'100%' }}>
            <Image className="animate-bounce w-300 h-300" src={logo} width={300} height={300} alt="logo"/>
        </div>
    )
  }