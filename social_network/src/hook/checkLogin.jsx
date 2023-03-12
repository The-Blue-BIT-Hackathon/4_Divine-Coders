export function checkLogedIn() {
    const savedData = localStorage.getItem("user");
    
    if (savedData != null) return true;
    else return false;
  }
  
  export default checkLogedIn;