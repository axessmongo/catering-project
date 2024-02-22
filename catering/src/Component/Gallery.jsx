import React from 'react'
import gallery1 from '../assets/image/catering-5.jpg'
import gallery2 from '../assets/image/catering2.jpg'
import gallery3 from '../assets/image/catering4.jpg'
import gallery4 from '../assets/image/catering6.png'
import gallery5 from '../assets/image/catering7.png'
import gallery6 from '../assets/image/catering8.png'
import gallery7 from '../assets/image/catering9.png'
import gallery8 from '../assets/image/catering10.png'
import gallery9 from '../assets/image/catering11.png'
import gallery10 from '../assets/image/catering11.png'
import gallery11 from '../assets/image/catering12.png'
import banner from '../assets/image/banner.jpg'

function Gallery() {
    return (
        <div>
            <section>
                <div className='gallery-banner'>
                     <div className='pt-5'>
                    <a className='fs-3 fw-bold d-flex justify-content-center' href="/">Home</a> </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 pt-3' data-aos="zoom-in"  data-aos-duration="900">
                            <div>
                                <img src={gallery3} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div className='row'>
                                <div className='col-md-4 pt-3' data-aos="zoom-in"  data-aos-duration="900">
                                    <div>
                                        <img src={gallery1} alt="" className='img-fluid' />
                                    </div>
                                </div>
                                <div className='col-md-4 pt-3' data-aos="zoom-in"  data-aos-duration="900">
                                    <div>
                                        <img src={gallery5} alt="" className='img-fluid' />
                                    </div>
                                </div>
                                <div className='col-md-4 pt-3' data-aos="zoom-in"  data-aos-duration="900">
                                    <div>
                                        <img src={gallery4} alt="" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                            <div className='row '>
                                <div className='col-md-4 pt-4' data-aos="zoom-in"  data-aos-duration="900">
                                    <div>
                                        <img src={gallery8} alt="" className='img-fluid' />
                                    </div>
                                </div>
                                <div className='col-md-4 pt-4' data-aos="zoom-in"  data-aos-duration="900" >
                                    <div>
                                        <img src={gallery8} alt="" className='img-fluid' />
                                    </div>
                                </div>
                                <div className='col-md-4 pt-4' data-aos="zoom-in"  data-aos-duration="900">
                                    <div>
                                        <img src={gallery8} alt="" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

            <section className='container'>
                <div className='row'>
                    <div className='col-md-4 pt-3' data-aos="zoom-in"  data-aos-duration="900">
                        <div>
                            <img src={gallery11} alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className='col-md-4 pt-3' data-aos="zoom-in"  data-aos-duration="900">
                        <div>
                            <img src={gallery5} alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className='col-md-4 pt-3' data-aos="zoom-in"  data-aos-duration="900">
                        <div>
                            <img src={gallery10} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-4 pt-3' data-aos="zoom-in"  data-aos-duration="900">
                        <div>
                            <img src={gallery1} alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className='col-md-4 pt-3' data-aos="zoom-in"  data-aos-duration="900">
                        <div>
                            <img src={gallery4} alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className='col-md-4 py-3' data-aos="zoom-in"  data-aos-duration="900">
                        <div>
                            <img src={gallery11} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery