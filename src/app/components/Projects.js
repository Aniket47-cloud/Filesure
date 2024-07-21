import Image from 'next/image';
import Head from 'next/head';
export default function Projects() {
    // Categories data with icons and labels
    const categories = [
        {
            i: 0,
            imageUrl: "/social.svg",
            text: "Social media",
            alt: "Social media icon"
        },
        {
            i: 1,
            imageUrl: "/fitness.svg",
            text: "Fitness and sport",
            alt: "Fitness and sport icon"
        },
        {
            i: 2,
            imageUrl: "/bank.svg",
            text: "Bank",
            alt: "Bank icon"
        },
        {
            i: 3,
            imageUrl: "/construction.svg",
            text: "Construction",
            alt: "Construction icon"
        },
        {
            i: 4,
            imageUrl: "/games.svg",
            text: "Game projects",
            alt: "Game projects icon"
        },
        {
            i: 5,
            imageUrl: "/education.svg",
            text: "Education",
            alt: "Education icon"
        },
        {
            i: 6,
            imageUrl: "/transport.svg",
            text: "Auto, transport",
            alt: "Auto and transport icon"
        },
        {
            i: 7,
            imageUrl: "/medicine.svg",
            text: "Medicine, health",
            alt: "Medicine and health icon"
        },
        {
            i: 8,
            imageUrl: "/restaurants.svg",
            text: "Restaurants, food delivery",
            alt: "Restaurants and food delivery icon"
        },
        {
            i: 9,
            imageUrl: "/marketplace.svg",
            text: "Marketplaces",
            alt: "Marketplaces icon"
        },
        {
            i: 10,
            imageUrl: "/Ar.svg",
            text: "AR technology",
            alt: "AR technology icon"
        },
        {
            i: 11,
            imageUrl: "/tv.svg",
            text: "TV series",
            alt: "TV series icon"
        },
        {
            i: 12,
            imageUrl: "/startup.svg",
            text: "Startups",
            alt: "Startups icon"
        },
        {
            i: 13,
            imageUrl: "/religion.svg",
            text: "Religion",
            alt: "Religion icon"
        },
        {
            i: 14,
            imageUrl: "/online.svg",
            text: "Online courses",
            alt: "Online courses icon"
        }
    ];

    return (
        <>  <Head>
        <title>Our Projects and Industries | 100+ Successful Developments</title>
        <meta name="description" content="Explore our diverse portfolio of 100+ projects across 15 industries. From social media to AR technology, discover how we've created innovative solutions for various sectors." />
        <meta name="keywords" content="software projects, mobile apps, web development, social media, fitness apps, banking software, construction apps, game development, education technology, transportation apps, healthcare software, food delivery apps, marketplaces, AR technology, startup solutions" />
    </Head>

    
        <section id="services" className="p-4 px-5 flex flex-col bg-[#F2F4F7] min-h-[1300px]">
            <h2 className="text-3xl md:text-4xl mt-10 md:mt-20 leading-[51px] mx-4 md:ml-20 font-bold text-center md:text-left">
                Developed more than <span className="text-[#80A948]">100</span>
                <br className="hidden md:inline" /> projects in <span className="text-[#80A948]">15</span> industries
            </h2>

            {/* Categories Section */}
            <div className="w-full md:w-[80%] mx-4 md:ml-20 mt-8 md:mt-12 flex flex-wrap md:flex-nowrap justify-between items-start min-h-[350px]">
                {/* Render three columns for categories */}
                {[0, 1, 2].map((columnIndex) => (
                    <div key={`column-${columnIndex}`} className="flex flex-col w-full md:w-auto mb-8 md:mb-0 space-y-6 md:space-y-0 md:justify-between min-h-[350px]">
                        {/* Each column contains up to 5 categories */}
                        {categories.slice(columnIndex * 5, (columnIndex + 1) * 5).map((category) => (
                            <div key={category.i} className="flex gap-5 items-center">
                                <div className="flex items-center justify-center rounded-full p-2 bg-white shadow-xl">
                                    <Image
                                        src={category.imageUrl}
                                        alt={category.alt}
                                        className="dark:invert"
                                        width={24}
                                        height={24}
                                        priority
                                    />
                                </div>
                                <p className="font-medium text-base md:text-lg">{category.text}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Projects Section */}
            <article id="cases" className="flex flex-col mx-4 md:ml-20 mt-12 md:mt-20">
                <div className="flex flex-col space-y-8 md:space-y-12">
                    <header className="flex flex-col space-y-4 md:space-y-8">
                        <h2 className="font-bold text-3xl md:text-4xl text-[#101828]">Projects we are proud of</h2>
                        <p className="font-medium text-sm md:text-base text-[#101828]">
                            Our software development company is truly proud of the wonderful clients we have
                            <br className="hidden md:inline" /> worked with. We enjoy a long-term partnership
                        </p>
                    </header>
                    {/* Project navigation links */}
                    <nav className="flex flex-wrap items-center gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="p-2 text-base font-medium transition-border duration-150 hover:border-b-2 border-[#FFB900]">
                                Project {i}
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Project Details */}
                <div  className="flex flex-col mt-20 space-y-7">
                    <h3 className="font-bold tracking-wide text-4xl">Project 1</h3>
                    <div className="flex flex-col md:flex-row justify-between w-full md:w-[95%]">
                        <div className="flex flex-col space-y-6 md:space-y-8">
                            <p className="text-sm md:text-base font-normal">
                                Crafted an innovative rental property management app, seamlessly integrating secure
                                <br className="hidden md:inline" />login, absence registration, and a tenant notice board. Elevating the resident
                                <br className="hidden md:inline" /> experience with user-friendly design and efficient communication channels
                            </p>
                            <p className="font-normal text-base md:text-lg">
                                Business analysis <span className="text-[#FFB900]">/</span> iOS <span className="text-[#FFB900]">/</span> Android <span className="text-[#FFB900]">/</span> QA <span className="text-[#FFB900]">/</span> UI/UX Design
                            </p>
                            <div className="flex flex-wrap items-center gap-5">
                                <p className="flex items-center gap-2">
                                    <Image src="/place.svg" alt="place-outline" className="dark:invert" width={24} height={24} priority />
                                    <span className="font-normal text-sm md:text-base">India</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Image src="/work.svg" alt="work-outline" className="dark:invert" width={24} height={24} priority />
                                    <span className="font-normal text-sm md:text-base">Real Estate</span>
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-5">
                                <p className="flex flex-col items-center space-y-2">
                                    <span className="font-bold text-xl md:text-2xl">400%</span>
                                    <span className="font-normal text-xs md:text-sm text-[#667085]">User Growth</span>
                                </p>
                                <p className="flex flex-col items-center space-y-2">
                                    <span className="font-bold text-xl md:text-2xl">+200 000</span>
                                    <span className="font-normal text-xs md:text-sm text-[#667085]">Active Users</span>
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-5">
                                <Image src="/ios.svg" alt="Applestore" className="dark:invert" width={148} height={40} priority />
                                <Image src="/android.svg" alt="Google Play" className="dark:invert" width={136} height={40} priority />
                            </div>
                        </div>
                        <div className="mt-8 md:mt-0">
                            <Image src="/image.svg" alt="Demo Mobile" className="dark:invert" width={446} height={449} priority />
                        </div>
                    </div>
                </div>
            </article>
        </section></>
    )
}
