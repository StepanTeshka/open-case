import Icons from "../components/ui/Icons";
import { useState } from "react";
import { InputOverlay } from "./InputOverlay";

function Select({
  placeholder,
  label,
  selectClasses,
  className,
  handleClick,
  selectVariantButton,
  activeSelect,
}) {
  const [isSelect, setSelect] = useState(false);

  return (
    <InputOverlay label={label} inputContainerClasses={className}>
      <div
        className={`px-3 rounded flex items-center justify-between relative gap-2 flex-shrink-0 text-sm cursor-pointer ${selectClasses} ${
          isSelect ? `drop-shadow-[0_3px_5px_rgba(0,0,0,0.25)] z-50` : ``
        }`}
        onClick={() => {
          setSelect(!isSelect);
        }}
      >
        <img
          alt="language"
          src={
            activeSelect === `English`
              ? `img/emojione-v1_flag-for-united-states.png`
              : `img/китай.png`
          }
        />
        <p className="text-lg text-white">{activeSelect || placeholder}</p>

        <Icons
          name="DownArrow"
          className={isSelect === true ? `rotate-180` : ``}
        />
      </div>
      <div
        className={`flex flex-col w-full rounded z-40 drop-shadow-[0_3px_5px_rgba(0,0,0,0.25)] absolute  ${
          isSelect ? `flex` : `hidden`
        } `}
      >
        {selectVariantButton?.map((item, index) => (
          <button
            className={`text-left px-3 text-lg text-white hover:bg-primary-500 flex items-center gap-2 ${selectClasses}`}
            onClick={(evt) => {
              handleClick(evt);
              setSelect(false);
            }}
            value={item.value}
            key={index}
          >
            <img alt="language" src={item.src} className="img" />
            <p>{item.title}</p>
          </button>
        ))}
      </div>
    </InputOverlay>
  );
}

export default Select;
