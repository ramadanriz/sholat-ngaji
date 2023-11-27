import Hero from "../fragments/Hero"

const HomePage = () => {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-content text-center'>
        <div className='max-w-xl'>
          <Hero />
        </div>
      </div>
    </div>
  )
}

export default HomePage
