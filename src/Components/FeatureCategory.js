import { featureCategory } from '../data/homeData'
import { Link } from 'react-router-dom'

const FeatureCategory = () =>{
    const featureItems = featureCategory.map(
        (d, i) =>{
            return(
                <div className='mx-auto mt-3 '>
                    <FeatureData img= {d.img} key = {d.id} id= {d.id} />
                    <div className='text-center text-xl mt-2 font-semibold'>
                        <Link  to={`/blog/?page=${d.id}`}>{d.title}</Link> 
                    </div>   
                </div>
            )
        }
    )

    return(
    <>
        <div className='w-[80%] container mx-auto grid  gap-6 lg:grid-cols-6 sm:grid-cols-3'> 
            {featureItems}
        </div>
    </>        
    )
}

const FeatureData = ({img}) => {
    return(
        <div className='rounded-full'>
            {img}
        </div>
    )
}

export default FeatureCategory

