import "./globals.css";
import { Libre_Franklin } from "next/font/google";
import MyCard from "@/components/MyCard";
import SideMenu from "@/components/SideMenu";

const libre = Libre_Franklin({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${libre.className} bg-black text-white`}>
        
        <main className="relative min-h-screen flex items-center justify-center">
          
          {/* Container หลัก */}
          <div className="w-full max-w-[1400px] mx-auto flex items-center gap-[70px] px-10">
            
            {/* ซ้าย : MyCard */}
            <aside className="flex-shrink-0">
              <MyCard />
            </aside>

            {/* ขวา : เนื้อหาแต่ละหน้า */}
            <section className="flex-1 max-w-[700px]">
              {children}
            </section>

          </div>

          {/* Side Menu (ลอย) */}
          <SideMenu />

        </main>
      </body>
    </html>
  );
}