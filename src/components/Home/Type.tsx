import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="font-Oswald">
      <Typewriter
        options={{
          strings: [
            "Frontend Developer"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
