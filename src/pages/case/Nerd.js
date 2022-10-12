const Nerd = () => {
  const reward = [
    {
      weapon: "/img/weapon/12.png",
    },
    {
      weapon: "/img/weapon/12.png",
    },
    {
      weapon: "/img/weapon/12.png",
    },
    {
      weapon: "/img/weapon/12.png",
    },
    {
      weapon: "/img/weapon/12.png",
    },
    {
      weapon: "/img/weapon/12.png",
    },
    {
      weapon: "/img/weapon/12.png",
    },
    {
      weapon: "/img/weapon/12.png",
    },
    {
      weapon: "/img/weapon/12.png",
    },
    {
      weapon: "/img/weapon/12.png",
    },
    {
      weapon: "/img/weapon/12.png",
    },
    {
      weapon: "/img/weapon/12.png",
    },
  ];
  const randomDrop = [
    {
      weapon: "/img/weapon/150fx112f-4 5.png",
      color: "weapon_blue",
      nameWeapon: "Dual Berettas",
      nameSkins: "Dezastre",
    },
    {
      weapon: "/img/weapon/150fx112f-4 5.png",
      color: "weapon_blue",
      nameWeapon: "Dual Berettas",
      nameSkins: "Dezastre",
    },
    {
      weapon: "/img/weapon/150fx112f-4 5.png",
      color: "weapon_blue",
      nameWeapon: "Dual Berettas",
      nameSkins: "Dezastre",
    },
    {
      weapon: "/img/weapon/150fx112f-4 5.png",
      color: "weapon_blue",
      nameWeapon: "Dual Berettas",
      nameSkins: "Dezastre",
    },
    {
      weapon: "/img/weapon/150fx112f-4 5.png",
      color: "weapon_purple",
      nameWeapon: "Dual Berettas",
      nameSkins: "Dezastre",
    },
    {
      weapon: "/img/weapon/150fx112f-4 5.png",
      color: "weapon_purple",
      nameWeapon: "Dual Berettas",
      nameSkins: "Dezastre",
    },
    {
      weapon: "/img/weapon/150fx112f-4 5.png",
      color: "weapon_purple",
      nameWeapon: "Dual Berettas",
      nameSkins: "Dezastre",
    },
  ];

  return (
    <main className="flex flex-col mb-10 items-center">
      <div className="mt-8 grid grid-cols-12 mx-20 overflow-scroll">
        {reward.map((item) => (
          <div className="h-20 w-20 overflow-hidden flex justify-center items-center">
            <img src={item.weapon} alt="weapon" />
          </div>
        ))}
      </div>
      <div className="mt-40 relative flex items-center overflow-hidden">
        <img src="/img/Group 5.png" alt="random" className="" />
        <div className="flex gap-10 mx-6 justify-center absolute">
          {randomDrop.map((item) => (
            <img src={item.weapon} alt="weaponDrop" className="" />
          ))}
        </div>
      </div>
      <h1 className="mt-9 text-white text-[50px]">Win a prize</h1>
      <button className="text-[36px] text-white px-24 py-5 bg-gradient-to-r from-[#2129F4] to-[#21ADF4] rounded-[40px] mt-11">
        twist
      </button>
      <h2 className="text-[40px] text-white mt-24">Case contents</h2>
      <div className="grid grid-cols-6 gap-6 justify-center mt-16">
        {randomDrop.map((item) => (
          <div className={`flex-col py-4 ${item.color}`}>
            <img src={item.weapon} alt="weaponColor" />
            <p className="text-xs text-white opacity-60 pl-2.5 mt-4">
              {item.nameWeapon}
            </p>
            <p className="text-lg text-white pt-1 pl-2.5">{item.nameSkins}</p>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Nerd;
