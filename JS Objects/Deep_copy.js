let Retireing_Employee = {
    firstName: 'Tanishq',
    lastName: 'Jha',
    address: {
        street: 'Bangali Bura',
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'INDIA'
    }
};

//we convert object to JSON and again JSON to Object and copy it to new object i.e New_Employee in this case
let New_Employee = JSON.parse(JSON.stringify(Retireing_Employee));
//As reference are different any changes to New_Employee will not Affect To Retireing_Employee
New_Employee.firstName = 'Naru'; 
New_Employee.lastName = 'Modi';
New_Employee.address.street = 'Railway nagar';
New_Employee.address.city = 'Gujrat';

console.log(New_Employee);