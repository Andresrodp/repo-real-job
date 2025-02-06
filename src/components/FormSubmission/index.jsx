"use client";
import { useState, useEffect } from "react";
import InputForm from "@/components/InputForm";
import SelectForm from "@/components/SelectForm";
import ButtonPage from "@/components/ButtonPage";
import { validateDocument, submitForm } from "@/utils/serverActions";
import { optionsSelectCity } from "@/constants";
import AlertIcon from "@/components/AlertIcon";

const FormSubmission = ({ toggleStatusSubmit }) => {
  const [name, setName] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [errorDocumentDuplicate, setErrorDocumentDuplicate] = useState("");
  const [optionsSelectcourse, setOptionsSelectcourse] = useState([{}]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "document_number":
        setDocumentNumber(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "city":
        setCity(value);
        break;
      case "course":
        setCourse(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const fetchOptionsCourses = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/optionscourse?city=${city}`
      );
      const data = await response.json();
      if (data.length === 0)
        return setOptionsSelectcourse([
          { label: "No hay cupos disponibles", value: "" },
        ]);
      setOptionsSelectcourse(data);
    };
    fetchOptionsCourses();
  }, [city]);

  const disableButton = () => {
    if (
      name === "" ||
      documentNumber === "" ||
      phone === "" ||
      email === "" ||
      city === "" ||
      course === "" ||
      loading ||
      errorDocumentDuplicate
    ) {
      return true;
    }
    return false;
  };
  const resetInputs = () => {
    setName("");
    setDocumentNumber("");
    setPhone("");
    setEmail("");
    setCity("");
    setCourse("");
    setError("");
    setErrorDocumentDuplicate("");
  };
  const handleBlur = async (event) => {
    const value = event.target.value;
    const response = await validateDocument(value);
    if (response) {
      setError("");
      setErrorDocumentDuplicate(response.message);
    } else {
      setErrorDocumentDuplicate("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const userSubmit = {
      name,
      document_number: documentNumber,
      phone,
      email,
      city,
      course_code: course,
      origin_submission: "cooking_lessons",
    };
    const response = await submitForm(userSubmit);
    if (response.error) {
      setError(response.message);
      setLoading(false);
      return;
    }
    if (!response.error) {
      toggleStatusSubmit();
      resetInputs();
    }
    setLoading(false);
  };

  return (
    <section className="flex flex-col items-center w-full lg:pt-2 xl:w-4/5">
      <h1 className="text-[#D11A26] text-center text-[18px] xl:text-[27px] lg:w-full xl:leading-7">
        Celebremos <br /> con clases de cocina <br />
        <span className="text-[#D11A26] font-bold text-center text-[40px] lg:text-[35px] xl:text-[61px] w-[24rem] xl:leading-[4rem] lg:w-full">
          ¡GRATIS!
        </span>
      </h1>
      <p className="text-red-600 text-[13px] lg:text-[16px] font-medium flex items-center gap-1">
        <AlertIcon /> Cupos agotados en todas las ciudades
      </p>
      <p className="text-[#737373] font-semibold text-center text-[18px] xl:mt-4 lg:w-full">
        Inscríbete en tu ciudad y participa
      </p>
      {errorDocumentDuplicate && (
        <p className="text-red-500 text-base xl:mt-4 xl:leading-3">
          {errorDocumentDuplicate}
        </p>
      )}
      {error && (
        <p className="text-red-500 text-base xl:mt-4 lg:leading-3">{error}</p>
      )}
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="flex flex-col text-black p-4 lg:p-2 w-full gap-1 lg:w-[95%] xl:w-[90%]"
      >
        <InputForm
          label="Nombre completo"
          typeInput="text"
          value={name}
          handleChange={handleChange}
          name="name"
          width={"w-full"}
        />
        <div className="w-full flex flex-col lg:flex-row gap-2">
          <InputForm
            label="Cédula"
            typeInput="text"
            value={documentNumber}
            handleChange={handleChange}
            name="document_number"
            validateOnBlur={true}
            funtionOnBlur={handleBlur}
            width={"w-full lg:w-1/2"}
          />
          <InputForm
            label="Número de celular"
            typeInput="text"
            value={phone}
            handleChange={handleChange}
            name="phone"
            width={"w-full lg:w-1/2"}
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-2">
          <InputForm
            label="E-mail"
            typeInput="text"
            value={email}
            handleChange={handleChange}
            name="email"
            width={"w-full lg:w-1/2"}
          />
          <SelectForm
            label="Ciudad"
            value={city}
            options={optionsSelectCity}
            onChange={handleChange}
            blockSelect
            name="city"
            width={"w-full lg:w-1/2"}
          />
        </div>
        <SelectForm
          label="Elige la clase en la que deseas participar"
          value={course}
          options={optionsSelectcourse}
          blockSelect={city === "" ? true : false}
          onChange={handleChange}
          disclaimer={"sujeto a disponibilidad de cupos"}
          name="course"
          width={"w-full"}
        />
        <ButtonPage
          text={"Registrarme"}
          typeButton={"submit"}
          validateDisable={disableButton}
        />
      </form>
    </section>
  );
};

export default FormSubmission;
