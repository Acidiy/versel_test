import { Copyright } from "../assets/svg"

export function Footer({}) {
    return(
        <div className="flex mx-auto gap-2">
            <Copyright/>
            <div className="text-gray-300 text-xs">2023 | Designed and coded with ❤️️ by Sagar Shah</div>
        </div>
    )
}