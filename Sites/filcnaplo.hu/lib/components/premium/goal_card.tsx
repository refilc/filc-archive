interface GoalProps {
  progress: number
  goal: number
}

export default function GoalCard ({ progress, goal }: GoalProps) {
  return (
    <>
      <div
        className='flex flex-col gap-2 border border-solid rounded-2xl px-4 py-3 md:w-80 w-full my-4'
        style={{ borderColor: '#01342D', background: '#F8FEFD' }}
      >
        <span>{`Cél: ${goal} támogató`}</span>
        <div
          className='flex justify-start items-center border border-solid rounded-full'
          style={{
            borderColor: '#01342D',
            background: '#E5FBF7',
            padding: '1px'
          }}
        >
          <div
            className='rounded-full'
            style={{
              height: 12,
              width: `${progress}%`,
              background: '#01342D'
            }}
          />
        </div>
      </div>
    </>
  )
}
