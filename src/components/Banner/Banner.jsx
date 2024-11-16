import bannerLogo from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='mx-auto w-[1110px] h-[600px]  p-3 border rounded-2xl'>
            <img className='mx-auto rounded-2xl ' src={bannerLogo} alt="" />
        </div>
    );
};

export default Banner;