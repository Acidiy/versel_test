import { Pin } from "../assets/svg"

export function Location(params) {
    return (
        <div className=" my-10 max-w-52 mx-auto ">
            <div className="flex gap-4">
                <Pin></Pin>
                <div className="text-gray-300">Ahmedabad, India</div>
            </div>
            <div className="flex gap-4">
                <div className=" w-1 h-1 bg-lime-500 rounded-full mt-2"></div>
                <div className="text-gray-300">Available for new projects</div>
            </div>
        </div>
    )
}