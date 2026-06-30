import React from 'react';
import { useForm} from "react-hook-form"
import Swal from "sweetalert2";
import { useLoaderData } from 'react-router';
import useAxiosSecure from '../../hook/useAxiosSecure';
import useAuth from '../../hook/useAuth';
const SendParcel = () => {
    const {register,watch,handleSubmit}= useForm()
    const axiosSecure=useAxiosSecure()
    const {user}= useAuth()
    const serviceCenters=useLoaderData()
    const regionsDuplicate= serviceCenters.map(c=>c.region)
    const regions= [...new Set (regionsDuplicate)]
    const senderRegion=watch("senderRegion")
    const receiverRegion=watch('receiverRegion')

    const districtByRegion= region=>{
        const regionDistricts=serviceCenters.filter(c=>c.region=== region);
        const districts=regionDistricts.map(d=>d.district)
        return districts
    }


   
    const handleSendParcel=(data)=>{
        console.log(data)
        const isdocument=data.parcelType==='document';
        const isSameDistrict=data.senderDistrict=== data.receiverDistrict;
        const parcelWeight=parseFloat(data.parcelWeight)
        let cost=0;
        if(isdocument){
          cost = isSameDistrict? 60 : 80;
        }else{
          if(parcelWeight <=3){
            cost =isSameDistrict? 110 :150;

          }else{
            const minCharge= isSameDistrict? 110 :150;
            const extraWeight=parcelWeight-3;
            const extraCharge=isSameDistrict? extraWeight*40 :extraWeight *40+40;
            cost= minCharge+extraCharge;


          }
        }
        
        Swal.fire({
  title: "Agree with the cost",
  text: `You will be charged ${cost}`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "I agree"
}).then((result) => {
  if (result.isConfirmed){
    axiosSecure.post('/parcels',data)
    .then(res=>{
      console.log("after saving parcel",res.data)
    })
    Swal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  });
  }
     
    
});
    

    }
    return (
        <div>
            <h2 className='text-5xl font-bold'>Send A Parcel</h2>
            <form className='mt-14 p-4 text-black' onSubmit={handleSubmit(handleSendParcel) } >
                {/* parcel type*/}
                <div>
                    <label className="label mr-4">
                        <input type="radio" {...register("parcelType")} value="document" className="radio" defaultChecked />
                        Document</label>
                    <label className="label">
                        <input type="radio" {...register("parcelType")} value="non-document" className="radio" />
                        Not-Document</label>

                </div>
                {/* parcelInfo:Name and weigth */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-8'>
                     <fieldset className="fieldset">
          <label className="label ">Parcel Name</label>
          <input type="text" {...register("parcelName")} className="input w-full" placeholder="Parcel Name" />
         
        </fieldset>
                     <fieldset className="fieldset">
          <label className="label">Parcel Weight (KG)</label>
          <input type="Number" {...register("parcelWeight")} className="input w-full" placeholder="Parcel Weight (KG)" />
         
        </fieldset>

                </div>
                {/* two column */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {/* Sender Info */}
                    <div>
     <fieldset className="fieldset">
        <h2 className='text-2xl font-bold'>Sender Details</h2>
          <label className="label">Sender Name</label>
          <input type="text" {...register("senderName")}   defaultValue={user?.displayName}   className="input w-full" placeholder="Sender Name" />
         
        </fieldset>
     <fieldset className="fieldset">
          <label className="label mt-4">Sender Email</label>
          <input type="email" {...register("senderEmail")}  defaultValue={user?.email} className="input w-full" placeholder="Sender Email" />
         
        </fieldset>
        {/* sender region */}
        <fieldset className="fieldset">
  <legend className="fieldset-legend">Sender Region</legend>
  <select {...register('senderRegion')} defaultValue="Pick a region" className="select w-full">
    <option disabled={true}>Pick a Region</option>
    {
        regions.map((r,i)=> <option key={i} value={r} >{r}</option>)
    }
   
   
  </select>

</fieldset>
        {/* sender district */}
        <fieldset className="fieldset">
  <legend className="fieldset-legend">Sender District</legend>
  <select {...register('senderDistrict')} defaultValue="Pick a District" className="select w-full">
    <option disabled={true}>Pick a District</option>
    {
        districtByRegion(senderRegion).map((r,i)=> <option key={i} value={r} >{r}</option>)
    }
   
   
  </select>

</fieldset>
        
     <fieldset className="fieldset">
          <label className="label mt-4">Sender Address</label>
          <input type="text" {...register("senderAddress")} className="input w-full" placeholder="Sender Address" />
         
        </fieldset>
  
     
    
                        
                    </div>
                    {/* Reveiver Info */}
                    <div>
                        <fieldset className="fieldset">
                            <h2 className='text-2xl font-bold'>Receiver Details</h2>
          <label className="label">Receiver Name</label>
          <input type="text" {...register("receiverName")} className="input w-full" placeholder="Receiver Name" />
         
        </fieldset>
        <fieldset className="fieldset">
          <label className="label mt-4">Receiver Email</label>
          <input type="email" {...register("receiverEmail")} className="input w-full" placeholder="Receiver Email" />
         
        </fieldset>
         {/* Receiver region */}
        <fieldset className="fieldset">
  <legend className="fieldset-legend">Receiver Region</legend>
  <select {...register('receiverRegion')} defaultValue="Pick a region" className="select w-full">
    <option disabled={true}>Pick a Region</option>
    {
        regions.map((r,i)=> <option key={i} value={r} >{r}</option>)
    }
   
   
  </select>

</fieldset>
         {/* Receiver district */}
        <fieldset className="fieldset">
  <legend className="fieldset-legend">Receiver District</legend>
  <select {...register('receiverDistrict')} defaultValue="Pick a District" className="select w-full">
    <option disabled={true}>Pick a District</option>
    {
        districtByRegion(receiverRegion).map((d,i)=> <option key={i} value={d} >{d}</option>)
    }
   
   
  </select>

</fieldset>
  
     
   

                    </div>

                </div>
                <input type="submit" className='btn  mt-4 btn-primary text-black' value="SendParcel" />
            </form>
        </div>
    );
};

export default SendParcel;