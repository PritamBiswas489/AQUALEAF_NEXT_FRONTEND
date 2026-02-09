import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./HomeBanner.scss";
import "./HomeBanner.responsive.scss";
import qImage from "@/assets/images/common-image/q.svg";
import mobBan from "@/assets/images/common-image/home-mobile-ban.jpg";
import config from "@/helpers/config";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { MdClose } from 'react-icons/md';
import ChatDropdown from "../ChatDropdown";
const { REACT_APP_RESOURCE_URL } = config();

function HomeBanner({ homeContent }) {
  const homeData = JSON.parse(homeContent);

  const [showModal, setShowModal] = useState(false);
  const handleShowShowModal = () => setShowModal(true);
  const handleCloseShowModal = () => setShowModal(false);
  
  return (
    <>
      <section className="banner d-flex justify-content-between align-items-center mobNone">
        <div className="bannerLeft">
          <h6>Introducing</h6>
          <h2>
            {parse(
              homeData?.banner?.title ??
                `Software Development Company for Scalable Digital Solutions <span>AquaLeaf IT Solutions</span>`
            )}
          </h2>
          <div className="banParagraph">
            {parse(
              homeData?.banner?.description ??
                `AquaLeaf IT Solutions helps startups, SMBs, and enterprises build secure, scalable, and high-performance software solutions. From web and mobile applications to cloud-based systems, we turn ideas into reliable digital products.`
            )}
          </div>
          <div className="home-btn-wrap">
            <ul>
              <li>
                <Link href={"javascript:void(0)"} className="caseStudy">Get a Free Consultation</Link>
              </li>
              <li>
                <Link href={"javascript:void(0)"} onClick={handleShowShowModal} className="caseStudy">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bannerRight">
          <div className="qSvg">
            <Image
              className="next-img"
              height={300}
              width={300}
              src={
                homeData?.banner?.img
                  ? `${REACT_APP_RESOURCE_URL}/${homeData?.banner?.img}`
                  : qImage
              }
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="homeBanMobArea">
        <Image
          height={500}
          width={1000}
          className={`next-img`}
          src={
            homeData?.banner?.mobileImg
              ? `${REACT_APP_RESOURCE_URL}/${homeData?.banner?.mobileImg}`
              : mobBan.src
          }
          alt=""
        />
        <div className="bannerLeft">
          <h6>Introducing</h6>
          <h2>
            {parse(
              homeData?.banner?.title ??
                `Hire a developer and monetize your business with <span>AquaLeaf IT Solutions</span>`
            )}
          </h2>
          <div>
            {parse(
              homeData?.banner?.description ??
                `Bring your go-to-market teams together to deliver personalized customer experiences in real time – so you can increase your revenue, shorten your sales
						cycles, and strengthen your brand.`
            )}
          </div>
          <div className="home-btn-wrap">
            <ul>
              <li>
                <Link href={"javascript:void(0)"} className="caseStudy">Get a Free Consultation</Link>
              </li>
              <li>
                <Link href={"javascript:void(0)"} className="caseStudy">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Modal centered show={showModal} size="lg" onHide={handleCloseShowModal} className="custom-modal">        
        <Modal.Body>
          <Button className="mobal-close" onClick={handleCloseShowModal}>
						<MdClose />
					</Button>
          <div className='row'>
              <div className='col-xl-6 col-lg-6 col-sm-12 col-12'>
                  <div className='form-group'>
                      <input
                          id='contactName'
                          type='text'
                          placeholder='Full Name'
                          className='form-control'
                      />
                      <i className='fa fa-star' />
                  </div>
              </div>
              <div className='col-xl-6 col-lg-6 col-sm-12 col-12'>
                  <div className='form-group'>
                      <input
                          id='contactEmail'
                          type='text'
                          placeholder='Work Email'
                          className='form-control'
                      />
                      <i className='fa fa-star' />
                  </div>
              </div>
              <div className='col-xl-6 col-lg-6 col-sm-12 col-12'>
                  <div className='form-group'>
                      <input
                          id='ph_no'
                          type='text'
                          placeholder='Phone Number'
                          className='form-control'
                      />
                      <i className='fa fa-star' />
                  </div>
              </div>
              <div className='col-xl-6 col-lg-6 col-sm-12 col-12'>
                  <div className='form-group'>
                      <input
                          id=''
                          type='text'
                          placeholder='Company'
                          className='form-control'
                      />
                      <i className='fa fa-star' />
                  </div>
              </div>
              <div className='col-md-12'>
                  <ChatDropdown/>
              </div>
              <div className='col-md-12'>
                  <div className='form-group'>
                      <label>Write your message here</label>
                      <textarea
                          id='contactMessage'
                          className='form-control'
                          placeholder='Please write your message in this box'
                      />
                  </div>
                  <div className='form-group mb-0'>
                      <ul className='d-flex align-items-center justify-content-between'>
                          <li>
                              <button type='submit' className='sendBtn'>
                                  <span>Send</span>
                              </button>
                              {/* <ToastContainer /> */}
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default HomeBanner;
