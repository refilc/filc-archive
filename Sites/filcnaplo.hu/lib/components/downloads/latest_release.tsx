import ReactMarkdown from 'react-markdown'
import StarIcon from '../icons/star.svg'
import DownloadIcon from '../icons/download.svg'
import GithubIcon from '../icons/github.svg'

export default function LatestReleaseCard ({ latest }: any) {
  return (
    <div
      className='flex flex-col p-8 shadow-lg w-full'
      style={{
        background: 'linear-gradient(#FFFFFF, #E9FEFA)',
        borderRadius: 24
      }}
    >
      <div
        className='flex items-center gap-2 px-3 py-1 mr-auto'
        style={{ background: '#00E8C855', borderRadius: 45 }}
      >
        <div style={{ height: 20 }}>
          <StarIcon />
        </div>
        Legújabb verzió
      </div>
      <b className='text-4xl mt-4'>{latest.name}</b>
      <div className='flex items-center gap-4'>
        <div>{new Date(latest.published_at).toLocaleDateString('hu-HU')}</div>
        <div className='flex items-center gap-2'>
          <div style={{ height: 16 }}>
            <DownloadIcon />
          </div>
          {latest.assets ? latest.assets[0].download_count : '0'}
        </div>
      </div>
      <ReactMarkdown className='mt-6'>{latest.body}</ReactMarkdown>
      <div className='flex gap-4 mt-4 -mb-1 justify-start'>
        <div
          className='noselect flex items-center font-semibold cursor-pointer border border-solid px-4 py-2 rounded-xl'
          style={{ borderColor: '#01342D' }}
          onClick={() => window.open(latest.html_url, '_blank')}
        >
          <div style={{ width: 16, marginRight: 12 }}>
            <GithubIcon />
          </div>
          GitHub
        </div>
      </div>
    </div>
  )
}
