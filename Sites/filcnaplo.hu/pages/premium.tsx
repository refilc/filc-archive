import Footer from 'lib/components/footer'
import FilcNavBar from 'lib/components/navbar'
import GoalCard from 'lib/components/premium/goal_card'
import PlanCard, { PremiumPerk } from 'lib/components/premium/plan_card'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import KupakIcon from '../lib/components/icons/kupak.svg'
import TintaIcon from '../lib/components/icons/tinta.svg'

const kupakPerksPrimary: PremiumPerk[] = [
  { icon: '👤', name: 'Profil személyre szabás', highlighted: true },
  { icon: '🖌️', name: 'Téma+', highlighted: true },
  { icon: '📈', name: 'Részletes jegy statisztika', highlighted: true },
  { icon: '🔣', name: 'Válassz ikon témát', highlighted: true }
]
const kupakPerksSecondary: PremiumPerk[] = [
  {
    icon: '✨',
    name: 'Prémium rang és csevegő a discord szerverünkön',
    highlighted: false
  },
  { icon: '📬', name: 'Elsőbbségi segítségnyújtás', highlighted: false }
]
const tintaPerksPrimary: PremiumPerk[] = [
  ...kupakPerksPrimary,
  { icon: '🗓️', name: 'Heti órarend nézet', highlighted: true },
  { icon: '📲', name: 'Órarend Widget', highlighted: true },
  { icon: '🚩', name: 'Cél követés', highlighted: true },
  { icon: '🖥️', name: 'Asztali alkalmazás', highlighted: true }
]
const tintaPerksSecondary: PremiumPerk[] = [
  ...kupakPerksSecondary,
  { icon: '🕐', name: 'Korai hozzáférés új verziókhoz', highlighted: false }
]

export default function Downloads ({ sponsors }: any) {
  return (
    <>
      <Head>
        <title>Filc Premium</title>
      </Head>
      <div
        className='h-full min-h-screen'
        style={{
          background:
            'radial-gradient(81.09% 35.83% at 100% 0%, rgba(227, 13, 218, 0.23) 0%, rgba(35, 231, 211, 0.22) 25.08%, rgba(52, 204, 94, 0.14) 42.24%, rgba(227, 190, 18, 0.08) 75.41%, rgba(255, 255, 255, 0.04) 100%), linear-gradient(#FFFFFF00, #0DE3B533 100vh, #0DE3B533), #DEFAF4'
        }}
      >
        <FilcNavBar />
        <div className='mt-12 flex flex-col items-center justify-center h-full'>
          <div className='flex flex-col md:gap-4 items-center justify-center'>
            <h1 className='md:text-7xl text-3xl font-extrabold'>
              Filc, csak több.
            </h1>
            <h1
              className='md:text-8xl text-4xl font-extrabold'
              style={{
                background:
                  'linear-gradient(90.15deg, #E3BE12 6.06%, #15CF6C 38.43%, #1EC8BC 69.89%, #B31BDF 94.38%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Filc Prémium.
            </h1>
          </div>
          <div className='my-6 flex justify-center items-center w-full px-4 sm:px-12 md:px-4'>
            <GoalCard goal={sponsors.target} progress={sponsors.percentage} />
          </div>
          <div className='flex flex-col md:flex-row w-full justify-center items-start px-4 sm:px-12 md:px-4 gap-12'>
            <PlanCard
              icon={<KupakIcon />}
              price={2}
              title={
                <span
                  style={{
                    background:
                      'linear-gradient(90deg, #F0BD0C 0%, #0CD070 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Kupak
                </span>
              }
              description={
                'Szabd személyre a filcet és láss részletesebb statisztikákat.'
              }
              gradient={'linear-gradient(90deg, #F0BD0C 0%, #0CD070 100%)'}
              sponsorUrl={
                'https://github.com/sponsors/filc/sponsorships?tier_id=238453&preview=false'
              }
              perks={[...kupakPerksPrimary, ...kupakPerksSecondary]}
            />
            <PlanCard
              icon={<TintaIcon />}
              price={5}
              title={
                <span
                  style={{
                    background:
                      'linear-gradient(90deg, #B816E0 0%, #17D1BB 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Tinta
                </span>
              }
              description={
                'Kényelmesebb órarend, asztali alkalmazás és célok kitűzése.'
              }
              gradient={'linear-gradient(90deg, #B816E0 0%, #17D1BB 100%)'}
              sponsorUrl={
                'https://github.com/sponsors/filc/sponsorships?tier_id=238454&preview=false'
              }
              perks={[...tintaPerksPrimary, ...tintaPerksSecondary]}
            />
          </div>
          {/* <h1 className="text-2xl font-bold my-12">
            Támogass minket, és szerezz jutalmakat!
          </h1>
          <div className="grid grid-cols-2 auto-rows-fr grid-flow-dense">
            <img src="/img/premium/kupak_1.svg" />
            <img src="/img/premium/kupak_2.svg" />
            <img src="/img/premium/kupak_3.svg" />
            <img src="/img/premium/tinta_1.svg" />
            <img src="/img/premium/tinta_2.svg" />
            <img src="/img/premium/tinta_3.svg" />
            <img src="/img/premium/tinta_4.svg" />
          </div> */}
          <Footer />
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const sponsorsRes = await fetch('https://api.filcnaplo.hu/sponsors')

  const sponsors = await sponsorsRes.json()

  return {
    props: {
      sponsors
    }
  }
}
