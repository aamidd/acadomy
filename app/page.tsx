'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { Moon, Sun, Instagram, Send, HeadphonesIcon } from 'lucide-react'
import Head from 'next/head'
import Link from 'next/link'
import { useTheme } from './theme-context'

export const runtime = "edge"

export default function Component() {
  const { isDarkMode, toggleDarkMode } = useTheme()

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#2E2E2E' : 'white'
  }, [isDarkMode])

  const content = {
    title: "فضای آنلاین آکادومی",
    subtitle: "در فضای آنلاین آکادومی، ما شما را همراهی می‌کنیم تا سفری دلچسب و پر از یادگیری در دنیای موسیقی و هنر تجربه کنید.",
    courses: {
      title: "کلاس های آکادومی",
      description: "شامل کلاس های خصوصی ساز و دوره های چند جلسه ای موسیقی",
      link: "/classes"
    },
    sub: {
      title: "اشتراک آکادومی",
      description: "دسترسی به تمامی کلاس های هفتگی و دوره های آکادومی به همراه مشاوره هنری خصوصی",
      link: "/subscription"
    },
    sup: {
      title: "محتوای تکمیلی آکادومی",
      description: "شامل ویدیوها و مقالات آموزشی پژوهشی در زمینه هنر",
      link: "/articles"
    }
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div dir="rtl" className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-[#2E2E2E] text-white' : 'bg-white text-[#2E2E2E]'} font-sans`}>
        <header className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2 space-x-reverse">
              <a href="/">
                <Image 
                  src={isDarkMode ? '/logo-light.png' : '/logo-dark.png'}
                  alt="Acadomy Logo"
                  width={25} 
                  height={25} 
                />
              </a>
              <a href="/">
              <span className="font-semibold text-xl">آکادومی</span>
              </a>
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

        <main className="container mx-auto px-4 py-12 flex-grow text-center">
          <section className="mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl mx-auto leading-tight">{content.title}</h1>
            <p className="text-lg md:text-xl mb-8 mt-8 max-w-2xl mx-auto">
              {content.subtitle}
            </p>
          </section>

          <section className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[content.courses, content.sub, content.sup].map((service, index) => (
                <a 
                  href={service.link} 
                  key={index} 
                  className={`w-full md:w-64 h-auto md:h-40 p-4 rounded-lg transition-colors duration-300 hover:bg-gray-500 hover:text-white ${isDarkMode ? 'bg-white text-[#2E2E2E]' : 'bg-[#2E2E2E] text-white'}`}
                >
                  <div className="text-right">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className={`mt-4 md:${index === 1 ? 'mt-4' : 'mt-6'}`}>{service.description}</p>
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
    </>
  )
}