import "./IndustriesWeServe.scss";
import "./IndustriesWeServe.responsive.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import Image from "next/image";
import industriesImg1 from '../../assets/images/industry/1.svg';
import industriesImg2 from '../../assets/images/industry/2.svg';
import industriesImg3 from '../../assets/images/industry/3.svg';
import industriesImg4 from '../../assets/images/industry/4.svg';
import industriesImg5 from '../../assets/images/industry/5.svg';
import industriesImg6 from '../../assets/images/industry/6.svg';

function IndustriesWeServe() {
  return (
    <>
      <section className='industries-serve'>
                <div className='container'>
                    <div className='row justify-content-center mb-3 mb-xl-5'>
                        <div className='col-auto'>
                            <SectionHeading sectionHheading={`Industries We Serve`}/>
                        </div>
                    </div>
                    <div className='row g-3 g-xxl-4 row-cols-xxl-6 row-cols-xl-4 row-cols-lg-4 row-cols-md-4 row-cols-1'>
                        <div className='col'>
                            <div className='industries-serve-box'>
                                <span className='industries-serve-box-img'>
                                    <Image height={100} width={100} src={industriesImg1.src} alt="" />
                                </span>
                                <h4>Startups & SaaS Companies</h4>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='industries-serve-box'>
                                <span className='industries-serve-box-img'>
                                    <Image height={100} width={100} src={industriesImg2.src} alt="" />
                                </span>
                                <h4>Healthcare & Wellness</h4>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='industries-serve-box'>
                                <span className='industries-serve-box-img'>
                                    <Image height={100} width={100} src={industriesImg3.src} alt="" />
                                </span>
                                <h4>FinTech & Banking</h4>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='industries-serve-box'>
                                <span className='industries-serve-box-img'>
                                    <Image height={100} width={100} src={industriesImg4.src} alt="" />
                                </span>
                                <h4>E-commerce & Retail</h4>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='industries-serve-box'>
                                <span className='industries-serve-box-img'>
                                    <Image height={100} width={100} src={industriesImg5.src} alt="" />
                                </span>
                                <h4>Education & eLearning</h4>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='industries-serve-box'>
                                <span className='industries-serve-box-img'>
                                    <Image height={100} width={100} src={industriesImg6.src} alt="" />
                                </span>
                                <h4>Logistics & Enterprise Solutions</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  );
}

export default IndustriesWeServe;
