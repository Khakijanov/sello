import HeroImg from '../img/hero.svg'
function Hero() {
  return (
    <div className='Mycontainer'>
        <div className=' myFlex '>
            <div className='w-1/2'>
                <h1 className='text-[70px] text-secondaryColor font-pacifico'>Sale</h1>
                <h2 className='text-[35px] text-textColor'> Publick high gum natural</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ut id minima delectus quis velit asperiores nobis repudiandae vero ipsam!</p>
            </div>
            <div className='w-[450px] bg-bgColor'>
                <img src={HeroImg} className='w-full' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero