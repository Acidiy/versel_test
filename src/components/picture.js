

export function Picture({img}) {
    return (
        <div className='w-64 h-72 relative mx-auto sm:mx-none'>
            <img className='w-full h-full z-20 relative' src={img}></img>
            <div className='w-full h-full z-10 transform translate-x-4 translate-y-4 bg-slate-500 absolute top-0'></div>
        </div>
    )
}

