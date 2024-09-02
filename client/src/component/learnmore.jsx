import image from '../assets/innerimg.webp';
import logo from '../assets/logo.png';

const LearnMore=()=>{
    return (
        <>
          <div className=''>
             <div className=''>
                <img src={image}/>
             </div>
             <div>
                <img src={logo}/>
                <p>We are committed to providing quality eye care to all sections of the society. We aspire to provide each patient that comes our way with quality eye care in a hygienic and well-maintained place.</p>
                <h2>Dr. Pawan Sthapak</h2>
                <h3>(Founder & Chairman)</h3>
                <button>Learn more</button>
             </div>
          </div>
        </>
    )
};
export default LearnMore;