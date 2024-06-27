

export function Tag({ tag, passage }) {
    return (
        <div className=" flex flex-col justify-between">
            <div className=" text-gray-300 text-sm w-auto h-auto px-4 bg-slate-700 flex rounded-xl mx-auto">
                {tag}
            </div>
            <div className='text-gray-300 max-w-80 mx-auto'>
                {passage}
            </div>
        </div>
    )
}