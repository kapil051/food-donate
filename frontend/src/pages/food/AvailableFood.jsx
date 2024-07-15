import React,{useEffect, useState} from "react";
import Card from "../../components/foodDetails/Card";
import { foodDetails } from "../../utils/data/FoodDetails";/////////
import { Helmet } from "react-helmet";
import { TfiLayoutGrid2, TfiLayoutGrid3Alt } from "react-icons/tfi";
import animationData from '../../assets/lottie/Animation - 1715537156636.json' //////
import Lottie from 'react-lottie'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';        ////
import {dateOptions} from '../../utils/data/FoodFilter'  ///////
import { foodTypeOptions } from "../../utils/data/FoodFilter"; ////////
import { locationOptions } from "../../utils/data/FoodFilter"; ///////

function AvailableFood() {
  
  const [foods, setfoods] = useState([]);  //foodData 
  const [loader,setLoader] = useState(true)  //lottie
  const [layout,setLayout] = useState(true) //display 
  const [search, setSearch] = useState([]); //searchData

  // sort functions 
  const handleSortDate = (sort) => {
    console.log(sort.value)
    // ascending order of dates
    if (sort.value === "ascend") {
      const sortedData = search
        .slice()
        .sort((a, b) => new Date(a.expiry_date) - new Date(b.expiry_date));
      console.log("here",sortedData);
      setSearch(sortedData);
    }
    // descending order of dates
    else if(sort.value=="descend"){
      const sortedDate = search
        .slice()
        .sort((a, b) => new Date(b.expiry_date) - new Date(a.expiry_date));
      console.log("here",sortedDate);
      setSearch(sortedDate);
    }
    // all data
    else if(sort.value =="all"){
      setSearch(foods);
    }
  };

  // sort by food type
  const handleSortFood = (sort) => {
    console.log(sort.value)
    if (sort.value === "all") {
      setSearch(foods);
    }
    else{
      setSearch(foods.filter(f=> f.food_type.toLowerCase()==sort.value))
    }
  };
  
  // sort by location
  const handleSortLocation = (sort) => {
    console.log(sort.value)
    if (sort.value === "all") {
      setSearch(foods);
    }
    else{
      setSearch(foods.filter(f=> f.pickup_location.toLowerCase().includes(sort.value)))
    }
  };

  // display
  const handleLayout = ()=>{
    setLayout(!layout)
  }
  //  lottie initialization
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  

  // search Bar
  const handleSearch = (e)=>{
    setSearch(foods.filter(f=> f.food_name.toLowerCase().includes(e.target.value)))
 }

  
 
  useEffect(()=>{
    // TODO: fetch data from database
    setTimeout(() => setLoader(false), 2000)
    setfoods(foodDetails)
    setSearch(foodDetails)
   },[])
  
   // loader visibility
  if(loader){
    return  <Lottie
    options={defaultOptions}
    height={400}
    width={400}
  />
 }
  return (
    <div className="mb-20">
      <Helmet>
        <html lang="en" />
        <title>Available Foods</title>
        <meta name="description" content="Basic example" />
      </Helmet>
      {/* heading */}
      <div className="space-y-3 mb-10">
        <h5 className="text-xl text-center font-mono mt-14">
          Lets Take care of Each other
        </h5>
        <h1 className="text-5xl font-medium text-center">
          Enjoy & Eat <span className="text-lime-500">Together</span>
        </h1>
      </div>

      {/* searchBar */}
      <div className="flex justify-center mb-10">
        <div className="md:w-96 w-72">
          <label className=" flex items-center gap-2 " >
            <input
              type="search"
              name="search"
              className="grow rounded-md"
              placeholder="Search..."
              onChange={handleSearch}
            />
          </label>
        </div>
      </div>

     
      <div className="text-center flex flex-col items-center">
         {/* sort */}
        <div className="grid md:grid-cols-3 grid-cols-1 w-10/12">
          <Dropdown options={dateOptions}  onChange={handleSortDate} placeholder="Sort By Date" className=" rounded-md m-1 mb-8 flex flex-row items-center  shadow-lg shadow-b " controlClassName="bg-blue-500   font-semibold py-2 px-4 w-full rounded-md "/>
          <Dropdown options={foodTypeOptions}  onChange={handleSortFood} placeholder="FoodType" className=" rounded-md m-1 mb-8 flex flex-row items-center  shadow-lg shadow-b " controlClassName="bg-blue-500   font-semibold py-2 px-4 w-full rounded-md "/>
          <Dropdown options={locationOptions}  onChange={handleSortLocation} placeholder="Location" className=" rounded-md m-1 mb-8 flex flex-row items-center  shadow-lg shadow-b " controlClassName="bg-blue-500   font-semibold py-2 px-4 w-full rounded-md "/>
        </div>
        {/*layout*/}
        <div className="md:flex justify-center mb-3  hidden cursor-pointer">
          {layout ? (
            <TfiLayoutGrid3Alt  className=" text-xl " onClick={handleLayout} />
          ) : (
            <TfiLayoutGrid2 className="text-xl" onClick={handleLayout} />
          )}
        </div>
      </div>
      
      {/* display */}
      <div
        className={`md:grid gap-6 md:w-auto w-72 md:ml-5 flex flex-col mx-auto  ${
          layout ? "md: grid-cols-3 " : "md:grid-cols-2 "
        } `}
      >
        {search.map((foodItem) =>
          foodItem.status === "Available" ? <Card item={foodItem} /> : ""
        )}
      </div>
    </div>
  );
}

export default AvailableFood;
