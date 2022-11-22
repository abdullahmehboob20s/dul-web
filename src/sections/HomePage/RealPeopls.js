import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import VideoCard from "components/VideoCard";
import { Pagination } from "swiper";
import "swiper/css/pagination";

function RealPeopls() {
  const paginationWrapper = useRef();

  return (
    <section>
      <div className="section-container two-columns mb-8 lg:mb-5vw">
        <div>
          <p className="font-helvetica fs-24px text-wodden-purple">
            Real people, with real results.
          </p>
        </div>
        <div>
          <p className="font-helvetica fs-24px text-wodden-purple opacity-60">
            See what our clients had to say about their property investment
            journey with us{" "}
          </p>
        </div>
      </div>

      <div className="mb-12 lg:mb-6vw">
        <Swiper
          slidesPerView={1.8}
          spaceBetween={40}
          centeredSlides={true}
          loop={true}
          modules={[Pagination]}
          pagination={{
            el: ".bullet-pagination",
            bulletClass: "people-slider-bullet",
            bulletActiveClass: "active",
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + "" + "</span>";
            },
          }}
          breakpoints={{
            200: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 1.8,
            },
          }}
        >
          <SwiperSlide>
            <VideoCard img="images/video-1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <VideoCard img="images/video-2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <VideoCard img="images/video-3.png" />
          </SwiperSlide>
        </Swiper>

        <div
          ref={paginationWrapper}
          className="static bullet-pagination w-full flex items-center justify-center mt-6 lg:mt-2vw space-x-4"
        ></div>
      </div>

      <div className="section-container two-columns">
        <div>
          <p className="fs-24px text-wodden-purple font-helvetica">
            We're your SMSF property <br /> investment experts.
          </p>
        </div>
        <div>
          <p className="fs-18px text-wodden-purple mb-5 lg:mb-2vw">
            Before you start purchasing investment property you need to have a
            clear strategy, tailored to your individual circumstances; budget,
            timeline and goals.{" "}
          </p>

          <ul className="list-disc list-outside pl-8 lg:pl-3vw space-y-4 lg:space-y-1_8vw">
            <li className="fs-18px text-wodden-purple">
              You receive unlimited access to our property and finance
              professionals with the knowledge and experience to help you build
              your property portfolio.
            </li>

            <li className="fs-18px text-wodden-purple">
              We offer our investors extensively researched insights into
              property options and high return opportunities.
            </li>

            <li className="fs-18px text-wodden-purple">
              We give you access to the latest property designs, built in
              high-growth suburbs aimed at delivering high rental yields and
              optimum tenancy rates.
            </li>

            <li className="fs-18px text-wodden-purple">
              We will show you how to maximise your assets and use valuable
              equity to grow your portfolio.
            </li>

            <li className="fs-18px text-wodden-purple">
              We have a network of trusted lenders who can offer you bespoke
              financial solutions.
            </li>

            <li className="fs-18px text-wodden-purple">
              We research the latest property and finance information and
              deliver this to our investors as an element of your investment
              strategy.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default RealPeopls;
