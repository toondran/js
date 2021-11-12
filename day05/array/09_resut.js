// 1부터 10까지의 홀수를 사용 합을 구하고 그 합이 배열의 맨 뒤에 추가

var nums=[1,3,5,7,9];
var sum=0;

// 홀수의 합 구하기

for(var i=0; i<nums.length; i++){
    sum += nums[i];
}

nums.push(sum);

{document.write(nums[i]+" ");
}


for(var i in nums){
    document.write(nums[i]+" ");
}