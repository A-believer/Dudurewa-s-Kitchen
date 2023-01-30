import logo from "../assets/logoed.png"

function OrderSection() {
  return (
    <section className='md:bg-bId bg-bIb bg-cover bg-no-repeat w-full  h-screen'>
      <div className="py-2 md:py-7 px-2 md:px-7 bg-black/50 h-screen">
      
      <div className=" flex justify-between items-center font-epilogue mx-3 text-white ">
        <img src={logo} alt="logo" className="w-[55px] h-[50px] mix-blend-hard-light" />
        <p className="italic mt-4 font-semibold text-[14px] leading-[22px] tracking-wider">Happy Flavors, Tasty Buds...</p>
      </div>

      <div>

      </div>
      
    </div>
    </section>
    
  )
}

export default OrderSection