"use client";
import { useState, useEffect, useRef } from "react";
import CardCookingCourse from "../CardCookingCourse";

const Carrousel = ({ listCourses }) => {
  return (
    <div className="snap-x snap-mandatory overflow-scroll flex items-center gap-2 px-16">
      {listCourses?.map((course) => (
        <CardCookingCourse key={course.id} course={course} itemCarrousel />
      ))}
    </div>
  );
};

export default Carrousel;
