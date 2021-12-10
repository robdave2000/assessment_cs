const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);




function addToZero(nums)
{
  for (let i = 0; i < nums.length; i++)
  {
    for (let j = 0; j < nums.length; j++)
    {
      if (i === j)
      {
      }
      else
      {
        if ((nums[i] + nums[j]) === 0)
        {
          console.log('True\n')
          return true
        }
      }
    }
  }
  console.log('False\n')
  return false
}

addToZero([]);
//runtime 1ops

addToZero([1]);
//runtime 2ops

addToZero([1, 2, 3]);
//runtime 10ops
addToZero([1, 2, 3, -2]);
//runtime 17ops

function hasUniqueChars(word)
{
  for (let i = 0; i < word.length; i++)
  {
    for (let j = 0; j < word.length; j++)
    {
      if (i === j)
      {
      }
      else
      {
        if (word[i] === word[j])
        {
          console.log('False\n')
          return false
        }
      }
    }
  }
  console.log('True\n')
  return true
}

hasUniqueChars("Monday");
//runtime 37ops

hasUniqueChars("Moonday");
//runtime 50ops

function findLongestWord(words)
{
  let largeLength = 0

  for (let i = 0; i < words.length; i++)
  {
    if (i === 0)
    {
      largeLength = words[i].length
    }
    else
    {
      if (words[i].length > largeLength)
      {
        largeLength = words[i].length
      }
    }
  }

  console.log(largeLength)
}

findLongestWord(["hi", "hello"]);
//runtime 3ops
