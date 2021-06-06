import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';



function App() {
  // 1*
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

// 10
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
    setIndex (lastIndex)
  }
  if(index > lastIndex) {
    setIndex(0)
  }
}, [index, people])

useEffect(() => {
  let slider = setInterval(() => {
    setIndex(index + 1);
  }, 3000);
  return () => clearInterval(slider);
}, [index]);


  return <section className='section'>
    <div className='title'>
      <h2>
      <span>/</span>
      Review</h2>
    </div>

    {/* 2* */}
    <div className='section-center'>
      {people.map((person, personIndex) => {
        const {id, image, name, title, quote} = person;
       // 6*
        let position = 'nextSlide';
        // 7*
        if (personIndex === index) {
          position = 'activeSlide'
          // 8*
        }
        if (personIndex === index-1 || (index === 0 && personIndex === people.length -1)){
          position = 'lastSlide';
        }

        return (
          <article className= {position} key={id}>
            <img src={image} alt={name} className='person-img'></img>
            <h4>{name}</h4>
            <p classNmae='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon'/>
          </article>
        )
      })}

      {/*  9* */}
      {/* 3* creating buttons*/}
      <button className='prev' onClick={() => setIndex(index - 1)

      }>
        <FiChevronLeft />
      </button>

      <button className='next' onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>


    </div>



  </section>
}

export default App;
