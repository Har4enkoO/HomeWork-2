let n = +(prompt("Введіть нижнє ціле значення"));
while (n == NaN || (n - Math.floor(n) != 0) || n == "") {
    n = +(prompt("Введіть нижнє ціле значення"));
}
let m = +(prompt("Введіть верхнє ціле значення"));
while (m == NaN || (m - Math.floor(m) != 0) || n == "") {
    m = +(prompt("Введіть верхнє ціле значення"));
}
let b = confirm("Чи необхідно враховувати парні значення");
let sum = 0;
if (b) {
    for (let i=n; i<m+1; i++) {
        sum+=i;
    }
} else if (b == false && (n%2==0)) {
    for (let i = n+1; i<m+1; i+=2) {
        sum+=i;
    }
} else {
    for (let i = n; i<m+1; i+=2){
        sum+=i;
    }
}
document.writeln("Сума всіх вибраних значень = " + sum);
