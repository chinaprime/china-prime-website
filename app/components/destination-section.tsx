'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Destination = {
  categories?: string[]
  title: string
  subtitle: string
  image: string
  imageClassName?: string
  href?: string
}

type DestinationSectionProps = {
  tabs: string[]
  destinations: Destination[]
}

function ArrowButton({
  direction,
  disabled,
  onClick,
}: {
  direction: 'left' | 'right'
  disabled: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-label={direction === 'left' ? 'เลื่อนซ้าย' : 'เลื่อนขวา'}
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE6F3] bg-white/96 text-[#0B4EA2] shadow-[0_10px_24px_rgba(15,23,42,0.08)] backdrop-blur-sm transition xl:flex ${
        direction === 'left' ? 'left-[-8px]' : 'right-[-8px]'
      } ${disabled ? 'pointer-events-none opacity-35' : 'hover:-translate-y-[52%] hover:border-[#C7D7EC] hover:shadow-[0_14px_28px_rgba(15,23,42,0.12)]'}`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.3">
        {direction === 'left' ? (
          <path d="m15 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  )
}

export default function DestinationSection({ tabs, destinations }: DestinationSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState(tabs[0] ?? "ทั้งหมด")
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const visibleDestinations = destinations.filter(
    (destination) => activeTab === "ทั้งหมด" || destination.categories?.includes(activeTab),
  )

  useEffect(() => {
    const node = scrollRef.current

    if (!node) {
      return
    }

    const updateScrollState = () => {
      const maxScrollLeft = node.scrollWidth - node.clientWidth
      setCanScrollLeft(node.scrollLeft > 4)
      setCanScrollRight(node.scrollLeft < maxScrollLeft - 4)
    }

    node.scrollTo({ left: 0 })
    updateScrollState()
    node.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)

    return () => {
      node.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [activeTab])

  const handleScroll = (direction: 'left' | 'right') => {
    const node = scrollRef.current

    if (!node) {
      return
    }

    const amount = Math.min(720, node.clientWidth * 0.92)

    node.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section id="destinations" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[40px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(246,243,238,0.96)_100%)] px-5 py-10 shadow-[0_24px_58px_rgba(12,25,43,0.08)] sm:px-8 lg:px-10 lg:py-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(15,76,129,0.14),transparent_62%)]" />
        <div className="pointer-events-none absolute left-[-8%] top-20 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(195,161,108,0.14),transparent_68%)] blur-2xl" />
        <div className="pointer-events-none absolute right-[-4%] top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(123,195,212,0.14),transparent_70%)] blur-2xl" />

        <div className="relative text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#8f7348]">Popular Destinations</p>
          <h2 className="mt-3 text-[2.1rem] font-extrabold tracking-[-0.05em] text-[#10263d] md:text-[2.7rem]">
            เมืองน่าเที่ยวของจีน
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-7 text-[#5f7084] md:text-[15px]">
            เลือกเมืองยอดฮิตของจีน แล้วเริ่มดูเส้นทางที่เหมาะกับสไตล์เที่ยวของคุณได้ทันที
          </p>
        </div>

        <div className="relative mt-7 flex flex-wrap justify-center gap-2.5 md:gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4.5 py-2.5 text-[13px] font-semibold transition ${
                activeTab === tab
                  ? 'bg-[linear-gradient(135deg,#103b63,#184f84)] text-white shadow-[0_14px_28px_rgba(16,59,99,0.18)]'
                  : 'border border-white/75 bg-[rgba(255,255,255,0.9)] text-[#5A6D86] shadow-[0_8px_18px_rgba(15,23,42,0.04)] hover:border-[#ead9ba] hover:bg-white hover:text-[#0f4c81]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative mt-8">
          <ArrowButton direction="left" disabled={!canScrollLeft} onClick={() => handleScroll('left')} />
          <ArrowButton direction="right" disabled={!canScrollRight} onClick={() => handleScroll('right')} />

          <div
            ref={scrollRef}
            className="overflow-x-auto px-0 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex min-w-max gap-4 pr-6">
              {visibleDestinations.map((destination) => (
                <Link
                  key={destination.title}
                  href={destination.href ?? '/join-tours'}
                  className="group block w-[204px] shrink-0 overflow-hidden rounded-[24px] border border-white/80 bg-white/94 shadow-[0_18px_34px_rgba(15,23,42,0.07)] transition hover:-translate-y-1.5 hover:shadow-[0_26px_46px_rgba(12,25,43,0.12)] md:w-[220px]"
                >
                  <div className="relative h-[152px] overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={destination.title}
                      fill
                      sizes="220px"
                      className={`object-cover transition duration-500 group-hover:scale-[1.04] ${destination.imageClassName ?? 'object-center'}`}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,30,66,0.06)_0%,rgba(9,30,66,0.32)_100%)]" />
                    <div className="absolute left-3 top-3 inline-flex rounded-full bg-white/88 px-2.5 py-1 text-[11px] font-semibold text-[#8f7348] backdrop-blur-sm">
                      เมืองยอดฮิต
                    </div>
                  </div>
                  <div className="min-h-[100px] p-4">
                    <h3 className="text-[1.12rem] font-extrabold tracking-[-0.035em] text-[#103b63]">
                      {destination.title}
                    </h3>
                    <p className="mt-1.5 text-[0.82rem] leading-5 text-[#6B7C93]">{destination.subtitle}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {(destination.categories ?? []).slice(0, 2).map((category) => (
                        <span key={category} className="rounded-full bg-[#F6F1E7] px-2.5 py-1 text-[10px] font-semibold text-[#8a6f48]">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
