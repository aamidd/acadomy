'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Moon, Sun, Instagram, Send, HeadphonesIcon } from 'lucide-react'
import { useTheme } from '@/app/theme-context'

interface ClassOption {
  id: string
  name: string
  price: number
}

const classOptions: ClassOption[] = [
  { id: 'private', name: 'کلاس خصوصی', price: 500000 },
  { id: 'group', name: 'کلاس گروهی', price: 300000 },
  { id: 'workshop', name: 'کارگاه و مسترکلاس', price: 800000 },
]

export default function RegistrationForm() {
  const { isDarkMode, toggleDarkMode } = useTheme()
  const [selectedClass, setSelectedClass] = useState<ClassOption>(classOptions[0])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    musicBackground: '',
    preferredTimes: '',
  })

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#2E2E2E' : 'white'
  }, [isDarkMode])

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = classOptions.find(option => option.id === e.target.value)
    setSelectedClass(selected || classOptions[0])
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { ...formData, selectedClass })
    alert('ثبت‌نام شما با موفقیت انجام شد. طی ۲۴ ساعت آینده با شما تماس خواهیم گرفت.')
  }

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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl mx-auto leading-tight">فرم ثبت‌نام در کلاس‌های آکادومی</h1>
          <p className="text-lg md:text-xl mb-8 mt-8 max-w-2xl mx-auto">
            با تکمیل این فرم، شما درخواست ثبت‌نام خود را برای ما ارسال می‌کنید. پس از دریافت اطلاعات شما، تیم پشتیبانی ما طی ۲۴ ساعت آینده با شما تماس خواهد گرفت تا جزئیات بیشتر را بررسی کرده و فرآیند ثبت‌نام را نهایی کند.
          </p>
        </section>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="mb-6">
            <label htmlFor="classType" className="block mb-2 font-semibold">نوع کلاس:</label>
            <select
              id="classType"
              className={`w-full px-3 py-2 rounded-md ${isDarkMode ? 'bg-white text-[#2E2E2E]' : 'bg-[#2E2E2E] text-white'}`}
              onChange={handleClassChange}
              value={selectedClass.id}
              required
            >
              {classOptions.map(option => (
                <option key={option.id} value={option.id}>{option.name}</option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold">قیمت کلاس:</label>
            <input
              type="text"
              value={`${selectedClass.price.toLocaleString()} تومان`}
              className={`w-full px-3 py-2 rounded-md ${isDarkMode ? 'bg-white text-[#2E2E2E]' : 'bg-[#2E2E2E] text-white'}`}
              readOnly
            />
          </div>

          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-semibold">نام و نام خانوادگی:</label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full px-3 py-2 rounded-md ${isDarkMode ? 'bg-white text-[#2E2E2E]' : 'bg-[#2E2E2E] text-white'}`}
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="age" className="block mb-2 font-semibold">سن:</label>
            <input
              type="text"
              id="age"
              name="age"
              className={`w-full px-3 py-2 rounded-md ${isDarkMode ? 'bg-white text-[#2E2E2E]' : 'bg-[#2E2E2E] text-white'}`}
              required
              onChange={handleInputChange}
              pattern="\d*"
              inputMode="numeric"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-semibold">ایمیل:</label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full px-3 py-2 rounded-md ${isDarkMode ? 'bg-white text-[#2E2E2E]' : 'bg-[#2E2E2E] text-white'}`}
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 font-semibold">شماره تماس:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`w-full px-3 py-2 rounded-md ${isDarkMode ? 'bg-white text-[#2E2E2E]' : 'bg-[#2E2E2E] text-white'}`}
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="musicBackground" className="block mb-2 font-semibold">سابقه شما در موسیقی:</label>
            <textarea
              id="musicBackground"
              name="musicBackground"
              rows={4}
              className={`w-full px-3 py-2 rounded-md ${isDarkMode ? 'bg-white text-[#2E2E2E]' : 'bg-[#2E2E2E] text-white'}`}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="mb-6">
            <label htmlFor="preferredTimes" className="block mb-2 font-semibold">زمان‌های ترجیحی:</label>
            <input
              type="text"
              id="preferredTimes"
              name="preferredTimes"
              className={`w-full px-3 py-2 rounded-md ${isDarkMode ? 'bg-white text-[#2E2E2E]' : 'bg-[#2E2E2E] text-white'}`}
              placeholder="مثال: عصرها یا آخر هفته‌ها"
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className={`w-full font-bold py-2 px-4 rounded-full transition duration-300 ${isDarkMode ? 'bg-white text-[#2E2E2E] hover:bg-gray-300' : 'bg-[#2E2E2E] text-white hover:bg-gray-700'}`}
          >
            ثبت‌نام
          </button>
        </form>
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