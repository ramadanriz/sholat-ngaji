import Time from "../components/Time"
import { hours } from "../utils/constant"

const Hero = () => {
  return (
    <>
      <h1 className='text-5xl font-bold'>{`Selamat ${hours >= 12 && hours < 15 ? "Siang" : hours >= 15 && hours < 18 ? "Sore" : hours >= 18 && hours < 24 ? "Malam" : "Pagi"}`}</h1>
      <p className='py-6'>
        &quot;Dan apabila Kami berikan kesenangan kepada manusia, niscaya dia berpaling dan menjauhkan diri dengan sombong; dan apabila dia ditimpa kesusahan, niscaya dia berputus asa.&quot;
        <br />
        Al-Isra&apos; ayat 83
      </p>
      <Time />
    </>
  )
}

export default Hero
