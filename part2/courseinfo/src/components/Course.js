import React from 'react';

const Header = ({ course }) => <h2 key={course.id}>{course.name}</h2>;

const Part = ({ part }) => (
  <div>
    {part.name} {part.exercises}
  </div>
);

const Content = ({ parts }) =>
  parts.map((part) => <Part key={part.id} part={part} />);

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0);
  return <h3>total of {total} exercises</h3>;
};

const Course = ({ courses }) =>
  courses.map((course) => (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  ));

export default Course;
