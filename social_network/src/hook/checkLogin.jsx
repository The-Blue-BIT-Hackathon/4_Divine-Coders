export function checkLogedIn() {
    const savedData = localStorage.getItem("token");
    
    if (savedData != null) return true;
    else return false;
  }
  
  export default checkLogedIn;