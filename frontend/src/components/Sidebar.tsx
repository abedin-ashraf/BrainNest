import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SidebarItem } from "./SidebarItem"
import { Logo } from "../icons/Logo"
import { InstagramIcon } from "../icons/InstagramIcon"
import { FacebookIcon } from "../icons/FacebookIcon"


export function Sidebar() {
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-4">
        <div className="flex text-2xl pt-4 items-center">
            <div className="pr-2 text-purple-600"><Logo /></div>
            BrainNest
        </div>
        <div className="pt-4 pl-4">
            <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
            <SidebarItem text="Twitter" icon={<TwitterIcon />} />
            <SidebarItem text="Instagram" icon={<InstagramIcon />} />
            <SidebarItem text="Facebook" icon={<FacebookIcon />} />

        </div>
    </div>
}