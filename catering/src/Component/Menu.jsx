import React from 'react';
import lunch from '../assets/image/lunch.jpg'
import mutton from '../assets/image/mutton.jpg'
import dinner from '../assets/image/dinner.jpg'
import samosa from '../assets/image/samosa.jpg'
import chai from '../assets/image/chai.jpg'
import fast from '../assets/image/fast.jpg'


export default function Menu() {
  return (
    <div>
      
        <div className='herobg '>
        <h1 className='display-1 fw-bold'>MENU</h1>
        <a  className='fs-3 fw-bold' href="/">Home</a>
        </div>
    <section className='container'>
      <h5 className='text-center pt-5'>Menu</h5>
      <div className='row pt-5'>
      <div className='col-md-4'>
          <div className='zoom-effect'>
            <img src={mutton} alt="" />
            <h5 className='text-center pt-3'>Non-veg</h5>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='zoom-effect'>
            <img src={lunch} alt="" />
            <h5 className='text-center pt-3'>Lunch</h5>
          </div>
        </div>
       
        <div className='col-md-4'>
          <div className='zoom-effect'>
            <img src={dinner} alt="" />
            <h5 className='text-center pt-3'>Dinner</h5>
          </div>
        </div>
      </div>
      <div className='row pt-5'>
        <div className='col-md-4'>
          <div className='zoom-effect'>
            <img src={fast} alt="" />
            <h5 className='text-center pt-3'>Breakfast</h5>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='zoom-effect'>
            <img src={samosa} alt="" />
            <h5 className='text-center pt-3'>Evening Snacks</h5>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='zoom-effect'>
            <img src={chai} alt="" />
            <h5 className='text-center pt-3'>Chai</h5>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
