"use client";
import CardCookingCourse from "@/components/CardCookingCourse";
import Carrousel from "@/components/Carrousel";

const ListCookingCourses = ({ listCourses }) => {
  return (
    <>
      <section className="hidden lg:flex w-full justify-center flex-wrap mt-12 gap-4">
        {listCourses?.map((course) => (
          <CardCookingCourse key={course.id} course={course} />
        ))}
      </section>

      <section className="w-[390px] flex flex-col mt-12 z-10 lg:hidden">
        <Carrousel listCourses={listCourses} />
      </section>
    </>
  );
};

export default ListCookingCourses;
