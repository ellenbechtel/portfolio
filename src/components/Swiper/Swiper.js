// Import Swiper React components
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default ({project}) => (
    <Swiper // install Swiper modules
    // modules={[Navigation, Pagination, Scrollbar, A11y]} // I want to focus here
    >
    <SwiperSlide>Slide 1 {project.alt}</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
</Swiper>
)
   
