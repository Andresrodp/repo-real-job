import ButtonPage from "@/components/ButtonPage";
const ConfirmationMessage = () => {
  return (
    <section className="flex flex-col items-center xl:pt-10">
      <img
        src="/images/ticket.png"
        className="w-[240px] lg:w-[350px]"
        alt="ticket magniversario"
      />
      <h2 className="font-bold text-[#CE2828] text-[23px] text-center w-2/3 leading-10 lg:text-[24px]">
        Reclama un premio especial para ti
      </h2>
      <p className="text-[13px] text-[#737373] text-center font-semibold mt-4">
        Descarga tu Golden ticket
      </p>
      <ButtonPage
        actionClick={"download"}
        text={"Reclamar tu Golden Ticket"}
        file={"/golden-ticket.pdf"}
      />
    </section>
  );
};

export default ConfirmationMessage;
