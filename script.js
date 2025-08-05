const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Results = []; // اینجا نباید Square, Even, Plus باشه چون اون متغیر نیستن

Results[0] = nums.map(n => n * n);           // مربع اعداد
Results[1] = nums.filter(n => n % 2 === 0);  // فقط زوج‌ها
Results[2] = nums.reduce((acc, n) => acc + n, 0); // جمع اعداد

Results.forEach((r) => {
    console.log(r);
});
