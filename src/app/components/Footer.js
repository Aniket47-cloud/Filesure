// Import the Image component from Next.js
import Image from 'next/image'

// Export the Footer component as the default export
export default function Footer() {
    // Define an array of contact items with title, image URL, and text
    const contactItems = [
        {
            title: "Contact nums",
            imageUrl: "/smartphone.svg",
            text: "+91 0000000000"
        },
        {
            title: "Gmail",
            imageUrl: "/mail-outline.svg",
            text: "demo@gmail.com"
        },
        {
            title: "Address",
            imageUrl: "/location.svg",
            text: "Mumbai, India"
        },
        {
            title: "Leave a request",
            imageUrl: "/doc.svg",
            text: "Leave a request"
        }
    ];

    return (
        // Main footer container with styling for background, width, and padding
        <footer id="contacts" className="bg-white w-full max-w-[100vw] py-8">
            {/* Inner container with styling for alignment, spacing, and background */}
            <div className="flex flex-col mx-auto min-h-[300px] items-center justify-around w-full md:w-11/12 lg:w-10/12 rounded-xl bg-[#111111] shadow-xl px-4  lg:px-8">
                
                {/* Company logo */}
                <Image
                    src="/company-bg.svg"
                    alt="Company Logo"
                    className="dark:invert my-6 sm:my-8"
                    width={290}
                    height={113}
                    priority
                />
                
                {/* Navigation section for contact items */}
                <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mb-6 sm:mb-8">
                    {/* Map over contact items to create individual articles */}
                    {contactItems.map((item, index) => (
                        <article key={index} className="flex flex-col space-y-1">
                            <div className="flex items-center gap-2">
                                <Image
                                    src={item.imageUrl}
                                    alt={`${item.title} icon`}
                                    className="dark:invert"
                                    width={15}
                                    height={20}
                                    priority
                                />
                                <h3 className="text-[#98A2B3] font-medium text-sm">{item.title}</h3>
                            </div>
                            <p className="text-white font-semibold text-lg">{item.text}</p>
                        </article>
                    ))}
                </nav>
                
                {/* Footer text */}
                <p className="font-normal text-sm text-white text-center mb-6 sm:mb-8">We work throughout the world</p>
            </div>
        </footer>
    )
}
