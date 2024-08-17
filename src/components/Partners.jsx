import Link from "next/link";
import PartnersCard from "./PartnersCard";

export default async function Partners() {
  const response = await fetch(
    "https://offers.pythonanywhere.com/v1/api/places/arewe/",
    {cache:'no-store'}
  );
  const about = await response.json();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-x-6">
      <div className="partners_offer ">
        {about.map((item) => (
          <Link href={"/partners"} key={item.id}>
            {" "}
            <PartnersCard title={item.goal_ar} img={item. image_goal} />
          </Link>
        ))}
      </div>
    </div>
  );
}
