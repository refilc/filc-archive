export interface PremiumPerk {
  icon: string
  name: string
  highlighted: boolean
}

export interface PlanProps {
  icon: any
  price: number
  title: any
  description: string
  sponsorUrl: string
  gradient: string
  perks: PremiumPerk[]
}

export default function PlanCard ({
  price,
  icon,
  title,
  description,
  sponsorUrl,
  gradient,
  perks
}: PlanProps) {
  return (
    <>
      <div
        className='flex flex-col gap-1 md:w-96 w-full p-6 rounded-2xl border'
        style={{
          background: '#F8FEFD',
          borderColor: '#01342D'
        }}
      >
        <div className='flex justify-between'>
          <div>
            <div className='w-10 mb-2'>{icon}</div>
            <div className='text-2xl font-bold'>{title}</div>
          </div>
          <div>
            <span className='text-xl font-bold'>{`\$${price} / hó`}</span>
          </div>
        </div>
        <span>{description}</span>
        <div className='flex flex-col my-2 gap-1'>
          {perks.map((perk: PremiumPerk) => {
            return (
              <div className='flex gap-4' key={perk.name}>
                <span>{perk.icon}</span>
                <span
                  className={`${
                    perk.highlighted ? 'font-bold' : 'font-medium'
                  }`}
                >
                  {perk.name}
                </span>
              </div>
            )
          })}
        </div>
        <div className='noselect text-white flex justify-center items-center mt-3'>
          <div
            className='px-6 py-2 rounded-full font-bold cursor-pointer'
            style={{ background: gradient }}
            onClick={() => window.open(sponsorUrl, '_blank')}
          >
            <span>Kiválasztás</span>
          </div>
        </div>
      </div>
    </>
  )
}
