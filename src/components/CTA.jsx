import React from 'react'
import Button from './Button'
import styles ,{layout} from '../style'
const CTA = () => {
  return (
    <section className={` ${styles.flexCenter} ${styles.padding} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className={`flex-1 flex flex-col`}>
        <h2 className={`${styles.heading2 } max-w-[670px]`}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} leading-[28px] max-w-[445px] mt-5`} >Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}><Button/>
      </div>
    </section>
  )
}

export default CTA