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

//we use assign() method  to clone object
let New_Employee = Object.assign({}, Retireing_Employee);

New_Employee.firstName = 'Naru'; // Only this firstName is Changed
//from here all previous data is same no change is happening i.e updated data is not really updated 
New_Employee.address.street = 'Railway nagar'; 
New_Employee.address.city = 'Gujrat'; 

console.log(New_Employee);
//output is conly firstname is Naru rest all info is of Retireing_Employee