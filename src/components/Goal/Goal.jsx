import React, { useState } from 'react'
import style from './Goal.module.css'





export default function Goal() {


  return <>
  
  <div className="container my-10 ">
        
        <h2 className="text-green-600 text-3xl text-center  my-3 font-semibold">
              هدف الشركة
         </h2>
        <hr className="border-blue-700 border-t-2 w-40 mx-auto" />
        <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" />
        <div className="bg-white rounded-lg w-full lg:flex lg:flex-row flex-col justify-center items-center my-8">
      <div className=" w-full lg:w-1/2 py-8">
      <div className="inner flex justify-center  items-center">
  <img
    className="rounded-full border-2 border-green-600 shadow-lg transition-all duration-700 hover:scale-105 hover:border-blue-500 hover:shadow-green-500 shadow-blue-300 w-[350px] h-[350px] object-fit"
    src="king1.png"
    alt="mohamed ben salman image"
  />
</div>

      </div>
      <div className=" w-full lg:w-1/2 py-8">
        <div className="inner flex flex-col justify-center items-center lg:justify-start lg:items-start">
<h2 className='text-green-600 text-2xl my-4 font-semibold text-start'>هدفنا</h2>
<p className='text-gray-800 text-lg my-2 font-semibold text-center lg:text-start'>نتيجة لما يشهده قطاع الأعمال من ازدهار ملحوظ بفضل رؤية 2030</p>
<p className='text-gray-800 text-lg font-semibold text-start'> نسعى ونطمح ان نكون الخيار الأول للعميل عن طريق:</p>
<h3 className="text-gray-800 text-lg  my-4">
                <span className="text-green-600 mx-3">
                  <i class="fa-solid fa-circle-dot"></i>
                </span>
                امداد العميل باحتياجاته كافة
               </h3>
<h3 className="text-gray-800 text-lg  my-4">
                <span className="text-green-600 mx-3">
                  <i class="fa-solid fa-circle-dot"></i>
                </span>
تحري الدقة والاحترافية
               </h3>
<h3 className="text-gray-800 text-lg  my-4">
                <span className="text-green-600 mx-3">
                  <i class="fa-solid fa-circle-dot"></i>
                </span>
الامتثال الكامل لكل مستجدات ومتطلبات المنهة
               </h3>
        </div>
      </div>


        </div>
      </div>
  </>
}
