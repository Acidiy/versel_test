import { Git, Figma, Twitter, JS, TS, Next, Node, EX, Nestjs, Socket, MongoDB, Sass, Tailwindcss, ColorFigma, Cypress, Storybook, Gitbash, } from "../assets/svg";

export function Social(props) {

    let social = [
        {
            image: Git
        },
        {
            image: Twitter
        },
        {
            image: Figma
        }
    ]

    return (
        <div className=' max-w-30 flex gap-2'>
            {social.map((element) => {
                return (
                    <div className="w-30 flex justify-center">
                        <div><element.image /></div>
                    </div>
                )
            })}
        </div>
    )
}


// ======================================

export function Tools(props) {

    let Tools = [
        {
            image: <JS />,
            title: 'javascript'
        },
        {
            image: <TS />,
            title: 'Typescript'
        },
        {
            image: <Next />,
            title: 'Next.js'
        },
        {
            image: <Node />,
            title: 'Node.js'
        },
        {
            image: <EX />,
            title: 'Express.js'
        },
        {
            image: <Nestjs />,
            title: 'Nest.js'
        },
        {
            image: <Socket />,
            title: 'Socket.io'
        },
        {
            image: <MongoDB />,
            title: 'MongoDB'
        },
        {
            image: <Sass />,
            title: 'Sass'
        },
        {
            image: <Tailwindcss />,
            title: 'Tailwind'
        },
        {
            image: <ColorFigma />,
            title: 'Figma'
        },
        {
            image: <Cypress />,
            title: 'Cypress'
        },
        {
            image: <Storybook />,
            title: 'Storybook'
        },
        {
            image: <Gitbash />,
            title: 'Git'
        }
    ]
    return (
        <div className=" w-full h-auto grid grid-rows-5 grid-cols-3 gap-4 sm:grid-rows-2 sm:grid-cols-8  sm:px-32">
            {Tools.map((element) => {
                return (
                    <div className="flex flex-col align-middle">
                        <div className="w-full flex justify-center mx-auto">{element.image}</div>
                        <div className="text-gray-300 mx-auto">{element.title}</div>
                    </div>
                )
            })}
        </div>
    )
}