// Import the Image component from Next.js
import Image from 'next/image'

// Export the FAQ component as the default export
export default function FAQ() {
    return (
        // Main section container with styling for background, spacing, and padding
        <section id="faq" className="bg-white flex flex-col space-y-6 sm:space-y-10 min-h-[500px] px-4 sm:px-8 md:px-16 lg:px-24 py-10 sm:py-20">
            {/* FAQ heading */}
            <h2 className="font-bold text-3xl sm:text-4xl">FAQ</h2>
            
            {/* Container for the FAQ articles, responsive layout for larger screens */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                
                {/* Left column for the FAQ articles */}
                <div className="flex w-full lg:w-1/2 flex-col">
                    
                    {/* FAQ article 1 */}
                    <article className="flex justify-between items-center border-b-2 border-t-2 gap-3 sm:gap-5 py-4 sm:py-6">
                        <h3 className="font-semibold text-lg sm:text-xl">What is the cost of a mobile application?</h3>
                        <div className="flex-shrink-0 flex items-center justify-center p-2 shadow-xl rounded-full bg-white">
                            <Image
                                src="/add.svg"
                                alt="Expand"
                                className="dark:invert"
                                width={24}
                                height={24}
                                priority
                            />
                        </div>
                    </article>
                    
                    {/* FAQ article 2 */}
                    <article className="flex items-center justify-between border-b-2 gap-3 sm:gap-5 py-4 sm:py-6">
                        <h3 className="font-semibold text-lg sm:text-xl">Do you provide a guarantee for the mobile application?</h3>
                        <div className="flex-shrink-0 flex items-center justify-center p-2 shadow-xl rounded-full bg-white">
                            <Image
                                src="/add.svg"
                                alt="Expand"
                                className="dark:invert"
                                width={24}
                                height={24}
                                priority
                            />
                        </div>
                    </article>
                </div>
                
                {/* Right column for the FAQ articles */}
                <div className="flex w-full lg:w-1/2 flex-col">
                    
                    {/* FAQ article 3 with expanded content */}
                    <article className="flex flex-col py-4 sm:py-6 border-b-2 border-t-2 lg:border-t-2 space-y-4 sm:space-y-7">
                        <div className="flex justify-between items-center gap-3 sm:gap-5">
                            <h3 className="font-semibold text-lg sm:text-xl">How long will development take?</h3>
                            <div className="flex-shrink-0 flex items-center justify-center p-2 bg-white">
                                <Image
                                    src="/cross.svg"
                                    alt="Collapse"
                                    className="dark:invert"
                                    width={24}
                                    height={24}
                                    priority
                                />
                            </div>
                        </div>
                        <p className="font-normal w-full lg:w-10/12 text-sm sm:text-base">
                            Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.
                            <br/><br/>
                            Average development time from start to finished application: Medium projects up to 
                            <span className="font-semibold text-base sm:text-lg"> 3 months.</span>
                            <br/>
                            Large projects about 
                            <span className="font-semibold text-base sm:text-lg"> 4-6 months.</span> 
                            <br/>
                            To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.
                        </p>
                    </article>
                    
                    {/* FAQ article 4 */}
                    <article className="flex items-center justify-between border-b-2 gap-3 sm:gap-5 py-4 sm:py-6">
                        <h3 className="font-semibold text-lg sm:text-xl">I will not tell my idea, do you guarantee confidentiality?</h3>
                        <div className="flex-shrink-0 flex items-center justify-center p-2 shadow-xl rounded-full bg-white">
                            <Image
                                src="/add.svg"
                                alt="Expand"
                                className="dark:invert"
                                width={24}
                                height={24}
                                priority
                            />
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}
