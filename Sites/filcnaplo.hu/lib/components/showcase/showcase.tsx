import Image from 'next/image'

interface ShowcaseProps {
  title: any
  description: string
  asset?: string
  customAsset?: any
  arrangement: 'left' | 'right'
}

export default function ShowcaseSlide ({
  title,
  description,
  asset,
  customAsset,
  arrangement
}: ShowcaseProps) {
  return (
    <div
      className={`flex flex-col ${
        arrangement == 'right' ? 'md:flex-row-reverse' : ''
      } md:flex-row justify-center items-center md:h-screen md:max-w-4xl m-auto py-24 gap-12 px-4`}
    >
      {(asset && (
        <Image
          alt='Kollaborációs Tér'
          width={500}
          height={500}
          className='md:h-full md:max-w-sm'
          src={`/img/showcase/assets/${asset}.svg`}
        />
      )) ??
        customAsset}

      <div className='flex flex-col gap-2 md:w-3/5'>
        <h2 className='font-bold text-2xl md:text-4xl'>{title}</h2>
        <p className='font-medium text-xl md:text-2xl'>{description}</p>
      </div>
    </div>
  )
}
