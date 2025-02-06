"use client";
const CardCookingCourse = ({ course, itemCarrousel = false }) => {
  const myStyles = {
    backgroundImage: `url(${
      itemCarrousel ? course.squareBackground : course.thinBackground
    })`,
  };
  return (
    <article
      className={`flex flex-col items-center justify-end gap-3 pb-8 text-[#FFFFFF] px-4 rounded-[25px] border-[1px] ${
        itemCarrousel
          ? "snap-center shrink-0 w-[306px] h-[256px]"
          : "w-[217px] h-[327px] px-4"
      }`}
      style={myStyles}
    >
      <header className="flex flex-col items-center">
        <h4 className="text-center font-bold text-[15px] lg:text-[19px] w-[100%] leading-6">
          {course.text}
        </h4>
        <img
          src={course.icon}
          alt="icono de curso de cocina"
          className="mt-1"
        />
      </header>
      <div className="bg-[#FFFFFF] h-[1.5px] w-[92%]"></div>
      <div className="flex gap-2">
        <p className="flex gap-[4px] text-[12px]">
          <img src="/icons/fi-rr-calendar.svg" alt="icono calendario" />
          {course.date}
        </p>
        <p className="flex gap-[4px] text-[12px]">
          <img src="/icons/fi-rr-alarm-clock.svg" alt="icono reloj" />
          {course.time}
        </p>
      </div>
    </article>
  );
};

export default CardCookingCourse;
