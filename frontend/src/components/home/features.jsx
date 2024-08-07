import React from 'react';
import { FaBowlFood } from 'react-icons/fa6';
import { GiFoodTruck, GiFruitBowl } from 'react-icons/gi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { MdOutlineEmojiFoodBeverage, MdOutlineFastfood,  } from 'react-icons/md';
import { PiBowlFoodLight } from 'react-icons/pi';


const WebsiteFeatures = () => {
    return (
        <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800 pt-4 pb-16">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
            <h2 className="text-5xl  mb-6 leading-tight font-semibold py-4">Community to help each other</h2>
            <p className="dark:text-gray-600 font-mono text-lg my-6">Sharing is Caring</p>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 py-8">
            <div className="flex flex-col items-center p-4">
                <GiFruitBowl  className='text-5xl text-[#ABD700]' ></GiFruitBowl  >
                <h3 className="my-3 text-3xl font-semibold">Fresh Produce</h3>
                <div className="space-y-1 leading-tight">
                    <p>Apples, oranges, bananas</p>
                    <p>Tomatoes, cucumbers</p>
                    <p>Mango,Muskmelon,Potato</p>
                </div>
            </div>
            <div className="flex flex-col items-center p-4">
            <GiFoodTruck  className='text-5xl text-[#ABD700]' ></GiFoodTruck>
           
                <h3 className="my-3 text-3xl font-semibold">Prepared Meals</h3>
                <div className="space-y-1 leading-tight">
                    <p>Mushroom curry </p>
                    <p>Chicken curry with rice</p>
                    <p>Vegetable curry with fish</p>
                </div>
            </div>
            <div className="flex flex-col items-center p-4">
            <IoFastFoodOutline  className='text-5xl text-[#ABD700]' > </IoFastFoodOutline >
                <h3 className="my-3 text-3xl font-semibold">Packaged Goods</h3>
                <div className="space-y-1 leading-tight">
                    <p>Parcel Fast Foods</p>
                    <p>Pasta and pasta sauce</p>
                    <p>Rice,millet,bajra</p>
                </div>
            </div>
            <div className="flex flex-col items-center p-4">
            <PiBowlFoodLight  className='text-5xl text-[#ABD700]' ></PiBowlFoodLight >
                <h3 className="my-3 text-3xl font-semibold">Bowl Dishes</h3>
                <div className="space-y-1 leading-tight">
                    <p>Noodles with vegetables</p>
                    <p>Roasted veggies, and carrots</p>
                    <p>Small bowls with rice, raw fish</p>
                </div>
            </div>
            <div className="flex flex-col items-center p-4">
            <MdOutlineFastfood  className='text-5xl text-[#ABD700]' ></MdOutlineFastfood >
                <h3 className="my-3 text-3xl font-semibold">Fast Food</h3>
                <div className="space-y-1 leading-tight">
                    <p>Cheeseburgers and fries</p>
                    <p>Chicken nuggets and onion rings</p>
                    <p>Veggie wraps and salads</p>
                </div>
            </div>
            <div className="flex flex-col items-center p-4">
            <MdOutlineEmojiFoodBeverage  className='text-5xl text-[#ABD700]' ></MdOutlineEmojiFoodBeverage >
                <h3 className="my-3 text-3xl font-semibold">Beverages</h3>
                <div className="space-y-1 leading-tight">
                    <p>Milk,Health drinks</p>
                    <p>Bottled water</p>
                    <p>Fruit juice cartons</p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default WebsiteFeatures;