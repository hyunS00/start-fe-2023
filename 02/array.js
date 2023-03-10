// var words = ['a','b','c'];
// // c
// console.log(words.pop(),words);

// words.push('d');
// console.log(words);

// console.log(words.join('-'));
// console.log(words);

// var num = [1, 2, 3];
// console.log(words.concat(num));

// const words = [1, 2, 3];
// console.log(words.unshift("z"));
// console.log(words);

var nums = [1,2,3,4,5];
var newNums = [];


// for(i=0;i<nums.length;i++){
//     if(nums[i]>=3){
//         newNums.push(nums[i]);
//     }
// }

var newNums = nums.filter(function(num){
    return num >=3;
})
.map(function(num){
    return num+10;
});

console.log(newNums);