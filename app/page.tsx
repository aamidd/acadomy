'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { Moon, Sun } from 'lucide-react'
import Head from 'next/head'
import Link from 'next/link'
import { useTheme } from './theme-context'

export const runtime = "edge"

export default function Component() {
  const { isDarkMode, toggleDarkMode } = useTheme()

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#303030' : '#F0F0F0'
  }, [isDarkMode])

  const content = {
    title: "آکادومی",
    subtitle: "تجربه‌ی موسیقی و هنر در سفری دلچسب و پر از یادگیری",
    about: {
      title: "ما کی هستیم؟",
      des: "ما در تیم آکادومی بر این باوریم که یادگیری هنر، فقط یک مهارت فنی نیست؛ بلکه یک سفره.",
      nxt: "آکادومی هم همسفریه که تلاش می‌کنه مسیر یادگیری و چالش برانگیز موسیقی و هنر رو با پاشنی خلاقیت برای شما  شیرین کنه و عمق و زیبایی اون رو با شما به اشتراک بذاره."
    },
    classes: {
      title: "کلاس‌ها و دوره‌ها",
      des: "به زودی می‌تونید ثبت نام کلاس‌های ساز و وورکشاپ‌ها و دوره‌های چند جلسه‌ای رو از طریق وبسایت آکادومی انجام بدید. این دوره‌های هیجان‌انگیز قراره همه‌ی مباحثی که توی سفرتون برای یادگیری موسیقی و هنر نیاز دارید رو توی یه فضای صمیمی پوشش بدن."
    },
    info: {
      title: "تماس با ما",
      des: "می‌تونید با تیم آکادومی از طریق تلگرام، اینستاگرام و تماس تلفنی در ارتباط باشید تا هیچ دوره و ایونتی رو از دست ندید.",
      phone: "تلفن",
      number: "09116335264",
      telegram: "تلگرام",
      telid: "acadomy",
      insta: "اینستاگرام",
      instaid: "acadomy.art"
    }
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Yekan+Bakh+FaNum:wght@700&display=swap" />
      </Head>
      <div dir="rtl" className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-[#2E2E2E] text-white' : 'bg-white text-[#2E2E2E]'} font-sans`}>
        <header className="fixed bg-white top-0 right-0 left-0 w-full z-50 container mx-auto px-4 py-6">
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
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Link 
                  href="/blog" 
                  className="px-3 py-2 rounded-full transition-colors hover:bg-[#D0D0D0]"
                >
                  بلاگ
                </Link>
                <Link 
                  href="#about" 
                  className="px-3 py-2 rounded-full transition-colors hover:bg-[#D0D0D0]"
                >
                  درباره ما
                </Link>
                <Link 
                  href="#contact" 
                  className="px-3 py-2 rounded-full transition-colors hover:bg-[#D0D0D0]"
                >
                  تماس با ما
                </Link>
              </div>
              <button onClick={toggleDarkMode} className={`p-2 rounded-full hover:bg-[#D0D0D0]`}>
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-12 flex-grow text-center">
          <section className="mb-10 mt-10 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-8xl md:text-9xl font-bold mb-4 max-w-3xl mx-auto leading-tight">{content.title}</h1>
            <p className="text-lg md:text-xl mb-8 mt-4 max-w-4xl mx-auto whitespace-nowrap overflow-hidden text-ellipsis">
              {content.subtitle}
            </p>
            <button className="mb-32 px-10 py-5 text-3xl font-semibold text-white bg-[#303030] rounded-md transition-all duration-300 ease-in-out hover:rounded-full hover:bg-[#303030] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              بلاگ
            </button>
          </section>

        {/* Who Are We Section */}
        <section className="mb-32 text-right" id="about">
          <h2 className="text-[64px] font-bold leading-[99.2px] font-YekanBakhFaNum">{content.about.title}</h2>
          <p className="text-[25px] font-YekanBakhFaNum">{content.about.des}</p>
          <p className="text-[25px] font-YekanBakhFaNum">{content.about.nxt}</p>
        </section>

        {/* Classes Section */}
        <section className="mb-32 text-right">
          <h2 className="text-[64px] font-bold leading-[99.2px] font-YekanBakhFaNum">{content.classes.title}</h2>
          <p className="text-[25px] font-YekanBakhFaNum">{content.classes.des}</p>
        </section>

        {/* Contact Section */}
        <section className="mb-32 text-right" id="contact">
          <h2 className="text-[64px] font-bold leading-[99.2px] font-YekanBakhFaNum">{content.info.title}</h2>
          <p className="text-[25px] font-YekanBakhFaNum mb-6">{content.info.des}</p>

          <div className="max-w-md ml-auto">
            <div className="flex justify-between items-center mb-4 border border-transparent">
              <span className="text-[25px] font-YekanBakhFaNum">{content.info.phone}</span>
              <span className="text-[25px] font-YekanBakhFaNum text-left">{content.info.number}</span>
            </div>

            <div className="flex justify-between items-center mb-4 border border-transparent">
              <span className="text-[25px] font-YekanBakhFaNum">{content.info.telegram}</span>
              <span className="text-[25px] font-YekanBakhFaNum text-left">{content.info.telid}</span>
            </div>

            <div className="flex justify-between items-center border border-transparent">
              <span className="text-[25px] font-YekanBakhFaNum">{content.info.insta}</span>
              <span className="text-[25px] font-YekanBakhFaNum text-left">{content.info.instaid}</span>
            </div>
          </div>
        </section>

        </main>

        <footer className={`mt-20 ${isDarkMode ? 'text-white' : 'text-[#2E2E2E]'}`}>
          <div className="relative flex items-center justify-center py-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-screen border-t-2 border-gray-400"></div>
            </div>
            <div className="relative z-10 px-4">
              <span className={`px-6 text-2xl font-bold ${isDarkMode ? 'bg-[#2E2E2E]' : 'bg-white'}`}>
                آکادومی
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
