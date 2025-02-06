const Footer = () => {
  return (
    <footer className="z-40 flex flex-col justify-end items-center mt-10 pb-2">
      <img
        src="/images/logo-footer.png"
        alt="logo casa magna"
        className="w-[150px]"
      />
      <p className="text-center text-[11px]">
        <span className="font-bold">*Aplican T&C </span>conócelos en:{" "}
        <a
          href="https://www.casa-magna.com/terminos-y-condiciones-evento-magniversario"
          target="_blank"
          className="font-extralight underline"
        >
          www.casa-magna.com
        </a>{" "}
      </p>
      <p className="text-center text-[11px]">
        Actividad sujeta a cambios. Premios hasta agotar existencias.
      </p>
    </footer>
  );
};

export default Footer;
