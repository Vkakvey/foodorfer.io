import React from 'react'

function Card() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 sm:grid-cols-1 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-3xl px-2 pt-4'>Sun's Out, BOGD's Out</p>
          <p className='px-2'>Throught 8/26</p>
          <button className='border-white font-semibold bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            alt='/'
             src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600"/>

        </div>
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-3xl px-2 pt-4'>Cooked Pizza</p>
          <p className='px-2'>Free Artesanal Pizza</p>
          <button className='border-white font-semibold bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            alt='/'
             src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600"/>

        </div>
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-3xl px-2 pt-4'>Grilled Meats on Skewers</p>
          <p className='px-2'>New Resturant</p>
          <button className='border-white font-semibold bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            alt='/'
             src="https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=600"/>

        </div>
    </div>
  )
}

export default Card