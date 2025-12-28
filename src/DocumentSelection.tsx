import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';  // Измени путь на этот
;  // Подключаем CSS для Swiper

const DocumentSelection: React.FC = () => {
  return (
    <div className="document-selection">
      <h2>Выберите тип документа</h2>
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide>
          <button className="document-button">Смета</button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="document-button">Договор</button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="document-button">Акт</button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="document-button">Расписка</button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DocumentSelection;