import React from 'react'
import styles from '../style'
import {discount, robot} from '../assets'
import { stats } from '../constants'

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((el, index)=>(
      <div className={`flex-1 flex justify-center items-center flex-row m-3`} key={el.id}>
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">{el.value}</h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">{el.title}</p>
      </div>
    ))}
  </section>
)


export default Stats