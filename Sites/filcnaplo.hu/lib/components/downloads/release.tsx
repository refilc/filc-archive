import DownloadIcon from '../icons/download.svg'
import GithubIcon from '../icons/github.svg'

export default function ReleaseCard ({ release }: any) {
  return (
    <div
      className='px-6 py-3 mt-2 flex items-center justify-between rounded-2xl shadow-md lg:w-3/4 w-full'
      style={{ background: '#F1FFFF' }}
      key={release.tag_name}
    >
      <div className='flex-col flex'>
        <span className='font-bold'>{release.name}</span>
        <div className='flex gap-4'>
          <div className='block'>
            {new Date(release.published_at).toLocaleDateString('hu-HU')}
          </div>
          <div className='flex items-center gap-2'>
            <div style={{ height: 16 }}>
              <DownloadIcon />
            </div>
            {release.assets ? release.assets[0].download_count : '0'}
          </div>
        </div>
      </div>
      <div className='flex gap-2 items-center h-8'>
        <div
          className='noselect rounded-xl px-4 py-2 border border-solid cursor-pointer hidden md:block'
          style={{ color: '#222', borderColor: '#222' }}
          onClick={() => window.open(release.html_url, '_blank')}
        >
          <div className='w-5 h-5'>
            <GithubIcon />
          </div>
        </div>
        <div
          className='noselect rounded-xl px-4 py-2 cursor-pointer'
          style={{ background: '#01342D', color: '#fff' }}
          onClick={() =>
            window.open(release.assets[0].browser_download_url, '_blank')
          }
        >
          <div className='w-5 h-5'>
            <DownloadIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
