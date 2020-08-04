function takeANumber(currentLine, newName) {
  //Push newName into currentLine ArrayBuffer
  currentLine.push(newName);
  
  //Return line position (array.length)
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`
  
};

function nowServing(katzDeliLine) {
  
  //Remove first person from array and store as variable
  const firstCustomer = katzDeliLine.shift();

  //If array is empty, return "The line is currently empty."
  if (katzDeliLine.length === 0) {
      return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${firstCustomer}.`;
  };

}