import Head from 'next/head';
import Image from "next/image";
import NavBar from "./components/NavBar";
import { IN } from 'country-flag-icons/react/3x2';
import DevCycle from "./components/DevCycle";
import Discuss from "./components/Discuss";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Stages from "./components/Stages";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Desun | Custom App Development Services | Transform Your Business</title>
        <meta name="description" content="Elevate your business with Desun's custom app development services. We create user-centric mobile and web applications that solve real problems and drive growth. Get a free consultation today!" />
        <meta name="keywords" content="app development, custom mobile apps, web applications, software development, digital solutions, business apps, user-centric design, Desun technology" />
      </Head>

      <div className="min-h-screen">
        <main className="flex min-h-[875px] bg-[#F2F4F7] relative flex-col max-w-[100vw] overflow-hidden">
          {/* Navigation Bar */}
          <NavBar />

          {/* Decorative Images (visible only on xl screens) */}
          <div className="hidden xl:block">
            <Image src="/dashboard.svg" alt="dashboard" className="absolute top-3 right-32" width={590} height={672} />
            <Image src="/categories2.svg" alt="dashboard" className="absolute right-0 top-9" width={325} height={600} />
            <Image src="/raise.svg" alt="raise tickets" className="absolute bottom-0 right-28" width={390} height={600} />
            <Image src="/invoice.svg" alt="invoice" className="absolute bottom-0 right-0" width={190} height={600} />
            <Image src="/categories.svg" alt="category details" className="absolute top-0 left-[750px]" width={320} height={600} />
            <Image src="/vacate.svg" alt="vacate" className="absolute top-0 right-24" width={390} height={600} />
          </div>

          {/* Hero Section */}
          <section className="text-xl xl:text-[39px] w-full xl:w-[49%] px-4 xl:ml-[108px] sm:ml-10  xl:px-14 text-black py-8 xl:mt-32">
            <h1 className="text-2xl xl:text-4xl font-extrabold mb-4">
              <span className="text-[#FFB900]">User-Centric Excellence</span>: Our <br className="hidden xl:block" /> App Development services <br className="hidden xl:block" />
              <span className="font-semibold">Tackle Your Pain Points</span>
            </h1>
            <p className="text-base xl:text-lg font-medium">
              Experience a Seamless Digital Journey with <span className="text-green-700 font-extrabold">Desun</span> - Where Every Line of Code Resolves Your Challenges and <span className="text-[#FFB900] font-extrabold">Elevates Your App Experience</span> to Unparalleled Heights.
            </p>
          </section>

          {/* Contact Form Section */}
          <section className="w-[90%] xl:w-[45%] min-h-[260px] bg-white rounded-xl shadow-xl mx-auto xl:ml-[158px] flex flex-col p-5 justify-between mb-8">
            <h2 className="font-bold text-lg xl:text-xl">Leave your contacts and we will call you back<br />within 30 minutes</h2>
            <div className="flex flex-col xl:flex-row justify-between items-end">
              <form id="consultationForm" className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 w-full p-2 sm:p-4 pl-0 sm:pl-0">
                {/* Full Name Input */}
                <div className="flex flex-col space-y-1 pb-1 border-b-2">
                  <label htmlFor="fullName" className="text-[11px] sm:text-[13px] font-medium text-gray-500">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="My Name"
                    className="text-xs placeholder-black sm:text-base bg-transparent focus:outline-none"
                  />
                </div>
                {/* Phone Number Input */}
                <div className="flex flex-col space-y-1 pb-1 border-b-2">
                  <label htmlFor="phoneNumber" className="text-[11px] sm:text-[13px] font-medium text-gray-500">Phone Number</label>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <IN className="w-4 h-3 sm:w-6 sm:h-4 flex-shrink-0" />
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="+91 0000000000"
                      className="text-xs placeholder-black sm:text-base bg-transparent focus:outline-none flex-grow"
                    />
                  </div>
                </div>
                {/* Business Name Input */}
                <div className="flex flex-col space-y-1 pb-1 border-b-2">
                  <label htmlFor="businessName" className="text-[11px] sm:text-[13px] font-medium text-gray-500">Business Name</label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    placeholder="ABC Technologies PVT LTD"
                    className="text-xs placeholder-black sm:text-base bg-transparent focus:outline-none"
                  />
                </div>
                {/* Business Mail Input */}
                <div className="flex flex-col space-y-1 pb-1 border-b-2">
                  <label htmlFor="businessMail" className="text-[11px] sm:text-[13px] font-medium text-gray-500">Business Mail</label>
                  <input
                    type="email"
                    id="businessMail"
                    name="businessMail"
                    placeholder="demoaccount@gmail.com"
                    className="text-xs placeholder-black sm:text-base bg-transparent focus:outline-none"
                  />
                </div>
              </form>
              {/* Submit Button */}
              <button type="submit" form="consultationForm" className="text-xs sm:text-sm bg-[#80A948] xl:mb-4 font-medium rounded-[8px] text-white p-2 mt-4 xl:mt-0 w-full sm:w-auto">
                Get consultation
              </button>
            </div>
          </section>
        </main>
     
        {/* Additional Sections */}
        <DevCycle />
        <Projects />
        <Discuss />
        <Stages/>
        <Team />
        <FAQ/>
        <Footer/>
      </div>
    </>
  );
}