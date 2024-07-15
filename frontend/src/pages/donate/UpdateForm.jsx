import axios from 'axios';
import React, { useContext,useState } from 'react';
// import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const DonateForm = () => {
    //  const {user} = useContext(AuthContext)
     
    //   const update = useLoaderData()
    //   const {email,name,food_name,image,location,date ,photo, status,note,quantity,_id} = update
    //   console.log(update)
    const [formState, setFormState] = useState({
        food_name: '',
        image : '',
        location: '',
        date :'',
        quantity :'',
        status:'',
        note :'',
        photo:'',
        email :'',
        name:'',

      });

    const handleUpdate = (e)=>{
        e.preventDefault()
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
          });   
        const manageFoods = {email,name,food_name,image,location,date ,photo, status,note,quantity}
        console.log(manageFoods)

       

        // axios.put(`https://assignment-eleven-omega.vercel.app/foods/user/${_id}`,manageFoods)
        // .then(data=>{
        //     console.log(data.data)
        //     if(data.data.modifiedCount > 0){
        //         Swal.fire({
        //             title: "Congratulations!",
        //             text: "Update Successful",
        //             icon: "success",
        //             color:"green",
        //             confirmButtonColor: 'green',
                    
        //           });
        //       }
        // })
        
    
 
 
     }
    return (
        <div>
                          <Helmet>
 <html lang="en" />
        <title>Update</title>
        <meta name="description" content="Basic example" />
 </Helmet>
             <div className="hero min-h-screen opacity-90 p-9  bg-no-repeat" style={{backgroundImage: 'url(https://i.ibb.co/ZSw5kS1/family-scaled.jpg)'}}>

<div className="card bg-white bg-opacity-90 shadow-lg p-6">
  <div className="p-6 border border-gray-300 rounded-xl  space-y-6">
    <h1 className='text-5xl '> Update Form</h1>
  </div>
<form onSubmit={handleUpdate} className="card-body     " data-aos="fade-up"data-aos-duration='1000'>
     

     {/* form name and quantity*/} 
  <div className='md:flex items-center gap-8'>
 
      <div className="form-control md:w-auto ">
      <label className="label">
      <span className="label-text text-black text-lg">Food Name</span>
      </label>
      <input type="text" name='Food_name' defaultValue={formState.food_name} placeholder="Food Name" className="input input-bordered" required />
    
      </div>
      <div className="form-control md:w-1/2  ">
      <label className="label">
      <span className="label-text text-black text-lg">Food URL</span>
      </label>
      <input  type="text" placeholder="Food URL" defaultValue={formState.image} name='Food_image' className="input input-bordered w-full" required />
      </div>
     
  </div>


  <div className='md:flex gap-8 items-center '>

  <div className="form-control md:w-1/2 ">
      <label className="label">
  <span className="label-text text-black text-sm">Pickup Location</span>
      </label>
    
      <select className='input border-gray-200' defaultValue={formState.location} placeholder='Pickup Location'  type="text" name="pickup_location" id="location">
                  <option value="Chittagong">Chittagong</option>
                  <option value="Comilla"><span>Comilla</span></option>
                  <option value="Dhaka"><span>Dhaka</span></option>
                  <option value="Barisal"><span>Barisal</span></option>
                  <option value="Rangpur"><span>Rangpur</span></option>
                  <option value="Rajshahi"><span>Rajshahi</span></option>
         
             
             
              </select>
              
      </div>
  
      <div className="form-control   ">
      <label className="label">
      <span className="label-text text-black text-lg">Expired Date</span>
      </label>
      <input type="date" name='date' defaultValue={formState.date} placeholder="Expiration Date" className="input input-bordered" required />
    
      </div>
     
  </div>
  
  <div className='md:flex items-center gap-8 '>
  <div className="form-control md:w-1/2 ">
      <label className="label">
      <span className="label-text text-black text-sm">Quantity</span>
      </label>
    
      <select className='input border border-gray-200' defaultValue={formState.quantity} placeholder='Category'  type="text" name="quantity" id="quantity-type">
                  <option value="10">10</option>
                  <option value="20"><span>20</span></option>
                  <option value="30"><span>30</span></option>
                  <option value="40"><span>40</span></option>
                  <option value="50"><span>50</span></option>
                  <option value="60"><span>60</span></option>
         
             
               
              </select>
              
      </div>
      <div className="form-control ">
      <h1 className='font-bold'>Food Status</h1>
      <label className="cursor-pointer label space-x-3 ">
      <span className="label-text text-black text-lg">Available</span>
      
      <input  type="radio" name='status' value='Available' defaultValue={formState.status} checked   className="checkbox checkbox-success" required  />
    
    
      </label>
      <label className="cursor-pointer label space-x-3 ">
      <span className="label-text text-black text-lg">Not Available</span>
      
      <input  type="radio" name='status' value='Not Available' defaultValue={formState.status}   className="checkbox checkbox-error" required  />
    
    
      </label>
      </div>
     
  </div>

  <div className='md:flex items-center gap-8 '>
 


     
  </div>

  <div className='md:flex items-center gap-8 '>
  <div className="form-control">
    <label className="label">
      <span className="label-text font-bold text-xl">User Image</span>
    </label>
    <input type="photo" placeholder="photo" name='photo' defaultValue={formState.photo} className="input input-bordered" required readOnly />
  </div>
  <div className="form-control md:w-1/2 ">
      <label className="label">
      <span className="label-text font-bold text-black text-lg">Email</span>
      </label>
      <input  type="email" name='email' defaultValue={formState.email} placeholder="Email" className="input input-bordered" required  readOnly/>
      </div>
      <div className="form-control">
      <label className="label">
      <span className="label-text font-bold text-black text-lg">Name</span>
      </label>
      <input type="name" name='name' defaultValue={formState.name} placeholder="Name" className="input input-bordered" required readOnly />
    
    
      </div>
     
  </div>
  <div className='md:flex items-center gap-8 '>
  <div className="form-control w-full ">
      <label className="label">
      <span className="label-text font-bold text-black text-lg">Note</span>
      </label>
      <input type="text" name='note' defaultValue={formState.note} placeholder="Note" className="input input-bordered" required />
      </div>

     
  </div>



  <input type="submit" value='Update' className='btn btn-block btn-success text-white ' />
      </form>
     
</div>
  

</div>
        </div>
    );
};

export default DonateForm;