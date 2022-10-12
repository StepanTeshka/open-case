import { Link } from "react-router-dom";

const CasesPage = () => {
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
  const userChat = [
    { name: "fitz" },
    { name: "fitz" },
    { name: "fitz" },
    { name: "fitz" },
    { name: "fitz" },
    { name: "fitz" },
    { name: "fitz" },
  ];
  const cases = [
    {
      case: "/img/zadrot 1.png",
      price: "10 $",
      link: "/case/nerd",
    },
    { case: "/img/zadrot 1.png", price: "3 free spins", link: "/case/nerd" },
    { case: "/img/zadrot 1.png", price: "10 $", link: "/case/nerd" },
    { case: "/img/zadrot 1.png", price: "10 $", link: "/case/nerd" },
    { case: "/img/zadrot 1.png", price: "10 $", link: "/case/nerd" },
    { case: "/img/zadrot 1.png", price: "10 $", link: "/case/nerd" },
  ];

  return (
    <main className="flex flex-col mb-10">
      <div className="mt-8 grid grid-cols-12 mx-20">
        {reward.map((item) => (
          <div className="h-20 w-20 overflow-hidden">
            <img src={item.weapon} alt="weapon" />
          </div>
        ))}
      </div>
      <div className="flex">
        <div className="w-80 bg-[#191C1F] pt-6 pl-11 pr-16 pb-8 mt-20">
          <h3 className="text-white text-2xl">Chat</h3>
          <div className="flex flex-col gap-4 mt-11">
            {userChat.map((item) => (
              <div className="flex gap-2">
                <img
                  src="/img/Ellipse 10.png"
                  alt="avataruser"
                  className="w-8 h-8"
                />

                <div className="flex flex-col gap-2">
                  <h4 className="text-xs text-white">{item.name}</h4>
                  <p className="text-white opacity-50 text-[10px]">
                    And there is no doubt that the Internet analytics done on
                    the database are only exceptions.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-1 bg-[#080C11] mt-11"></div>
          <input
            placeholder="send a message"
            className="bg-[#080C11] mt-8 rounded-lg px-3 w-full py-2"
          />
        </div>
        <div className="flex flex-col items-center w-full ml-20 mr-16 mt-20">
          <h1 className="text-[80px] text-white">Wih a prize</h1>
          <div className="grid grid-cols-3 gap-8 w-full mt-20">
            {cases.map((item) => (
              <Link to={item.link}>
                <div className="w-full h-full">
                  <div className="relative w-full h-fit flex justify-center items-center">
                    <div className="w-full h-full absolute rounded-2xl box" />
                    <img src={item.case} alt="case" className=" z-50" />
                  </div>
                  <p className="text-white text-2xl mt-4">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default CasesPage;
