import React, { useState } from "react";

const EmploymentDetailStack = () => {
  let [stack, setStack] = useState(["React", "TypeScript", "Next"]);
  return (
    <div className="employmentDetailStack">
      {stack.map((data, i) => {
        return <div className="employmentDetailStack_div">{stack[i]}</div>;
      })}
    </div>
  );
};

export default EmploymentDetailStack;
