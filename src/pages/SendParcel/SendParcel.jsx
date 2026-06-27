import React from 'react';
import { useForm} from "react-hook-form"
const SendParcel = () => {
    const {register,formState: { errors },handleSubmit}= useForm()
    const handleSendParcel=(data)=>{
        console.log(data)

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
                <div>
                    {/* Sender Info */}
                    <div>
     <fieldset className="fieldset">
          <label className="label">Sender Name</label>
          <input type="text" {...register("senderName")} className="input w-full" placeholder="Sender Name" />
         
        </fieldset>
                        
                    </div>
                    {/* Reveiver Info */}
                    <div>

                    </div>

                </div>
                <input type="submit" className='btn btn-primary text-black' value="SendParcel" />
            </form>
        </div>
    );
};

export default SendParcel;