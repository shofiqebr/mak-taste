import errorImg from '../../assets/errorImg.jpg'
import backImg from '../../assets/back.avif'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div style={{backgroundImage: `url(${errorImg})`}} className='relative bg-no-repeat lg:bg-cover bg-center lg:bg-right-top  h-[80vh] lg:m-20 m-5 text-white lg:text-6xl text-xl font-bold text-center xl:pt-44 lg:pt-32 pt-44'>

           <Helmet>
                <meta charSet="utf-8" />
                <title>Mak Taste Shop | Error</title>
                <link rel="canonical" href="http://static.ajkerdeal.com/images/dealdetails/ad-logo.svg" />
            </Helmet>

            You are searching something <br /> unavailable 
            <Link to='/'>
            <div className=' absolute right-10 bottom-20 xl:bottom-5 flex flex-col justify-center items-center'>
            <img className='xl:w-40 lg:w-28 w-20 rounded-full  right-5 bottom-5' src={backImg} alt="" />
            <p>Back to Home</p>

            </div>
            </Link>

        </div>
    );
};

export default ErrorPage;