import React, { useState, useEffect } from 'react'

const Carousel = () => {
  let [index, setIndex] = useState(0);
  const images = [{
    title: 'City1',
      url: 'https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/04/mejores-lugares-turisticos-1.jpg',
      city:'isla de Honshu',
      country:'Japan'
  },
  {
    title: 'City2',
    url: 'https://www.costacruceros.com/content/dam/costa/costa-magazine/article-images/what-to-see-in-argentina/argentina-buenos-aires_2.jpg.image.694.390.low.jpg',
    city:'Buenos Aires',
    country:'Argentina'
  },
{
  title: 'City3',
  url: 'https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/04/mejores-sitios-turisticos-1.jpg',
  city:'Bahía de Ha-Long de Vietnam',
  country:'Asia'
},
{
  title: 'City4',
  url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/6d/45/da/dinning-area.jpg?w=600&h=400&s=1',
  city:'Lamu',
  country:'Kenya'
},
{
  title: 'City5',
  url: 'https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/04/Mejores-sitios-tur%C3%ADsticos.jpg',
  city:'Bora Bora',
  country:'French Polynesia'
},
{
  title: 'City6',
  url: 'https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/03/Lugares-tur%C3%ADsticos.jpg',
  city:'San Francisco',
  country:'United States'
},
{
  title: 'City7',
  url: 'https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/03/Sitios-tur%C3%ADsticos-en-el-mundo.jpg',
  city:'Dubái',
  country:'United Arab Emirates'
},
{
  title: 'City8',
  url: 'https://www.swedishnomad.com/wp-content/images/2020/03/Largest-Cities-in-Colombia.jpg',
  city:'Colombia',
  country:'Colombia'
},
{
  title: 'City9',
  url: 'https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/04/mejores-lugares-turisticos.jpg',
  city:'Istanbul',
  country:'Turkey'
},
{
  title: 'City10',
  url: 'https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/04/lugares-turisticos-1.jpg',
  city:'Ahu Tongariki, Isla de Pascua',
  country:'Chile'
},
{
  title: 'City11',
  url: 'https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/04/sitios-turisticos-2.jpg',
  city:'Stonehenge',
  country:'England'
},
{
  title: 'City12',
  url: 'https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/04/mejores-sitios-turisticos.jpg',
  city:'Teotihuacán',
  country:'Mexico'
},
]
const handlePrev = () => {
  index>0? setIndex(index - 4) : setIndex(8);
}

const handleNext = () => {
  index<8 ? setIndex(index + 4) : setIndex(0);
}

useEffect(() => {
  const timer = setInterval(() => {
    if (index < 8) {
      setIndex(index + 4)
    } else {
      setIndex(0)
    }

  }, 4000)
  return () => {
    clearInterval(timer)
  }
}, [index]) 
return (
  <>
      <div className='min-h-[60vh] bg-gradient-to-r from-teal-600 to-teal-300'>
        <h2 className='text-center text-black text-bold  font-customFont2 text-xl p-4'>Popular MYTINERARIES</h2>
        <div className='md:mx-20 h-[70vh] grid grid-cols-2 grid-rows-2 '>
          <a className='block group relative'>
            <img className='absolute inset-0 object-cover object-center h-full w-full' src={images[index].url} alt=""/>
            <div className='relative sm:p-6 lg:p-8'>
            <p className='text-sm text-center font-medium uppercase tracking-widest text-red-500'>{images[index].city}</p>
            <p className="text-xl text-center font-bold text-green-100 sm:text-2xl">{images[index].country}</p>
            </div>
          </a>
          <a className='block group relative bg-black '>
              <img className='absolute inset-0 object-cover object-center h-full w-full' src={images[index+ 1].url} alt=""/>
              <div className='relative  sm:p-6 lg:p-8'>
              <p className='text-sm text-center font-medium uppercase tracking-widest text-red-500'>{images[index+ 1].city}</p>
              <p className="text-xl text-center font-bold text-green-100 sm:text-2xl">{images[index+ 1].country}</p>
              </div>
          </a>
          <a className='block group relative bg-black '>
              <img className='absolute inset-0 object-cover object-center h-full w-full' src={images[index+2].url} alt=""/>
              <div className='relative  sm:p-6 lg:p-8'>
              <p className='text-sm text-center font-medium uppercase tracking-widest text-yellow-400'>{images[index+2].city}</p>
              <p className="text-xl text-center font-bold text-green-400 sm:text-2xl">{images[index+2].country}</p>
              </div>
          </a>
          <a className='block group relative bg-black '>
              <img className='absolute inset-0 object-cover object-center h-full w-full' src={images[index+3].url} alt=""/>
              <div className='relative  sm:p-6 lg:p-8'>
              <p className='text-sm text-center font-medium uppercase tracking-widest text-yellow-400'>{images[index+3].city}</p>
              <p className="text-xl text-center font-bold text-green-400 sm:text-2xl">{images[index+3].country}</p>
              </div>
          </a>
        </div>
        <div className='flex justify-center'>
          <button className=' bg-indigo-50 px-5 py-3 mx-4 text-sm shadow-sm font-medium tracking-wider text-teal-600 rounded-full hover:shadow-2xl hover:bg-teal-200' onClick={handlePrev}>Prev</button>
          <button className='bg-indigo-50 px-5 py-3 mx-4 text-sm shadow-sm font-medium tracking-wider text-teal-600 rounded-full hover:shadow-2xl hover:bg-teal-200' onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  )
}
export default Carousel 
