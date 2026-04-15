function addBinary(a: string, b: string): string {
  let result = [];
  let longerBin = a.length > b.length ? a : b;
  let baseB = b.length - 1;
  let baseA = a.length - 1;
  let plus = 0;
  for (let i = longerBin.length - 1; i >=0; i--){
    if (a.length === longerBin.length){
        let res = Number(a[i]) + Number(b[baseB] ?? 0) + plus;
        if (res > 1){
            plus = 1
        }else{
            plus = 0
        }
        console.log(res)
        let currRes = res % 2;
        result.unshift(currRes);
        baseB--;
    }else{
        let res = Number(b[i]) + Number(a[baseA] ?? 0) + plus;

        if (res > 1){
            plus = 1
        }else{
            plus = 0
        }
        let currRes = res % 2;
        result.unshift(currRes);
        baseA--;
    }
  }

  if (plus){
    result.unshift(plus)
  }
  return result.join("")

};

console.log(addBinary("11", "1")); // "100"
console.log(addBinary("1010", "1011")); // "10101"