'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Moon, Sun, Users, User, Video, Instagram, Send, HeadphonesIcon } from 'lucide-react'
import { useTheme } from '../theme-context'

const classTypes = {
  prv: {
    title: "کلاس‌های خصوصی",
    description: "آموزش شخصی‌سازی شده با توجه به نیازهای فردی شما",
    link: "/classes/private",
    icon: <User className="w-10 h-10 mb-2" />
  },
  group: {
    title: "کلاس‌های گروهی",
    description: "تجربه یادگیری در محیطی مشارکتی و جمعی",
    link: "/classes/group",
    icon: <Users className="w-10 h-10 mb-2" />
  },
  workshops: {
    title: "کارگاه‌ها و مسترکلاس‌ها",
    description: "دوره‌های فشرده و تخصصی برای ارتقای مهارت‌های حرفه‌ای",
    link: "/classes/workshops",
    icon: <Video className="w-10 h-10 mb-2" />
  },
}

export default function ClassTypesPage() {
    const { isDarkMode, toggleDarkMode } = useTheme()

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#2E2E2E' : 'white'
  }, [isDarkMode])

  return (
    <div dir="rtl" className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-[#2E2E2E] text-white' : 'bg-white text-[#2E2E2E]'} font-sans`}>
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2 space-x-reverse">
            <Link href="/">
              <Image 
                src={isDarkMode ? '/logo-light.png' : '/logo-dark.png'}
                alt="Acadomy Logo"
                width={25} 
                height={25} 
              />
            </Link>
            <Link href="/">
              <span className="font-semibold text-xl">آکادومی</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <Link href="/" className={`${isDarkMode ? 'bg-white text-[#2E2E2E]' : 'bg-[#2E2E2E] text-white'} px-4 py-2 rounded-full text-sm hover:bg-gray-400`}>
              خانه
            </Link>
            <button onClick={toggleDarkMode} className={`p-2 rounded-full hover:bg-gray-400 dark:hover:bg-gray-600`}>
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 flex-grow">
        <section className="mb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl mx-auto leading-tight">انواع کلاس‌های آموزشی</h1>
          <p className="text-lg md:text-xl mb-8 mt-8 max-w-2xl mx-auto">
            در آکادومی، ما انواع مختلفی از کلاس‌ها را برای پاسخگویی به نیازهای متنوع یادگیرندگان ارائه می‌دهیم. از کلاس‌های خصوصی برای آموزش شخصی‌سازی شده تا کلاس‌های گروهی برای یادگیری تعاملی و کارگاه‌های تخصصی برای ارتقای مهارت‌های حرفه‌ای، هر فرد می‌تواند روش آموزشی مناسب خود را پیدا کند.
          </p>
        </section>

        <section className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[classTypes.prv , classTypes.group, classTypes.workshops].map((service, index) => (
              <a 
                href={service.link} 
                key={index} 
                className={`w-full md:w-64 h-auto md:h-40 p-4 rounded-lg transition-colors duration-300 hover:bg-gray-500 hover:text-white ${isDarkMode ? 'bg-white text-[#2E2E2E]' : 'bg-[#2E2E2E] text-white'}`}
              >
                <div className="flex flex-col items-center h-full">
                  {service.icon}
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm">{service.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-20 flex justify-center items-center mb-4">
        <a href="https://t.me/Acadomy" className="text-current hover:text-gray-300 mx-1.5" target="_blank" rel="noopener noreferrer">
          <Send className="w-6 h-6 md:w-7 md:h-7" />
        </a>
        <a href="https://www.instagram.com/acadomy.art/?utm_source=ig_web_button_share_sheet" className="text-current hover:text-gray-300 mx-1" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-6 h-6 md:w-7 md:h-7" />
        </a>
        <a href="https://t.me/AcadomySupport" className="text-current hover:text-gray-300 mx-1" target="_blank" rel="noopener noreferrer">
          <HeadphonesIcon className="w-6 h-6 md:w-7 md:h-7" />
        </a>
      </footer>
    </div>
  )
}