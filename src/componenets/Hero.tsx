import banner from "../assets/banner-stack.png"

const Hero = () => {
    return (
        <section className="pt-[65px]">
    <div className="px-6 py-[50px] flex flex-col items-center justify-center gap-[40px] sm:flex-row sm:justify-between sm:gap-[60px] md:px-[105px]">
        <div className="py-[30px] max-w-[620px]">
            <div className="text-[40px] sm:text-[60px] font-[800]">
                <p>Build Your Ideal</p>
                <p className="inline-block bg-b-grad bg-clip-text text-transparent">
                    Development Stack
                </p>
     </div>
    <div className="text-[16px] sm:text-[18px] font-[400] text-[#475569FF] pb-[40px] max-w-[620px]">
                <p>
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your next project.
                </p>
        </div>
        <div className="flex gap-[12px]">
            <button className="rounded-xl px-[16px] py-[12px] text-[14px] font-[600] bg-b-grad text-white">
                Explore Technologies
            </button>
            <button className="rounded-xl px-[46.5px] py-[12px] text-[14px] font-[400] border-[1px] border-gray-400">
                    Learn More
                </button>
            </div>
        </div>
        <div className="w-full max-w-[550px] px-0 sm:px-[30px]">
            <img src={banner} alt="" className="w-full h-auto" />
        </div>

    </div>
</section>
    );
};

export default Hero;