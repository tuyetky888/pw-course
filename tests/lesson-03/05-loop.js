// 1. Tính tổng từ 1 đến 100

    let total = 0;

    for (let i = 1; i <= 100; i++) {
        total = total + i;
    }

        console.log(total);

// 2. In bảng cửu chương từ 2 đến 9

for (let i = 2; i < 10; i++) {
    console.log(`Bảng cửu chương ${i}`);
    for(let j = 1; j < 10; j++) {
        console.log(`${i}*${j} = ${i*j}`);
    }
}

// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99
    let arr3 = [1];
    for (let i = 3; i < 100; i = i + 2) {
        arr3.push(i);
    }

        console.log(arr3);

// 4. In ra 10 email dựa trên tên người dùng và số thứ tự

    for (let i = 1; i <= 10; i++) {
        console.log(`rose${i}@gmail.com`);
    }

// 5. Tính ra tổng doanh thu của 12 tháng trong năm
    
    let doanhThu = [
        {month: 1, total: 150},
        {month: 2, total: 100},
        {month: 3, total: 250},
        {month: 4, total: 300},
        {month: 5, total: 350},
        {month: 6, total: 400},
        {month: 7, total: 450},
        {month: 8, total: 500},
        {month: 9, total: 550},
        {month: 10, total: 600},
        {month: 11, total: 650},
        {month: 12, total: 700},
    ]

    let tongDoanhThu = 0;

    for (let i = 0; i < doanhThu.length; i++) {
        tongDoanhThu = tongDoanhThu + doanhThu[i].total;
    }

    console.log(tongDoanhThu);
