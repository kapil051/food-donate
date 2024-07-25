import family from '../../assets/background_img/bg_4.jpg'

const About = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800 py-10 pb-16">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 ">
            <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                <img src={family} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                <div className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-3xl font-bold leading-tight lg:text-4xl py-4">About Us</h3>
                
                    <p>
                    Welcome to our food donation community! We are a passionate group dedicated to combating hunger and food waste in our community. Through our platform, we connect generous donors with those in need, ensuring that no one goes hungry. Whether you're looking to donate surplus food or seeking assistance, our user-friendly interface makes it easy to participate and make a difference. Join us in creating a world where everyone has access to nutritious meals, one donation at a time. Together, we can make a meaningful impact and build a stronger, more compassionate community.
                    </p>
                </div>
            </a>
         
        </div>
    </section>
    );
};

export default About;