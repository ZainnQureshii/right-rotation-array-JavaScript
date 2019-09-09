function rightRotationArray(tmpArr, rotation){
  let arr = [];
  let newArray = [];
  let firstIndex = 0;

  // Creating Array from the given input: tmpArr
  for(let i = 1; i<=tmpArr; i++){
    arr.push(i);
  }
  console.log('Original Arr',arr)

  // Repeating Rotations by 1 according to user input: rotation
  for(i = 1; i<=rotation; i++) {

    newArray = [...arr];
    
    // Assigning the rotated values of arr to newArray
    for(let j = 0; j < newArray.length; j++){
      if(newArray[j+1] <= newArray.length) {
        newArray[j+1] = arr[j];
      } else {
        // firstIndex = newArray[0]; 
        newArray[0] = arr[arr.length-1];
      }
    }
    console.log('Rotation ',i ,newArray)
    arr = [...newArray];
  }
}

// 1st Parameter is length of the Array
// 2nd Parameter is the rotations to the left
rightRotationArray(5, 2);