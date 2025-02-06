import styles from "./index.module.css";

const InputForm = ({
  label,
  typeInput,
  value,
  handleChange,
  name,
  validateOnBlur = false,
  funtionOnBlur,
  width,
}) => {
  return (
    <div className={`flex flex-col ${width}`}>
      <label className="font-medium text-[#101010] text-[12px]" htmlFor="name">
        {label}
      </label>
      <input
        className={`bg-[#D0D0D0] px-4 py-[.4rem] border-[1px] border-solid outline-none border-[#DCDCDC] rounded-[10px] w-full focus:border-[#f81c1a] focus:border-[1px]`}
        type={typeInput}
        value={value}
        name={name}
        onBlur={validateOnBlur ? (e) => funtionOnBlur(e) : null}
        id={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputForm;
