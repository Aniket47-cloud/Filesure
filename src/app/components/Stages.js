import Image from 'next/image';
import Head from 'next/head';
export default function Stages() {
    // Stages data with title, image URL, and description
    const cards = [
        {
            title: "Analysis",
            imageUrl: "/planning.svg",
            text: "We craft precise technical specs, aligning with your business, technology, and user requirements."
        },
        {
            title: "Design",
            imageUrl: "/graphic.svg",
            text: "We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces."
        },
        {
            title: "Development",
            imageUrl: "/coding.svg",
            text: "We create an extensible architecture, write clean and stable code. We integrate with customer technologies."
        },
        {
            title: "Testing",
            imageUrl: "/security.svg",
            text: "We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions."
        },
        {
            title: "Launching",
            imageUrl: "/hosting.svg",
            text: "We design the application page and publish it in the App Store and Google Play stores."
        },
        {
            title: "Support",
            imageUrl: "/application.svg",
            text: "We monitor the stability of the application, update it for new devices and versions of iOS and Android."
        }
    ];

    return (
        <>
         <Head>
                <title>Application Development Stages | Our Process</title>
                <meta name="description" content="Explore our comprehensive application development process: Analysis, Design, Development, Testing, Launching, and Support. Learn how we create high-quality, user-friendly applications." />
                <meta name="keywords" content="application development, mobile apps, software development, analysis, design, testing, launching, support, development stages" />
            </Head>

        <section className="flex flex-col py-7 min-h-[850px] bg-white p-3 space-y-7 overflow-x-hidden">
            <h2 className="font-bold text-3xl md:text-4xl mt-8 text-center md:text-left md:ml-16 px-4 md:px-0 break-words">
                Application Development Stages
            </h2>

            {/* Main container for the stages and the image */}
            <div className="w-full md:w-11/12 mt-8 flex flex-col md:flex-row items-stretch justify-around mx-auto md:space-x-4">
                
                {/* Left column with the first three stages */}
                <article className="flex flex-col justify-between space-y-4 w-full md:w-1/3 mb-8 md:mb-0">
                    {cards.slice(0, -3).map((card, index) => (
                        <div key={index} className="flex flex-col p-3 shadow-xl rounded-xl bg-[#FFFFFF] justify-center min-h-[180px] space-y-4">
                            <header className="flex items-start gap-3">
                                <Image
                                    src={card.imageUrl}
                                    alt={`${card.title} icon`}
                                    className="dark:invert shrink-0"
                                    width={40}
                                    height={40}
                                    priority
                                />
                                <h3 className="font-semibold text-lg sm:text-xl break-words">{card.title}</h3>
                            </header>
                            <p className="font-normal text-sm sm:text-base">{card.text}</p>
                        </div>
                    ))}
                </article>

                {/* Center image */}
                <figure className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
                    <Image
                        src="/dd.svg"
                        alt="Demo mobile"
                        className="dark:invert"
                        width={440}
                        height={564}
                        priority
                    />
                </figure>

                {/* Right column with the last three stages */}
                <article className="flex flex-col justify-between space-y-4 w-full md:w-1/3">
                    {cards.slice(-3).map((card, index) => (
                        <div key={index} className="flex flex-col p-3 shadow-xl rounded-xl bg-[#FFFFFF] justify-center min-h-[180px] space-y-4">
                            <header className="flex items-start gap-3">
                                <Image
                                    src={card.imageUrl}
                                    alt={`${card.title} icon`}
                                    className="dark:invert shrink-0"
                                    width={40}
                                    height={40}
                                    priority
                                />
                                <h3 className="font-semibold text-lg sm:text-xl break-words">{card.title}</h3>
                            </header>
                            <p className="font-normal text-sm sm:text-base">{card.text}</p>
                        </div>
                    ))}
                </article>
            </div>
        </section></>
    );
}
