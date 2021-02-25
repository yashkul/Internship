function Student(sid,name,year,percentage)
{
    this.sid=sid;
    this.name=name;
    this.year=year;
    this.percentage=percentage;
}
//here we write a constructor and passing values as arguments to it which then we can assess via object in this case it is James. 
James = new Student(007,"James Bond",1960,89.77);
console.log(James);
console.log('Student name = '+James.name+'\nStudent sid = '+James.sid+'\nStudent Passing year = '
+James.year+'\nStudent Passing Percentage = '+James.percentage);