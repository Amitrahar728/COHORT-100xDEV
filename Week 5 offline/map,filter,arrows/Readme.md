Map and filter : helper functions 

Arrow : another way to write function 
first way to write functions 

function sum(a,b){
    return a+b;
}

const sum = (a,b)=>{
    return a+b;
}
<!--  there is a difference between these two in binding of return but not now  -->


----------------------------------------------------------------------------------------------------------------------
map , filter 
<!--  if the problem is like a same change in complete array like multiply every element by 2 then we can use  map -->


map is a defined function 
syntax :-

function transform(i){
    return i*2;
}

const ans = input.map(transform);
or 
const ans = input.map(function(i){
return i*2;
})
console.log(ans);
<!-- // this will give us the output by applying the transform function -->


-----------------------------------------------------------------------------------------------------------------------

<!-- filter : filter out some special values from the given array based upon which are following the provided constraint. -->

arr.filter(filtering logic function);


<!-- Assignment: map function which  -->