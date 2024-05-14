import { GetStaticProps } from 'next'
import FilcNavBar from 'lib/components/navbar'
import Head from 'next/head'
import DownloadIcon from '../lib/components/icons/download.svg'
import AppleIcon from '../lib/components/icons/apple.svg'
import { motion as m } from 'framer-motion'
import LatestReleaseCard from 'lib/components/downloads/latest_release'
import ReleaseCard from 'lib/components/downloads/release'
import Footer from 'lib/components/footer'

interface DownloadsProps {
  releases: any[]
}

export default function Downloads ({ releases }: DownloadsProps) {
  return (
    <>
      <Head>
        <title>Letöltések</title>
      </Head>
      <FilcNavBar />
      <div
        style={{
          background: 'linear-gradient(#FFFFFF00, #0DE3B533 100vh, #0DE3B533)'
        }}
        className='h-full'
      >
        <div className='flex flex-col'>
          <div className='flex justify-center w-full px-4 lg:px-0 lg:w-4/5 m-auto gap-16'>
            <m.div
              className='flex flex-col gap-8'
              initial='hidden'
              animate='visible'
              variants={{
                hidden: {
                  opacity: 0
                },
                visible: {
                  opacity: 1
                }
              }}
            >
              <div className='flex flex-col h-auto lg:h-screen items-start justify-center gap-4 lg:gap-8 mt-4 lg:-mt-20 lg:-mb-44'>
                <h1
                  className='text-5xl lg:text-7xl font-extrabold'
                  style={{ lineHeight: 1 }}
                >
                  Szerezd meg a Filcet
                </h1>
                <div className='flex gap-2'>
                  <div
                    className='noselect flex items-center px-8 py-2 rounded-2xl text-xl font-bold text-white cursor-pointer shadow-md'
                    style={{
                      background: '#278076'
                    }}
                    onClick={() =>
                      window.open('https://testflight.apple.com/join/AIEKpVYq')
                    }
                  >
                    <div style={{ height: 24, marginRight: 12 }}>
                      <AppleIcon />
                    </div>
                    <span>iOS</span>
                  </div>
                  <div
                    className='noselect flex items-center px-8 py-2 rounded-2xl text-xl font-bold text-white cursor-pointer shadow-md'
                    style={{
                      background: '#278076'
                    }}
                    onClick={() =>
                      window.open(
                        releases[0].assets[0].browser_download_url,
                        '_blank'
                      )
                    }
                  >
                    <div style={{ height: 24, marginRight: 12 }}>
                      <DownloadIcon />
                    </div>
                    <span>APK</span>
                  </div>
                </div>
              </div>
              <div className='block lg:hidden'>
                <LatestReleaseCard latest={releases[0]} />
              </div>
              <div>
                <span className='font-bold'>Régebbi verziók</span>
                <div>
                  {releases.slice(1).map((release: any) => {
                    return (
                      <ReleaseCard release={release} key={release.tag_name} />
                    )
                  })}
                </div>
              </div>
            </m.div>
            <m.div
              className='hidden h-screen lg:flex flex-col justify-center items-start -mt-20 sticky right-0 top-0'
              style={{ width: '50%' }}
              initial='hidden'
              animate='visible'
              variants={{
                hidden: {
                  opacity: 0
                },
                visible: {
                  opacity: 1
                }
              }}
            >
              <LatestReleaseCard latest={releases[0]} />
            </m.div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const releaseRes = await fetch(
    'https://api.github.com/repos/filc/naplo/releases'
  )

  const releases = await releaseRes.json()

  return {
    props: {
      releases
    }
  }
}
