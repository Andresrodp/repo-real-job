import styles from "./index.module.css";

const ButtonPage = ({
  typeButton,
  actionClick,
  validateDisable,
  specificStyles,
  text,
  file = null,
}) => {
  return actionClick === "download" ? (
    <a
      href={file}
      download
      className={`rounded-[10px] bg-gradient-to-tr bg-[#C11111] from-[#C92122] px-4 py-[.6rem] shadow-[2px_2px_5px_rgba(0,0,0,0.3)] w-fit text-[#FFFFFF] text-[14px] self-center mt-4 ${specificStyles}`}
    >
      {text}
    </a>
  ) : (
    <button
      type={typeButton}
      disabled={validateDisable()}
      className={`rounded-[10px] ${
        validateDisable()
          ? "bg-gradient-to-tr bg-[#DEDEDE] from-[#656565]"
          : "bg-gradient-to-tr bg-[#C11111] from-[#C92122]"
      } px-4 py-[.6rem] w-fit text-[#FFFFFF] text-[14px] shadow-[2px_2px_5px_rgba(0,0,0,0.3)] self-center mt-4 `}
    >
      {text}
    </button>
  );
};

export default ButtonPage;
