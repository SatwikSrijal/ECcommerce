"use client"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import "./NavIcons.css" 

const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const router = useRouter();
    const isLoggedin = false

    const handleProfile = () => {
        if (!isLoggedin) {
            router.push("/Login")
        }
        setIsProfileOpen((prev) => !prev);
    }

    return (
        <div className="nav-icons-wrapper">
            <Image src="/navicons/profile.png" alt="" width={22} height={22} className="icon" onClick={handleProfile} />
            {isProfileOpen && (
                <div className="dropdown-menu">
                    <Link href="/">Profile</Link>
                    <div className="dropdown-item">
                        <a href="/Login">Login</a>
                    </div>
                </div>
            )}
            <Image src="/navicons/notification.png" alt="" width={22} height={22} className="icon" />
            <Image src="/navicons/cart.png" alt="" width={22} height={22} className="icon" />
        </div>
    )
}

export default NavIcons
