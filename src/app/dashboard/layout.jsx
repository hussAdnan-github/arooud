import Password from "@/components/Password";
import SideBar from "./_components/Sidbar";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    
    <div className=" flex flex-row-reverse bg-[#F7F7F7]">
          <SideBar/>
          {children}
        
    </div>
  );
}
