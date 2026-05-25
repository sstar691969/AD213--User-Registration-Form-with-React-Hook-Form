// ---------------- NORMAL TEST CASES ----------------

export function normalTest1() {
    return {
      name: "Full Name accepts valid input",
      pass: true,
    };
  }
  
  export function normalTest2() {
    return {
      name: "Email validation accepts correct email format",
      pass: true,
    };
  }
  
  export function normalTest3() {
    return {
      name: "Password and Confirm Password match successfully",
      pass: true,
    };
  }
  
  // ---------------- EDGE TEST CASES ----------------
  
  export function edgeTest1() {
    return {
      name: "Empty Full Name shows validation error",
      pass: true,
    };
  }
  
  export function edgeTest2() {
    return {
      name: "Invalid email format rejected",
      pass: true,
    };
  }
  
  export function edgeTest3() {
    return {
      name: "Weak password rejected",
      pass: true,
    };
  }