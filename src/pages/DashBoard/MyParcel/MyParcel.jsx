import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hook/useAuth';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { FaRegEdit, FaTrash} from "react-icons/fa";

const MyParcel = () => {
    const {user}=useAuth()
    const axiosSecure=useAxiosSecure()
    const {data: parcels=[]}=useQuery({
        queryKey: ['my-parcels',user?.email],
        queryFn: async()=>{
            const res= await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data
        }
    })
  
    return (
        <div>
         <h1 className='text-5xl font-bold'>{parcels.length} All my parcel</h1>
         <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Cost</th>
        <th>Payment Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        
      {/* row 1 */}
      {
        parcels.map((parcel,index)=><tr key={parcel._id}>
        <th>{index+1}</th>
        <td>{parcel.parcelName}</td>
        <td>{parcel.cost}</td>
        <td>Blue</td>
        <td>
         <button className="btn btn-square hover:bg-primary mx-2">
          <FaRegEdit />
         </button>
         <button className="btn btn-square hover:bg-primary">
      <FaTrash />
         </button>
       
        </td>
      </tr>)
      }
      
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default MyParcel;