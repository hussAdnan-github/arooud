import Link from 'next/link';
import world from '../../public/img/CADpatents.svg'
import PartnersCard from "./PartnersCard";

export default function Partners() {
  return (
<div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
<div className="partners_offer ">
      <Link href={'/Partners'}>     <PartnersCard title={"محل صدى الرنين"} img={world}/></Link>
    </div>
 
<div className="partners_offer ">
      <Link href={'/Partners'}>     <PartnersCard title={"محل صدى الرنين"} img={world}/></Link>
    </div>
 
<div className="partners_offer ">
      <Link href={'/Partners'}>     <PartnersCard title={"محل صدى الرنين"} img={world}/></Link>
    </div>
 
<div className="partners_offer ">
      <Link href={'/Partners'}>     <PartnersCard title={"محل صدى الرنين"} img={world}/></Link>
    </div>
 
<div className="partners_offer ">
      <Link href={'/Partners'}>     <PartnersCard title={"محل صدى الرنين"} img={world}/></Link>
    </div>
 
<div className="partners_offer ">
      <Link href={'/Partners'}>     <PartnersCard title={"محل صدى الرنين"} img={world}/></Link>
    </div>
 
<div className="partners_offer ">
      <Link href={'/Partners'}>     <PartnersCard title={"محل صدى الرنين"} img={world}/></Link>
    </div>
 

</div>
  )
}
