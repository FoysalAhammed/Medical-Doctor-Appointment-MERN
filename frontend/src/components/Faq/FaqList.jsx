
import {faqs} from "../../assets/data/faqs"
import FaqCard from './FaqCard'
const FaqList = () => {
  return(
    <div className='mt-[38px]'>
    {
        faqs.map((item) => (
            <FaqCard key={item} item={item}  />
        ))
    }
    
</div>
  )
}

export default FaqList