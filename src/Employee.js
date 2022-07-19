import React from "react";

// Rest
//component drilling
// Spread Operator : ...
export default function Employee({ employee, ...props }) {
  
   // destructuring
  const { firstName, lastName, age, id, ...other } = employee;

  // String interpolition
  // conditional rendering react 
  return (
    <article className="person">
      <img src={`./images/${id}.jpg`}  alt={firstName} />
      <div>
        <h4>{firstName} {lastName}</h4>
        <p>{age} years old.</p>
      </div>
    </article>
  );
  
}

