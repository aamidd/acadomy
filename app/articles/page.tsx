'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Moon, Sun, Search, Instagram, Send, HeadphonesIcon } from 'lucide-react'
import { useTheme } from '../theme-context'

interface Article {
  id: number
  title: string
  summary: string
  image: string
}

const articles: Article[] = [
  {
    id: 1,
    title: "چگونه بیشتر شبیه عمید شویم؟",
    summary: "صفر تا صد مثل عمید خفن شدن در ده روز!!!!!!",
    image: "/testimage.jpg?height=200&width=300",
  },
  {
    id: 2,
    title: "دایره لغت سوسکی",
    summary: "یه آموزش سوسکی",
    image: "/testimage.jpg?height=200&width=300",
  }
]

export default function ArticlesPage() {
  const { isDarkMode, toggleDarkMode } = useTheme()
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#2E2E2E' : 'white'
  }, [isDarkMode])

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl mx-auto leading-tight">محتوای تکمیلی آکادومی</h1>
        </section>

        <div className="mb-8 relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="جستجو در مقالات..."
            className={`w-full px-4 py-2 pr-10 rounded-full border ${isDarkMode ? 'bg-white text-[#2E2E2E] border-white' : 'bg-[#2E2E2E] text-white border-[#2E2E2E]'} focus:outline-none focus:ring-2 focus:ring-gray-400`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-[#2E2E2E]' : 'text-white'}`} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link href={`/articles/${article.id}`} key={article.id}>
              <div className={`rounded-lg overflow-hidden transition-colors duration-300 hover:bg-gray-500 hover:text-white ${isDarkMode ? 'bg-white text-[#2E2E2E]' : 'bg-[#2E2E2E] text-white'}`}>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                  <p className="text-sm mb-4">{article.summary}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
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