import { Inter,Nerko_One } from "next/font/google";
import "./globals.css";
import Navber from "@/component/Navber";

const inter = Inter({ subsets: ["latin"] });
const nerko = Nerko_One({weight:["400"], subsets: ["latin"] });

export const metadata = {
  title: {
    default:"Next Hero",
    template:"%s | Next Hero"
  },
  description: "Start",
};

export default function RootLayout({ children }) {

  
  return (

    <html lang="en">
  
      <body className={nerko.className}>
        <Navber></Navber>
     
     
          <div className="">{children}</div>
        
           <footer>
          
        <h3 className="bg-blue-500">This is footer</h3>
      </footer>
        
        </body>
   
    </html>
  );
}
