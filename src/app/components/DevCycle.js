import { MdKeyboardArrowRight } from "react-icons/md"; // Import right arrow icon
import Image from 'next/image' // Import Next.js Image component

export default function DevCycle() {
    return (
        <section id="media" className="bg-white max-w-[100vw] min-h-[700px] w-full flex flex-col">
            {/* Horizontal scrollable logos section */}
            <div className="w-full overflow-x-auto">
                <div className="w-[90%] mx-auto border-b-2 mt-10 border-t-2 flex items-center py-5 justify-between">
                    {/* Render 6 planet logos */}
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="flex-shrink-0">
                            <Image src="/planet.svg" alt="logo" width={164} height={72} />
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Main content section */}
            <div className="px-5 p-4 flex flex-col lg:flex-row justify-between items-start lg:items-center">
                {/* Left column */}
                <div className="flex flex-col mt-5 min-h-[300px] lg:ml-20 justify-between w-full lg:w-[55%]">
                    <h2 className="font-extrabold mb-4 text-2xl sm:text-3xl lg:text-4xl break-words">Full Development Cycle</h2>
                    <p className="mb-8">We use proven technologies</p>
                    
                    {/* Web technologies */}
                    <div className="flex flex-col mb-6 w-full lg:w-[63%] justify-between">
                        <p className="text-xl mb-5 font-bold">Web</p>
                        <p className="text-base">PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js/ Nuxt / MySQL / Laravel / GO lang / django / Python</p>
                    </div>
                    
                    {/* Mobile technologies */}
                    <div className="flex flex-col w-full lg:w-[63%] justify-between">
                        <p className="text-xl mb-5 font-bold">Mobile</p>
                        <p className="text-base">Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation</p>
                    </div>
                </div>
                
                {/* Right column */}
                <div className="mt-8 lg:mt-2 w-full lg:w-[45%]">
                    <ul className="flex flex-col justify-between min-h-[300px]">
                        {/* List of development services */}
                        {['IOS Development', 'Web Development', 'UI/UX Design', 'Android Development', 'Testing', 'Launch', 'IT Consulting'].map((item) => (
                            <li key={item} className="flex items-center gap-3">
                                {item}
                                <MdKeyboardArrowRight />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}