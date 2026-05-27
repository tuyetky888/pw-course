// 1. Tạo object car

let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021
};

console.log(car.year);

// 2. Tạo object person
let person = {
    name: 'Rose',
    address: {
        street: 'Tran Phu',
        city: 'Ha Long',
        country: 'Viet Nam'
    }
};

console.log(person.address.street);

// 3. Tạo object student

let student = {
    name: 'Mary',
    grades: {
        math: 9,
        english: 8
    }
};

console.log(student.grades['math']);

// 4. Tạo object settings

let settings = {
    volume: 8,
    brightness: 5
};

settings.volume = 3;

console.log(settings.volume);

// 5. Tạo object bike

let bike = {
    type: '2 wheels',
    brand: 'abc'
};

bike.color = 'pink';

console.log(bike);

// 6. Tạo object employee

let employee = {
    name: 'David',
    age: 26
};

delete employee.age;

console.log(employee);

// 7. Tạo object school

let school = {
    classA: ['An', 'Binh', 'Chau'],
    classB: ['Đào', 'Hương', 'Giang']
};

console.log(school);
