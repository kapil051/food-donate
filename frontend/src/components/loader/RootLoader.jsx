
import {ThreeDots } from 'react-loader-spinner';

const RootLoader = () => {
    return (
 <div className=' flex justify-center mt-48 '>
           <ThreeDots
  visible={true}
  height="100"
  width="100"
  color="#15803D"
  radius="10"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
 </div>
    );
};

export default RootLoader;