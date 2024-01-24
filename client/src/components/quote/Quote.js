import React from 'react';
import {useEffect, useState } from "react";
import QuoteCard from "./QuoteCard";
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation,Pagination } from 'swiper/modules';
import "./quote.css";

const Quote = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://type.fit/api/quotes");
        const dataAPI = await response.json();
        setData(dataAPI);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const cards = data.map((item, index) => {
    const authorsArray = item.author.split(",")[0];
   
    return (
      <SwiperSlide key={index}>
        <QuoteCard authors={authorsArray} text={item.text} />
      </SwiperSlide>
    );
  });
  


  return (<section className="quotes  container section" id="quote">
    <h2 className="section__titile">Today's Quote</h2>
      <span className="section_subtitle">Best wish to you </span>
    <Swiper className="quotes_container"
     autoHeight={true}
     spaceBetween={20}
     navigation={true}
     pagination={{
       clickable: true,
     }}
     modules={[Navigation, Pagination]} >
        {cards}
    </Swiper>
    </section>)


}

export default Quote