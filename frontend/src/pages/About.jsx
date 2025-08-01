import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="About us" className='w-full md:max-w-[450px] ' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius obcaecati, aspernatur ullam iste sequi commodi fugit repudiandae, iusto veniam labore dignissimos molestias vitae neque dolor cupiditate consectetur dolore quibusdam pariatur?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda reprehenderit officiis illo itaque quia, expedita perspiciatis rerum laudantium labore nesciunt saepe, repellendus sint facere corporis error? Rem, suscipit fugiat!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora reiciendis quidem ex quam sed. Explicabo, tempora dolores ex rem voluptatum est sed veniam perspiciatis facilis obcaecati cum autem maxime nisi?</p>
        </div>
      </div>
      <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestiae, animi voluptatibus saepe libero beatae quo fugiat assumenda ullam, cum, iste quia? Consectetur voluptates laborum placeat quasi odit cum perspiciatis!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestiae, animi voluptatibus saepe libero beatae quo fugiat assumenda ullam, cum, iste quia? Consectetur voluptates laborum placeat quasi odit cum perspiciatis!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptiona; Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestiae, animi voluptatibus saepe libero beatae quo fugiat assumenda ullam, cum, iste quia? Consectetur voluptates laborum placeat quasi odit cum perspiciatis!</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
