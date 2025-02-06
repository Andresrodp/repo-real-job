import ListCookingCourses from "../ListCookingCourses";
import { courses } from "@/constants";
const ContentCookingCourses = ({ styleVisibility = "" }) => {
  return (
    <main
      className={`z-10 w-full bg-[#F7F7F7] flex-col items-center pt-8 lg:w-[95%] lg:rounded-tl-[20px] lg:self-end ${styleVisibility}`}
    >
      <p className="text-[#CE2828] font-normal w-3/5 text-[18px] lg:w-full lg:text-[30px] text-center lg:leading-6">
        En nuestra casa celebramos a lo grande
      </p>
      <h2 className="w-9/12 font-bold text-[#CE2828] text-[25px] lg:w-full lg:text-[44px] text-center">
        ¡Cocinemos juntos!
      </h2>
      <ListCookingCourses listCourses={courses} />
    </main>
  );
};

export default ContentCookingCourses;
