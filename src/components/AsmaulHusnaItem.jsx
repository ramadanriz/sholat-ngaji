const AsmaulHusnaItem = (data) => {
  return (
    <div className='flex flex-col items-start justify-center overflow-hidden rounded-sm bg-base-300 border-2 border-neutral p-4 text-start tracking-wide'>
      <h3 className='text-xl font-bold'>{data.urutan}</h3>
      <div className='my-3 w-full text-right'>
        <p className='text-3xl font-medium font-arab'>{data.arab}</p>
      </div>
      <p className='text-lg font-bold'>{data.latin}</p>
      <p>{data.arti}</p>
    </div>
  )
}

export default AsmaulHusnaItem
