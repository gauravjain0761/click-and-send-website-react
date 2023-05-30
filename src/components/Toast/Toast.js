import cogoToast from "cogo-toast";
class Toaster {
    success = message => {
      let options = { position: "top-right" };
      cogoToast.success(message, options);
    };
  
    error = message => {
      let options = { position: "top-right" };
      cogoToast.error(message, options);
    };
  
    info = message => {
      let options = { position: "top-right" };
      cogoToast.info(message, options);
    };
  }
  
  export const toast = new Toaster(); 
  