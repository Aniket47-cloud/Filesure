import Image from 'next/image';
import Head from 'next/head';
export default function Team() {
    return (
        <>
         <Head>
                <title>Our Expert Team | Thousand Digital Production</title>
                <meta name="description" content="Meet Thousand's expert team of 28 IT professionals with 7+ years of experience. We've completed over 100 projects in web and mobile development, design, and product analytics." />
                <meta name="keywords" content="IT team, digital production, web development, mobile development, product analytics, design, software projects" />
            </Head>


        // Section wrapper with background color, padding, and minimum height
        <section className="min-h-[700px] max-w-[100vw] flex items-center bg-[#F2F4F7] py-8 md:py-16">
            {/* Container to center content and handle layout for different screen sizes */}
            <div className="w-11/12 mx-auto flex flex-col lg:flex-row justify-between mt-2 gap-8 lg:gap-16">
                {/* Article for text content with spacing between elements */}
                <article className='flex flex-col space-y-6 md:space-y-10 w-full lg:w-[50%]'>
                    {/* Section title */}
                    <h2 className="font-bold text-3xl md:text-4xl">Our team</h2>
                    {/* Introductory paragraph */}
                    <p className="font-medium text-sm md:text-base">
                        Thousand is a full-cycle digital production company with its own product analytics,
                        <br className="hidden md:inline" /> design, web and mobile development.
                    </p>
                    {/* Statistics section with flex layout for responsive design */}
                    <div className="flex flex-wrap justify-between items-center gap-4">
                        {/* Individual statistic */}
                        <p className="flex flex-col space-y-2 md:space-y-4">
                            <span className="font-bold text-4xl md:text-5xl">28</span>
                            <span className="text-sm md:text-base font-medium text-[#667085]">team members</span>
                        </p>
                        {/* Individual statistic */}
                        <p className="flex flex-col space-y-2 md:space-y-4">
                            <span className="font-bold text-4xl md:text-5xl">+ 100</span>
                            <span className="text-sm md:text-base font-medium text-[#667085]">projects</span>
                        </p>
                        {/* Individual statistic */}
                        <p className="flex flex-col space-y-2 md:space-y-4">
                            <span className="font-bold text-4xl md:text-5xl">7 years</span>
                            <span className="text-sm md:text-base font-medium text-[#667085]">in IT sphere</span>
                        </p>
                    </div>
                    {/* Additional paragraph */}
                    <p className="font-medium text-sm md:text-base">
                        All the necessary specialists - from a designer to a tester - are on our staff. We hire
                        <br className="hidden md:inline" /> the best specialists in the market. It's expensive but worth it
                    </p>
                </article>
                {/* Figure for team illustration image */}
                <figure className="w-full md:w-[70%] lg:w-[45%] mx-auto lg:mx-0">
                    <Image
                        src="/team.svg"
                        alt="Team illustration"
                        className="dark:invert w-full h-auto"
                        width={624}
                        height={424}
                        priority
                    />
                </figure>
            </div>
        </section></>
    )
}
