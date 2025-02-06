const InitialView = () => {
  return (
    <section className="flex flex-col min-h-[38vh] pt-16 z-40 lg:h-[inherit] lg:w-[40%] lg:pt-10 xl:pt-24 2xl:pt-32">
      <img
        src="/images/logo-magniversario.webp"
        alt="Logo de la aplicación"
        className="w-[250px] lg:w-[548px] 2xl:w-[650px]"
      />
      <h2 className="text-[#FFFFFF] text-center text-[18px] w-3/5 xl:text-[27px] lg:w-full xl:leading-7 lg:hidden">
        Clases de cocina <br />
        <span className="font-bold text-center text-[40px] lg:text-[35px] xl:text-[61px] w-[24rem] xl:leading-[4rem] lg:w-full">
          ¡GRATIS!
        </span>
      </h2>
    </section>
  );
};

export default InitialView;
