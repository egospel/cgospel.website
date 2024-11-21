import "./styles/AccountDelete.css"
import {useForm} from "react-hook-form";
import PublicNavigation from "../components/PublicNavigation.jsx";

export default function AccountDelete(){
    const {register, handleSubmit,
    watch,formState: {errors}} = useForm()
    const accountDeleteFormHandler = (data)=>{}
    return (
        <>
           <PublicNavigation />
           <div className="delete cent">
               <div className="delete__item col">
                   <div className="delete__header">
                       <h1>Are you sure ?</h1>
                       <p>We&apos;re sad to see you go and will miss you! Thank you for being with us, and
                           remember—you&apos;re always welcome back anytime.</p>
                   </div>
                   <div className="delete__form__item">
                       <form method="POST" action="" className="delete__form col" onSubmit={handleSubmit(accountDeleteFormHandler)}>
                           <div className="input__box">
                               <p className="label">Registered Phone Number:</p>
                               <div className="input">
                                   <input type="text" {...register("accountMobileNo", {required: true})} id=""/>
                               </div>
                           </div>
                           <div className="input__box">
                               <p className="label">:</p>
                               <div className="input">
                                   <input type="text" {...register("accountPassword", {required: true})} id=""/>
                               </div>
                           </div>
                       </form>
                   </div>
               </div>
           </div>
        </>
    )
}