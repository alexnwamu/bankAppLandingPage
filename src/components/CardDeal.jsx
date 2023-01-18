import React from 'react'
import styles,{layout} from '../style'
import { card } from '../assets'
import Button from './Button'
const CardDeal = () => {
  return (
 <section className={layout.section}>
  <div className = {layout.sectionInfo}>
    <h2 className={`${styles.heading2} max-w-[570px]`}>Find a better card deal in few easy steps.</h2>
    <p className={`${styles.paragraph} max-w-[570px] mt-5`}>Arcu tortor purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
    <Button styles={`mt-[48px]`} />
  </div>
  <div className={layout.sectionImg}>
    <img src={card} alt="card" className='w-full h-full' />
  </div>
 </section>
  )
}

export default CardDeal