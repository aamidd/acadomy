'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Moon, Sun, Instagram, Send, HeadphonesIcon } from 'lucide-react'
import Head from 'next/head'

export const runtime = "edge";

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#2E2E2E' : 'white'
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  const content = {
    title: "فضای آنلاین آکادومی",
    subtitle: "در آکادومی، ما شما را همراهی می‌کنیم تا سفری دلچسب و پر از یادگیری در دنیای موسیقی و هنر تجربه کنید",
    courses: {
      title: "کلاس های آکادومی",
      description: "شامل کلاس های خصوصی ساز و دوره های چند جلسه ای موسیقی",
      link: "#"
    },
    subscriptions: {
      title: "اشتراک آکادومی",
      description: "دسترسی به تمامی کلاس های هفتگی و دوره های آکادومی به همراه مشاوره هنری خصوصی",
      link: "#"
    },
    suppcontent: {
      title: "محتوای تکمیلی آکادومی",
      description: "شامل ویدیوها و مقالات آموزشی پژوهشی در زمینه هنر",
      link: "#"
    }
  }

  return (
    
    <div dir="rtl" className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-[#2E2E2E] text-white' : 'bg-white text-[#2E2E2E]'} font-sans`}>
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2 space-x-reverse">
            <a href="https://acadomy.art/">
            <Image 
              src={isDarkMode ? '/logo-light.png' : '/logo-dark.png'} // Change these paths to your actual logo paths
              alt="Acadomy Logo"
              width={40} 
              height={40} 
            />
            </a>
            <span className="font-semibold text-xl">آکادومی</span>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <button className={`${isDarkMode ? 'bg-white text-[#2E2E2E]' : 'bg-[#2E2E2E] text-white'} px-4 py-2 rounded-full text-sm hover:bg-gray-400`}>
              خانه
            </button>
            <button onClick={toggleDarkMode} className={`p-2 rounded-full hover:bg-gray-400 dark:hover:bg-gray-600`}>
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 flex-grow text-center">
        <section className="mb-20">
          <h1 className="text-6xl font-bold mb-4 max-w-3xl mx-auto leading-tight">{content.title}</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </section>

        {/* Center-aligned and closer boxes with reduced height */}
        <section className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[content.courses, content.subscriptions, content.suppcontent].map((service, index) => (
              <a 
                href={service.link} 
                key={index} 
                className={`w-64 h-40 p-4 rounded-lg transition-colors duration-300 hover:bg-gray-500 hover:text-white ${isDarkMode ? 'bg-white text-[#2E2E2E]' : 'bg-[#2E2E2E] text-white'}`}
              >
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                {/* Apply mt-4 for all, but mt-6 for the middle one */}
                <p className={`${index === 1 ? 'mt-4' : 'mt-6'}`}>{service.description}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-20 flex justify-center items-center mb-4">
        <a href="https://t.me/Acadomy" className="text-current hover:text-gray-300 mx-1.5" target="_blank">
          <Send className="w-7 h-7" />
        </a>
        <a href="https://www.instagram.com/acadomy.art/?utm_source=ig_web_button_share_sheet" className="text-current hover:text-gray-300 mx-1" target="_blank">
          <Instagram className="w-7 h-7" />
        </a>
        <a href="https://t.me/AcadomySupport" className="text-current hover:text-gray-300 mx-1" target="_blank">
          <HeadphonesIcon className="w-7 h-7" />
        </a>
      </footer>

    </div>
  )
}