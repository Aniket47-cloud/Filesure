import { IN } from 'country-flag-icons/react/3x2'  // Import India flag icon

export default function Discuss() {
    return (
        <section className="max-w-[100vw] min-h-[350px] flex items-center justify-center w-full bg-gradient-to-r from-[#FABC1F] to-[#7CA546]">
            <div className="w-11/12 flex flex-col lg:flex-row items-center justify-between p-4 gap-8 lg:gap-4">
                {/* Left side - Text content */}
                <div className="flex flex-col lg:min-h-[150px] text-white justify-between w-full lg:w-auto">
                    <h2 className="font-bold text-3xl lg:text-4xl mb-2 lg:mb-0">
                        Let's discuss<br className="hidden lg:inline" />
                        Your project
                    </h2>
                    <p className="font-medium text-sm lg:text-base">
                        Let's figure out how to create an effective application,<br className="hidden lg:inline" />
                        its cost and terms of its development
                    </p>
                </div>

                {/* Right side - Contact form */}
                <div className="bg-white w-full lg:w-[50%] rounded-xl shadow-xl min-h-[244px] flex flex-col items-end p-2">
                    <form className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 w-full p-2 sm:p-5">
                        {/* Full Name input */}
                        <div className="flex flex-col space-y-1 pb-1 border-b-2">
                            <label className="text-[11px] sm:text-[13px] font-medium text-gray-500" htmlFor="fullName">Full Name</label>
                            <input id="fullName" type="text" className="text-xs sm:text-base outline-none w-full placeholder-black" placeholder="My Name" />
                        </div>

                        {/* Phone Number input with India flag */}
                        <div className="flex flex-col space-y-1 pb-1 border-b-2">
                            <label className="text-[11px] sm:text-[13px] font-medium text-gray-500" htmlFor="phoneNumber">Phone Number</label>
                            <div className="text-xs sm:text-base flex items-center gap-1 sm:gap-2">
                                <IN className="w-4 h-3 sm:w-6 sm:h-4 flex-shrink-0" />
                                <input id="phoneNumber" type="tel" className="flex-grow w-full outline-none placeholder-black" placeholder="+91 0000000000" />
                            </div>
                        </div>

                        {/* Business Name input */}
                        <div className="flex flex-col space-y-1 pb-1 border-b-2">
                            <label className="text-[11px] sm:text-[13px] font-medium text-gray-500" htmlFor="businessName">Business Name</label>
                            <input id="businessName" type="text" className="text-xs sm:text-base w-full outline-none placeholder-black" placeholder="ABC Technologies PVT LTD" />
                        </div>

                        {/* Business Mail input */}
                        <div className="flex flex-col space-y-1 pb-1 border-b-2">
                            <label className="text-[11px] sm:text-[13px] font-medium text-gray-500" htmlFor="businessMail">Business Mail</label>
                            <input id="businessMail" type="email" className="text-xs sm:text-base w-full outline-none placeholder-black" placeholder="demoaccount@gmail.com" />
                        </div>
                    </form>

                    {/* Submit button */}
                    <button className="px-6 py-3 rounded-[8px] lg:mr-4 mt-4 text-sm font-semibold bg-[#FFB900] text-white w-full lg:w-[32%]">
                        Discuss the project
                    </button>
                </div>
            </div>
        </section>
    )
}
