import { Mail, Phone, Copy } from "../assets/svg";
import { Social } from "./renderSVG";

export function Contact({}) {
    return(
        <div className="flex flex-col gap-4">
            <div className=" flex flex-col">
                <div className="flex gap-4 mx-auto">
                    <Mail/>
                    <div className="text-gray-300 text-sm font-semibold">reachsagarshah@gmail.com</div>
                    <Copy/>
                </div>
                <div className="flex gap-4 mx-auto">
                    <Phone/>
                    <div className="text-gray-300 text-sm font-semibold">+91 8980500565</div>
                    <Copy/>
                </div>
            </div>
            <div className="text-gray-300 text-sm mx-auto">You may also find me on these platforms!</div>
            <div className="mx-auto"><Social/></div>
        </div>
    )
}