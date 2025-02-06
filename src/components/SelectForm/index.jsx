const SelectForm = ({
  options,
  value,
  name,
  label,
  onChange,
  width,
  disclaimer,
  blockSelect = false,
}) => (
  <div className={`flex flex-col ${width}`}>
    <label className="font-medium text-[12px] text-[#101010]" htmlFor={name}>
      {label}
    </label>
    <select
      className="bg-[#D0D0D0] px-4 py-[.4rem] border-[1px] border-solid border-[#DCDCDC] rounded-[10px] w-full"
      name={name}
      id={name}
      disabled={blockSelect}
      onChange={onChange}
      value={value}
    >
      <option value="" key={"empty"}>
        Selecciona una opción
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {disclaimer && <p className="text-xs text-gray-400 ml-2">*{disclaimer}</p>}
  </div>
);

export default SelectForm;
