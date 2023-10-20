import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Bar } from 'recharts';
import {MdOutlineProductionQuantityLimits} from 'react-icons/md'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdReviews} from 'react-icons/md'


const DashboardRightbar = () => {
     
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      


  return (

            <> 
            <div className='grid col-span-3 '> 
                <div className='w-[100%] grid grid-cols-4 gap-4'> 
                    <div className='cursor-pointer p-5 shadow flex justify-around rounded-md bg-[#2484D0] h-[150px] border'>                               
                        <div>
                            <h1 className='font-bold text-2xl mb-7'>2050</h1>
                            <p className='text-xl'>Orders</p>
                        </div>
                        <MdOutlineProductionQuantityLimits fill='#3C5556' className='text-6xl'/>
                    </div>     
               
                
                    <div className='cursor-pointer p-5 shadow flex justify-around rounded-md bg-[#FB5D82] h-[150px]  border'>                               
                        <div>
                            <h1 className='font-bold text-2xl mb-7'>7007</h1>
                            <p className='text-xl'>Categories</p>
                        </div>
                        <MdOutlineFavoriteBorder fill='#3C5556' className='text-6xl'/>
                    </div>     
           
    
                    <div className='cursor-pointer p-5 shadow flex justify-around rounded-md bg-[#E98BE9] h-[150px] border'>                               
                        <div>
                            <h1 className='font-bold text-2xl mb-7'>86%</h1>
                            <p className='text-xl'>Customers</p>
                        </div>
                        <RiCustomerService2Fill fill='#3C5556' className='text-6xl'/>
                    </div>     
            
              
                    <div className='cursor-pointer p-5 shadow flex justify-around rounded-md bg-[#FA6B45] h-[150px] border'>                               
                        <div>
                            <h1 className='font-bold text-2xl mb-7'>22900</h1>
                            <p className='text-xl'>Reviews</p>
                        </div>
                        <MdReviews fill='#3C5556' className='text-6xl'/>
                    </div>     
                </div>

                <div className='w-[100%] grid grid-cols-2 gap-4 mt-10'>
                    <div className='shadow'>
                        <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <div className='shadow'>
                        <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                        >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                        </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>  
        </>
   
  )
}

export default DashboardRightbar