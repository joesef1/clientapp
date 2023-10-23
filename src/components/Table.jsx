import React, { useEffect } from 'react';
import Deleteimg from'../imgs/delete.png'
import favorite from'../imgs/edit.png'
import Editimg from'../imgs/edit.png'
import { getRecords } from '../store/recordSlice';
import { useSelector, useDispatch } from 'react-redux';



const Table = () => {

  const records = useSelector((state) => state.records.records);
  // const isLoading = useSelector((state) => state.records.isLoading);
  // const error = useSelector((state) => state.records.error);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the action to fetch records when your component mounts.
    dispatch(getRecords())
    // console.log(records);
  }, [dispatch]);


  return (
    
  //   <div>
  // <div className='mx-auto '>
  
  //   <div className="py-2  overflow-x-auto lg:mx-8 mx-4  lg:px-8 ">
  
  //                   {/*  */}
  //                   <div className="align-middle inline-block min-w-full bg-white shadow-dashboard pt-3  rounded-lg mt-4 mb-8">
  //                       <table className="min-w-full ">
  //                           <thead>
  //                               <tr>
  //                                   <th className=" font-normal text-gray-500 text-sm px-6 py-3 border-b-2 border-gray-100 text-left leading-4 tracking-wider">Name</th>
  //                                   <th className=" font-normal text-gray-500 text-sm px-6 py-3 border-b-2 border-gray-100 text-left leading-4 tracking-wider">symptoms</th>
  //                                   <th className=" font-normal text-gray-500 text-sm px-6 py-3 border-b-2 border-gray-100 text-left  leading-4  tracking-wider">diagnosis</th>
  //                                   <th className=" font-normal text-gray-500 text-sm px-6 py-3 border-b-2 border-gray-100 text-left  leading-4  tracking-wider">treatment Plan</th>
  //                                   <th className=" font-normal text-gray-500 text-sm px-6 py-3 border-b-2 border-gray-100 text-left  leading-4  tracking-wider">date</th>
  //                                   <th className=" font-normal text-gray-500 text-sm px-6 py-3 border-b-2 border-gray-100 text-left  leading-4  tracking-wider">action</th>
                
  //                               </tr>
  //                           </thead>

  //                           <tbody className="bg-[#FFFAFA] rounded-lg border border-gray-100 overflow-x-scroll">
    
  //                           <tr >
  //                                       <td className=" text-sm px-6 py-4 whitespace-no-wrap border-b border-gray-100">
  //                                                   <div className="text-sm leading-5 text-gray-800">joe</div>
  //                                       </td>

                                      

  //                                       <td className=" text-sm   px-6 py-4 whitespace-no-wrap border-b  border-gray-100  leading-5">symptoms</td>
                                      
  //                                       <td className=" text-sm px-6 py-4 whitespace-no-wrap border-b border-gray-100  text-sm leading-5">diagnosis</td>
  //                                       <td className=" text-sm px-6 py-4 whitespace-no-wrap border-b border-gray-100  text-sm leading-5">treatment Plan</td>
  //                                       <td className=" text-sm px-6 py-4 whitespace-no-wrap border-b border-gray-100  text-sm leading-5">2023-10-20</td>
  //                                       <td className=" text-sm px-6 py-4 whitespace-no-wrap text-right border-b border-gray-100 text-sm leading-5">
  //                                       <div className='flex items-center  gap-2'>
  //                                         <img src={favorite} className='translate-y-[2px]' alt="" />
  //                                         <img src={Deleteimg} className=' ' alt="" />
  //                                       </div>

  //                                       </td>
  //                             </tr>


  //                           </tbody>

  //                       </table>
  //                     <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between  w-[100%] mt-4 work-sans">
    
            
  //           <div>
              
  //           </div>
  //       </div>
  //                   </div>
                    
  //               </div>
  //       </div>
  //   </div>
  <div>
    
  <div className='w-[85%] m-auto mt-16'>

<div className='  border border-gray  rounded-md mb-10'>
<div className='w-[92%] mx-auto '>

<div className='flex justify-between items-center w-full'>
  <div><p className=' py-5  text-lg font-normal'>Patients Info</p></div>
  {/* <div><img  className='cursor-pointer' src={Add} alt="" /></div> */}
</div>

 <hr />

{/* table */}
<div className='mx-auto '>
  
  <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 ">

                  {/*  */}
                  <div className="align-middle inline-block min-w-full bg-white shadow-dashboard  pt-3  rounded-lg mt-4 mb-8">
                      <table className="min-w-full ">
                      <thead>
                                  <tr>
                                      <th className=" font-normal text-gray-500 text-sm px-6 py-3 border-b-2 border-gray-100 text-left leading-4 tracking-wider">Name</th>
                                      <th className=" font-normal text-gray-500 text-sm px-6 py-3 border-b-2 border-gray-100 text-left leading-4 tracking-wider">symptoms</th>
                                      <th className=" font-normal text-gray-500 text-sm px-6 py-3 border-b-2 border-gray-100 text-left  leading-4  tracking-wider">diagnosis</th>
                                      <th className=" font-normal text-gray-500 text-sm px-6 py-3 border-b-2 border-gray-100 text-left  leading-4  tracking-wider">treatment Plan</th>
                                      <th className=" font-normal text-gray-500 text-sm px-6 py-3 border-b-2 border-gray-100 text-left  leading-4  tracking-wider">date</th>
                                      <th className=" font-normal text-gray-500 text-sm px-6 py-3 border-b-2 border-gray-100 text-left  leading-4  tracking-wider">action</th>

                                  </tr>
                              </thead>

                          {/* <tbody className=" rounded-lg border border-gray-100">
  
                          {records.map((item) => (
      <tr key={item.id}>
        <td className="text-sm px-6 py-4 whitespace-no-wrap border-b border-gray-100">
          <div className="text-sm leading-5 text-gray-800">{item.patientName}</div>
        </td>
        <td className="text-sm px-6 py-4 whitespace-no-wrap border-b border-gray-100">
          {item.symptoms}
        </td>
        <td className="text-sm px-6 py-4 whitespace-no-wrap border-b border-gray-100">
          {item.diagnosis}
        </td>
        <td className="text-sm px-6 py-4 whitespace-no-wrap border-b border-gray-100">
          {item.treatmentPlan}
        </td>
        <td className="text-sm px-6 py-4 whitespace-no-wrap border-b border-gray-100">
          {new Date(item.date).toLocaleDateString()}
        </td>
        <td className="text-sm px-6 py-4 whitespace-no-wrap border-b border-gray-100 text-right">
          <div className="flex items-center gap-2">
            <img src={favorite} className="translate-y-[2px]" alt="Favorite" />
            <img src={Deleteimg} alt="Delete" />
          </div>
        </td>
      </tr>
    ))}
                          </tbody> */}
                          

                      </table>
                    <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between  w-[100%] mt-4 work-sans">
  
          
          <div>
            
          </div>
      </div>
                  </div>
                  
              </div>
      </div>
{/* table */}

</div>
</div>

</div>
</div>
  )
}

export default Table
