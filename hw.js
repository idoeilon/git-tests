const check = (num) =>{ 
if (num === 0) return true;
if (num<0) return false;

return check (num - 3);
}

for (let i = 1; i <= 15; i++){

 if (check(i)) {
  console.log(i);
 }
}