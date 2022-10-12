const LeadersPage = () => {
  const rating = [{}, {}, {}, {}, {}, {}];

  return (
    <main className="w-full flex items-center flex flex-col mb-10">
      <h1 className="text-[80px] text-white mt-10">Rating</h1>
      <div className="mt-16 w-fit flex flex-col gap-4">
        {rating.map(() => (
          <div className="flex gap-5">
            <img
              src="/img/Ellipse 9.png"
              alt="avatarka"
              className="w-20 h-20"
            />
            <div className="flex flex-col gap-2 min-w-[150px]">
              <p className="text-white">poseidonskiy</p>
              <p className="text-white">won</p>
            </div>
            <div className="flex relative justify-center items-center">
              <div className="bg-white opacity-40 h-20 w-40 rounded-xl" />
              <p className="text-2xl text-[#FFD600] absolute z-50">5 000 $</p>
            </div>
          </div>
        ))}
      </div>
      <button className="text-[40px] text-white px-24 py-6 bg-gradient-to-r from-[#2129F4] to-[#21ADF4] rounded-[40px] mt-24">
        Participate
      </button>
    </main>
  );
};
export default LeadersPage;
