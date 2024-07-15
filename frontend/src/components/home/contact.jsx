import React from 'react';
import contact from '../../assets/background_img/contact.jpg'

const Contact = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col justify-between items-center ">
            <div className="space-y-2">
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Contact Us</h2>
                <div className="dark:text-gray-600">Contact now if you need to know anything regarding about our service.</div>
            </div>
            <img src={contact} alt="" className="  p-6  w- h-[350px] " />
        </div>
        <form noValidate="" className="space-y-6">
            <div>
                <label htmlFor="name" className="text-sm">Full name</label>
                <input id="name" type="text" placeholder="" className="input input-bordered w-full p-3 rounded dark:bg-gray-100" />
            </div>
            <div>
                <label htmlFor="email" className="text-sm">Email</label>
                <input id="email" type="email" className=" input input-bordered w-full p-3 rounded dark:bg-gray-100" />
            </div>
            <div>
                <label htmlFor="message" className="text-sm">Message</label>
                <textarea id="message" rows="3" className=" input input-bordered w-full p-3 rounded dark:bg-gray-100"></textarea>
            </div>
            <button type="submit" className=" btn btn-success w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 text-white">Send Message</button>
        </form>
    </div>
    );
};

export default Contact;