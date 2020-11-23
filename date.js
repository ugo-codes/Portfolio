

// this external local module hanles the greeting and returns it
exports.getHour = () => {

  // the hour of the time is gotten
  let hour = new Date().getHours();

  let greeting = "";

  // the if statement checks the time inorer to get the correct greeting
  if(hour < 12){
    greeting = "Good Morning!"
  }else if(hour >= 12 && hour <= 16){
    greeting = "Good Afternoon!"
  }else if(hour >= 17 && hour <= 23){
    greeting = "Good Evening!"
  }

  // the greeting is being returned and the server (app.js) receives it and sends it to the client
  return greeting;
}
