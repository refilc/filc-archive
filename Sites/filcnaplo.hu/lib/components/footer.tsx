import DiscordIcon from './icons/discord.svg'
import InstagramIcon from './icons/instagram.svg'
import GithubIcon from './icons/github.svg'
import Image from 'next/image'

const connections: any[][] = [
  [
    'https://instagram.com/filc_club',
    'Instagram',
    <InstagramIcon key='instagram' />
  ],
  ['https://github.com/filc', 'Github', <GithubIcon key='github' />],
  ['https://filcnaplo.hu/discord', 'Discord', <DiscordIcon key='discord' />]
]

export default function Footer () {
  return (
    <>
      <div
        className='flex w-screen flex-col justify-end mt-32 p-12 sm:h-64 gap-4'
        style={{
          background: 'linear-gradient(180deg, #0B5342 0%, #01342D 100%)'
        }}
      >
        <div className='flex items-center gap-6'>
          <div className='lg:w-auto'>
            <Image
              src='/img/logo.svg'
              alt='logo'
              height={48}
              width={48}
              style={{ borderRadius: 16 }}
            />
          </div>
          <span
            className='font-bold text-2xl sm:text-4xl'
            style={{ color: '#E8FFFB' }}
          >
            Filc Napló
          </span>
        </div>
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
          <span className='text-gray-300 text-center sm:text-left'>
            Website design made by Xou, Copyright {new Date().getFullYear()}{' '}
            Filc Napló
          </span>
          <div className='flex'>
            {connections.map((e: any[]) => {
              return (
                <div
                  className='px-4 py-2 ml-2 rounded-full h-8'
                  style={{
                    background: '#C5F5EC'
                  }}
                  key={e[0]}
                  onClick={() => window.open(e[0], '_blank')}
                >
                  <div className='h-full'>{e[2]}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
