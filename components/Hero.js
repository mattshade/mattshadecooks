import Image from 'next/image'
import styles from './hero.module.css'

export default function Hero(hero) {
  return (
    <>
       <Image
        className="hero"
        src={hero.hero}
        width={hero.width}
        height={hero.height}
        alt={hero.alt}
        style={{ width: '100%', height: 'auto' }}
      />
    </>
  )
}