import { Upwork } from "../assets/svg"


import Ad from "../assets/Pic-3.png"
import { Save } from "../assets/svg"
import { Wtags } from "../assets/tags"
import { Tag } from "./tag"

export function Ucard({ timeline, job, points }) {
    return (
        <div className=" bg-slate-800 px-4 py-6 rounded-xl flex flex-col align-middle sm:px-12 sm:w-8/12 sm:mx-auto">
            <div className=" sm:flex sm:justify-between">
                <Upwork />

                <div className="sm:flex sm:flex-row-reverse sm:w-8/12 sm:justify-between">
                    <div className="text-gray-300 text-sm">
                        {timeline}
                    </div>

                    <div className="text-gray-300 text-xl sm:text-2xl">
                        {job}
                    </div>
                </div>
            </div>

            <div className="sm:mx-auto">
                {points.map((element) => {
                    return (
                        <li className="text-gray-300 text-sm sm:text-xl sm:w-8/12">{element.point}</li>
                    )
                })}
            </div>

        </div>
    )
}

export function Wcard({ }) {
    return (
        <div className="sm:flex sm:w-8/12 sm:mx-auto">
            <div className="bg-slate-500 w-full rounded-t-xl px-8 py-8 sm:rounded-tr-none sm:rounded-l-xl sm:flex sm:justify-center sm:align-middle">
                <img className="w-96" src={Ad}></img>
            </div>
            <div className="bg-slate-800 w-full rounded-b-xl px-8 py-8 flex flex-col gap-4 sm:rounded-bl-none sm:rounded-r-xl">
                <div className="text-gray-300 font-semibold">Fiskil</div>
                <div className="text-gray-300 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</div>
                <div className="flex flex-wrap gap-2">
                    {Wtags.map((element) => {
                        return <Tag tag={element.tag} />
                    })}
                </div>
                <Save />
            </div>
        </div>
    )
}