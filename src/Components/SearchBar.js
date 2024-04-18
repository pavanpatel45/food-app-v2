import React, { useEffect, useState } from 'react'
import CardMedium from './CardMedium';
import DialogBox from './DialogBox';
import {useLocation} from 'react-router-dom'

export default function SearchBar() {
  const location = useLocation(); 
    const searchText = location && location.state && location.state.name ;
    console.log("SearchText :",location,searchText);
    const [query,setQuery] = useState(searchText || '' );
    const [data,setData] = useState();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [id,setId] = useState();
    const handleCloseDialog = () => {
      setIsDialogOpen(false);
      setId('');
    };
    useEffect(()=>{
        console.log("updated Query :",query);
        const api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&pageSize=5&pageNumber=1&api_key=rtvxHn8xJkOelav5gz5Trjd2RuhW7n4FwI5CPvAs`
     const fetchData = async () => {
        try {
          const response = await fetch(`${api_url}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          console.log("Json Data",jsonData);
            setData(jsonData);
        } catch (error) {
          console.log("Error :",error);
          setData('');
        }
    };

    fetchData();
  },[query])
  const handleClick = (id ) =>{
    console.log("Box is clicked with id",id)
    setIsDialogOpen(true);
    setId(id);
  }
  let val="Type name of any food";
   
  
  return (
    <>
    <DialogBox isOpen={isDialogOpen} onClose={handleCloseDialog} setIsOpen={handleClick} id={id} isBookmark={false}/>
    <div>
       <div className='flex justify-center flex-col items-center m-10'>
          <input type="text" className='border-2 border-solid border-black w-8/12 h-12 rounded-lg px-4 ' value={query} onChange={(e) => {setQuery(e.target.value)}} placeholder={`${val}`}/> 
          <div className='w-8/12'>
             {data && (query.length > 0) && data.foods.map((food) =>{
                return (<CardMedium food={food} handleClick={() => handleClick(food.fdcId)}/>)
             })}
          </div>
       </div>
       
    </div>
    </>
  )
}
