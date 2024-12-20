import React, {useEffect, useState} from 'react'
import BookCard from '../Books/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

// import './styles.css';


const categories=["Choose a genre","Business", "Fiction", "Horror", "Adventure"]

const TopSellers = () => {

    // const[books, setBooks]=useState([]);
    const[selectedCategory, setSelectedCategory]=useState("Choose a genre");
    // useEffect(()=>{
    //     fetch("books.json")
    //     .then(res=>res.json())
    //     .then(data=>setBooks(data))
    // },[])

    const{data: books=[]}=useFetchAllBooksQuery();
    

    const filteredBooks= selectedCategory==="Choose a genre"?
    books:books.filter(book=>book.category===selectedCategory.toLowerCase())

    
  return (
    <div className='py-10'>
        <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
        {/*category filtering*/}
        <div className='mb-8 flex items-center'>
            <select
            onChange={(e)=>setSelectedCategory(e.target.value)}
             className='border bg-[#EAEAEA] border-gray-300 
            focus: outline-none p-2 rounded-md' name="category" id="category">{

                categories.map((category, index)=>(
                     <option key={index} value={category}>{category}</option>)) 
                }
               
            </select>
        </div>

        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >


        {
            filteredBooks.length>0 && filteredBooks.map((book, index)=>(
                <SwiperSlide key={index}>
                    <BookCard key={index} book={book}/>
                </SwiperSlide>
               

            ))
        }
       
        
      </Swiper>

        {/*books*/}
        

    </div>
  )
}

export default TopSellers