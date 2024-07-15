import React from 'react';
import { FaBowlFood } from 'react-icons/fa6';
import { GiFoodTruck, GiFruitBowl } from 'react-icons/gi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { MdOutlineEmojiFoodBeverage, MdOutlineFastfood,  } from 'react-icons/md';
import { PiBowlFoodLight } from 'react-icons/pi';


const WebsiteFeatures = () => {
    return (
        <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
            <h2 className="text-5xl font-normal mb-6">Community to help each other</h2>
            <p className="dark:text-gray-600 font-mono text-lg mt-6">Sharing is Caring</p>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center p-4">
                <GiFruitBowl  className='text-5xl text-[#15803D]' ></GiFruitBowl  >
                <h3 className="my-3 text-3xl font-semibold">Fresh Produce</h3>
                <div className="space-y-1 leading-tight">
                    <p>Apples, oranges, bananas</p>
                    <p>Tomatoes, cucumbers, lettuce</p>
                    <p>Herbs: basil, parsley, mint</p>
                </div>
            </div>
            <div className="flex flex-col items-center p-4">
            <GiFoodTruck  className='text-5xl text-[#15803D]' ></GiFoodTruck>
           
                <h3 className="my-3 text-3xl font-semibold">Prepared Meals</h3>
                <div className="space-y-1 leading-tight">
                    <p>Spaghetti with marinara sauce</p>
                    <p>Chicken curry with rice</p>
                    <p>Vegetable stir-fry with tofu</p>
                </div>
            </div>
            <div className="flex flex-col items-center p-4">
            <IoFastFoodOutline  className='text-5xl text-[#15803D]' > </IoFastFoodOutline >
                <h3 className="my-3 text-3xl font-semibold">Packaged Goods</h3>
                <div className="space-y-1 leading-tight">
                    <p>Parcel Fast Foods</p>
                    <p>Pasta and pasta sauce</p>
                    <p>Rice, quinoa, and couscous</p>
                </div>
            </div>
            <div className="flex flex-col items-center p-4">
            <PiBowlFoodLight  className='text-5xl text-[#15803D]' ></PiBowlFoodLight >
                <h3 className="my-3 text-3xl font-semibold">Bowl Dishes</h3>
                <div className="space-y-1 leading-tight">
                    <p>Ramen noodles with vegetables</p>
                    <p>Roasted veggies, and avocado</p>
                    <p>Poke bowls with rice, raw fish</p>
                </div>
            </div>
            <div className="flex flex-col items-center p-4">
            <MdOutlineFastfood  className='text-5xl text-[#15803D]' ></MdOutlineFastfood >
                <h3 className="my-3 text-3xl font-semibold">Fast Food</h3>
                <div className="space-y-1 leading-tight">
                    <p>Cheeseburgers and fries</p>
                    <p>Chicken nuggets and onion rings</p>
                    <p>Veggie wraps and salads</p>
                </div>
            </div>
            <div className="flex flex-col items-center p-4">
            <MdOutlineEmojiFoodBeverage  className='text-5xl text-[#15803D]' ></MdOutlineEmojiFoodBeverage >
                <h3 className="my-3 text-3xl font-semibold">Beverages</h3>
                <div className="space-y-1 leading-tight">
                    <p>Green tea bags</p>
                    <p>Bottled water</p>
                    <p>Fruit juice cartons</p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default WebsiteFeatures;