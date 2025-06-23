"use  client";

import { Icon } from "@iconify/react";
import Link from "next/link";

const Responsive = () => {

    return (


        
        // <div  className="md:hidden fixed  bottom-0 left-0 right-0 z-50 bg-white p-4 ">
        <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white p-4 transition-transform duration-300 ease-in-out transform translate-y-0 rounded-t-3xl shadow-[0_-2px_10px_rgba(0,0,0,0.1)]`}>
            <div >
                <div className="grid grid-cols-4 gap-4 text-center">
                    <Link href="/#home" className="flex flex-col items-center hover:text-pink-500">
                        <Icon icon="ant-design:home-outlined" width="30" height="30" />
                        <span>Home</span>
                    </Link>
                    <Link href="/#about" className="flex flex-col items-center hover:text-pink-500 r">
                        <Icon icon="proicons:person" width="30" height="30" />
                        <span>About</span>
                    </Link>
                    <Link href="/#services" className="flex flex-col items-center hover:text-pink-500">
                        <Icon icon="hugeicons:work" width="30" height="30" />
                        <span>Services</span>
                    </Link>
                    <Link href="/#skills" className="flex flex-col items-center hover:text-pink-500">
                        <Icon icon="tabler:bulb" width="30" height="30" />
                        <span>Skills</span>
                    </Link>
                    <Link href="/#qualification" className="flex flex-col items-center hover:text-pink-500">
                        <Icon icon="mdi:certificate" width="25" height="25" />
                        <span>Qualification</span>
                    </Link>
                    <Link href="/#projects" className="flex flex-col items-center hover:text-pink-500">
                        <Icon icon="solar:gallery-outline" width="25" height="30" />
                        <span>Projects</span>
                    </Link>
                    <Link href="/#contact" className="flex flex-col items-center hover:text-pink-500">
                        <Icon icon="material-symbols-light:mail-outline-rounded" width="30" height="30" />
                        <span>Contact</span>
                    </Link>

                </div>

            </div>
            
                
        </div>
    )
}

export default Responsive;