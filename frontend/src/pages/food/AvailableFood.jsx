import React, { useEffect, useState } from "react";
import Card from "../../components/foodDetails/Card";
import { Helmet } from "react-helmet";
import { TfiLayoutGrid2, TfiLayoutGrid3Alt } from "react-icons/tfi";
import Lottie from "react-lottie";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import axiosInstance from "../../utils/axiosInstance";
import animationData from "../../assets/lottie/Animation - 1715537156636.json";
import noavailable from "../../assets/lottie/navailable1.json";

function AvailableFood() {
    const [foods, setFoods] = useState([]);
    const [loader, setLoader] = useState(true);
    const [layout, setLayout] = useState(true);
    const [search, setSearch] = useState([]);
    const [available, setAvailable] = useState(false);
    const [dateOptions, setDateOptions] = useState([]);
    const [foodTypeOptions, setFoodTypeOptions] = useState([]);
    const [locationOptions, setLocationOptions] = useState([]);

    const extractOptions = (data) => {
        const uniqueFoodTypes = Array.from(new Set(data.map(item => item.foodType.toLowerCase())));
        setFoodTypeOptions([{ value: "all", label: "All Food Types" }, ...uniqueFoodTypes.map(type => ({ value: type, label: type }))]);

        const uniqueLocations = Array.from(new Set(data.map(item => item.pickupLocation.toLowerCase())));
        setLocationOptions([{ value: "all", label: "All Locations" }, ...uniqueLocations.map(location => ({ value: location, label: location }))]);

        setDateOptions([
            { value: "ascend", label: "Oldest to Latest" },
            { value: "descend", label: "Latest to Oldest" },
            { value: "all", label: "All Dates" }
        ]);
    };

    // Sort functions
    const handleSortDate = (sort) => {
        let sortedData = [];
        if (sort.value === "ascend") {
            sortedData = [...search].sort((a, b) => new Date(a.expiryDate) - new Date(b.expiryDate));
        } else if (sort.value === "descend") {
            sortedData = [...search].sort((a, b) => new Date(b.expiryDate) - new Date(a.expiryDate));
        } else {
            sortedData = [...foods];
        }
        setSearch(sortedData);
    };

    const handleSortFood = (sort) => {
        if (sort.value === "all") {
            setSearch([...foods]);
        } else {
            setSearch(foods.filter((f) => f.foodType.toLowerCase() === sort.value));
        }
    };

    const handleSortLocation = (sort) => {
        if (sort.value === "all") {
            setSearch([...foods]);
        } else {
            setSearch(foods.filter((f) => f.pickupLocation.toLowerCase().includes(sort.value)));
        }
    };

    const handleLayout = () => {
        setLayout(!layout);
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const defaultAvailability = {
        loop: true,
        autoplay: true,
        animationData: noavailable,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleSearch = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        setSearch(foods.filter((f) => f.foodName.toLowerCase().includes(searchQuery)));
    };

    const fetchFood = async () => {
        try {
            const res = await axiosInstance.get("/food/allfoods");
            if (res.status === 200) {
                const fetchedFoods = res.data.data;
                setFoods(fetchedFoods);
                setSearch(fetchedFoods);
                setAvailable(fetchedFoods.length > 0);
                extractOptions(fetchedFoods);
            } else {
                setAvailable(false);
            }
        } catch (error) {
            console.error("Error fetching food data", error);
            setAvailable(false);
        } finally {
            setLoader(false);
        }
    };

    useEffect(() => {
        fetchFood();
    }, []);

    if (loader) {
        return <Lottie options={defaultOptions} height={400} width={400} />;
    }

    return (
        <div className="mb-20">
            <Helmet>
                <html lang="en" />
                <title>Available Foods</title>
                <meta name="description" content="Basic example" />
            </Helmet>
            <div className="space-y-3 mb-10">
                <h5 className="text-xl text-center font-mono mt-14">
                    Let's Take Care of Each Other
                </h5>
                <h1 className="text-5xl font-medium text-center">
                    Enjoy & Eat <span className="text-lime-500">Together</span>
                </h1>
            </div>
            <div className="flex justify-center mb-10">
                <div className="md:w-96 w-72">
                    <label className="flex items-center gap-2">
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
                <div className="grid md:grid-cols-3 grid-cols-1 w-10/12">
                    <Dropdown
                        options={dateOptions}
                        onChange={handleSortDate}
                        placeholder="Sort By Date"
                        className="rounded-md m-1 mb-8 flex flex-row items-center shadow-lg"
                        controlClassName="bg-blue-500 font-semibold py-2 px-4 w-full rounded-md"
                    />
                    <Dropdown
                        options={foodTypeOptions}
                        onChange={handleSortFood}
                        placeholder="Food Type"
                        className="rounded-md m-1 mb-8 flex flex-row items-center shadow-lg"
                        controlClassName="bg-blue-500 font-semibold py-2 px-4 w-full rounded-md"
                    />
                    <Dropdown
                        options={locationOptions}
                        onChange={handleSortLocation}
                        placeholder="Location"
                        className="rounded-md m-1 mb-8 flex flex-row items-center shadow-lg"
                        controlClassName="bg-blue-500 font-semibold py-2 px-4 w-full rounded-md"
                    />
                </div>
                <div className="md:flex justify-center mb-3 hidden cursor-pointer">
                    {layout ? (
                        <TfiLayoutGrid3Alt className="text-xl" onClick={handleLayout} />
                    ) : (
                        <TfiLayoutGrid2 className="text-xl" onClick={handleLayout} />
                    )}
                </div>
            </div>
            {search.length > 0 ? (
                <div className={`md:grid gap-6 md:w-auto w-72 md:ml-5 flex flex-col mx-auto ${layout ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
                    {search.map((foodItem) => (
                        <Card key={foodItem._id} item={foodItem} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col justify-center">
                    <Lottie options={defaultAvailability} height={400} width={400} />
                    <div className="text-5xl font-medium text-center">
                        Sorry, No available food!
                    </div>
                </div>
            )}
        </div>
    );
}

export default AvailableFood;
