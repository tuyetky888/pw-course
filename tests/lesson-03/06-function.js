// 1. Viết hàm multiply

    function multiply(a,b) {
        return a*b;
    }

    console.log(multiply(2,4));
    console.log(multiply(5,8));

// 2. Viết hàm findMin

    function findMin(a,b,c) {
        if (a <= b && a <= c){
            return a;
        }else if (b <= a && b <= c){
            return b;
        }else {
            return c;
        }
    }

    console.log(findMin(4,8,3));
    console.log(findMin(6,6,9));

// 3. Viết hàm getTopStudents

    let students = [
        {name: 'rose', score: 8},
        {name: 'tuna', score: 9},
        {name: 'bill', score: 7},
        {name: 'mary', score: 2},
        {name: 'myan', score: 10},
    ];

    function getTopStudents(students, threshold) {
        let topStudents = [];
        for (i = 0; i < students.length; i++){
            if (students[i].score >= threshold) {
            topStudents.push(students[i].name);
        }
        }
        return topStudents;
    }

    console.log(getTopStudents(students, 8));

// 4. Viết hàm calculateInterest

    function calculateInterest(principal, rate, years) {
        let total = principal + principal*rate*years;
        return total;
    }

    console.log(calculateInterest(600, 0.06, 3));
