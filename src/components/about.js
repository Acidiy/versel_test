
export function About(props) {
    return (
        <div className=" mt-7 max-w-80 mx-auto text-gray-300 text-pretty ">
            <div className=" text-2xl mb-2">'Hi, I’m Sagar 👋'</div>
            <div>'Im a full stack developer React.js & Node.js with a focus on creating and occasionally designing exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.'</div>
        </div>
    )
}

export function Curious(props) {
    let content = [
        {
            paragraph: 'Im a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.'
        },
        {
            paragraph: 'I began my journey as a web developer in 2015, and since then, Ive continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, Im building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.'
        },
        {
            paragraph: 'I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.'
        },
        {
            paragraph: 'When Im not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.'
        },
        {
            paragraph: 'Finally, some quick bits about me.'
        }
    ]

    let bullet_point = [
        {
            point: 'B.E. in Computer Engineering'
        },
        {
            point: 'Avid learner'
        },
        {
            point: 'Full time freelancer'
        },
        {
            point: 'Aspiring indie hacker'
        }
    ]

    return (
        <div className=" mt-7  mx-auto text-gray-300 text-pretty">
            <div className=" text-2xl mb-2">Curious about me? Here you have it:</div>
            <div>
                {
                    content.map((element) => {
                        return (
                            <div className='mb-2 sm:max-w-96 sm:text-sm'>
                                {element.paragraph}
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex flex-wrap gap-7 mb-3'>
                {
                    bullet_point.map((element) => {
                        return (
                            <li>{element.point}</li>
                        )
                    })
                }
            </div>
            <div>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</div>
        </div>
    )
}