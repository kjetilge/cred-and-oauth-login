'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { Video, Category } from './types'
import { thumb } from '../utils/thumbs'

import 'swiper/css';
import { Pagination } from 'swiper/modules';
// import './styles.css';
import 'swiper/css/pagination';

export default function videosCatalog({ categories }: { categories: Category[] }) {


  return (
    // <div>{JSON.stringify(categories)}</div>
      <ul>
        {categories.map( category => {
          const videos = category.videos.items

          return (

            <li key={category.id}>
              <a href={`/filmkatalog/${category.slug}`}>{category.name}</a>
              <Swiper
                tag='ul'
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {videos.map((video) => (
                  <SwiperSlide key={video.id} tag='li'>
                  <div>
                    {/* use a server rendered component here */}
                    <div>
                      <h2>{video.title}</h2>
                      <Image
                        src={thumb(video.fileName, video.posterTime, '600')} alt={video.title}
                        width={300}
                        height={200}
                      />
                    </div>
                  </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </li>
          )
        })}
      </ul>

  )
}