import Image from 'next/image'

import HomeIcon from './icons/home.svg'
import DownloadIcon from './icons/download.svg'
import PremiumIcon from './icons/sparkle.svg'
import GithubIcon from './icons/github.svg'
import DiscordIcon from './icons/discord.svg'
import MenuIcon from './icons/menu.svg'
import CloseIcon from './icons/close.svg'
import PrivacyIcon from './icons/privacy.svg'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import { motion as m, AnimatePresence } from 'framer-motion'

interface NavbarItem {
  title: string
  href: string
  color: string
  icon: any
  defaultShow: boolean
}

const navbarItems: NavbarItem[] = [
  {
    color: '#01342D',
    icon: <HomeIcon />,
    href: '/',
    title: 'Kezdőlap',
    defaultShow: false
  },
  {
    color: '#01342D',
    icon: <DownloadIcon />,
    href: '/downloads',
    title: 'Letöltés',
    defaultShow: false
  },
  {
    color: '#01342D',
    icon: <PremiumIcon />,
    href: '/premium',
    title: 'Premium',
    defaultShow: true
  },
  {
    color: '#01342D',
    icon: <PrivacyIcon />,
    href: '/privacy',
    title: 'Privacy',
    defaultShow: false
  }
]

const connectionItems: NavbarItem[] = [
  {
    color: '#222222',
    icon: <GithubIcon />,
    href: 'https://github.com/filc',
    title: 'GitHub',
    defaultShow: true
  },
  {
    color: '#5865F2',
    icon: <DiscordIcon />,
    href: 'https://filcnaplo.hu/discord',
    title: 'Discord',
    defaultShow: true
  }
]

export default function FilcNavBar () {
  const location = useRouter()
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div className='flex items-center justify-between backdrop-blur-xl p-4 sticky top-0 left-0 z-50 h-20'>
        <div className='noselect flex items-center'>
          <Link href='/'>
            <div style={{ width: 200 }} className='lg:w-auto'>
              <Image
                src='/img/logo.svg'
                alt='logo'
                height={48}
                width={48}
                style={{ borderRadius: 16 }}
              />
            </div>
          </Link>
        </div>
        <div
          className='sm:flex items-center gap-12 hidden'
          style={{ fontSize: 20 }}
        >
          {navbarItems.map(item => {
            return (
              <Link
                className='noselect flex items-center'
                href={item.href}
                key={item.href}
                color='primary'
              >
                <div style={{ marginRight: 10, height: 14 }}>
                  {item.defaultShow ? item.icon : null}
                </div>
                <div
                  style={{
                    fontWeight: location.pathname == item.href ? '800' : '500'
                  }}
                >
                  {item.title}
                </div>
              </Link>
            )
          })}
        </div>
        <div className='sm:hidden flex'>
          <div
            className='cursor-pointer py-2 px-1'
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
        <div className='lg:flex items-center gap-2 hidden'>
          {connectionItems.map(item => {
            return (
              <Link
                className='noselect flex items-center justify-center'
                href={item.href}
                key={item.href}
                style={{
                  background: item.color,
                  color: 'white',
                  padding: '0 16px',
                  borderRadius: '45px',
                  height: 40,
                  fontSize: 14
                }}
                target='_blank'
              >
                <div style={{ marginRight: 12, width: 18 }}>
                  {item.defaultShow ? item.icon : null}
                </div>
                <div
                  style={{
                    fontWeight: 'bold'
                  }}
                >
                  {item.title}
                </div>
              </Link>
            )
          })}
        </div>
        <AnimatePresence>
          {isOpen && (
            <m.div
              className='flex-col gap-1 mt-20 p-2 z-50 absolute top-0 left-0 bg-white backdrop-blur-sm bg-opacity-50 h-screen w-full flex'
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={{
                hidden: {
                  opacity: 0
                },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.2,
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {[...navbarItems, ...connectionItems].map(item => {
                return (
                  <m.div
                    key={item.href}
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 1
                      }
                    }}
                  >
                    <Link
                      color='inherit'
                      className='noselect flex items-center text-white rounded-full px-6 py-2 gap-4 mr-auto'
                      href={item.href}
                      style={{
                        background: item.color,
                        fontWeight:
                          location.pathname == item.href ? '700' : '500'
                      }}
                    >
                      <div style={{ width: 30 }}>
                        <div style={{ height: 20 }}>{item.icon}</div>
                      </div>
                      {item.title}
                    </Link>
                  </m.div>
                )
              })}
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
