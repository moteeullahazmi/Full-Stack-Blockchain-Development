//OOP concepts-
//abstraction
//inheritance
//pass by value and reference
//coding practice

//class is used to define the object behaviour
class Person{

    //a class can have only one constructor
    //you need to define all the attributes of class in the body of the constructor
    constructor(name,age,high_qual,desig,city,nationality,salary=100,gender="F"){

        //this keyword is used to point to the current object of the class
        this.name = name;
        this.age = age;  
        this.high_qual=high_qual;
        this.desig=desig;
        this.city=city;
        this.nationality=nationality;
        this.salary=salary;
        this.gender=gender;
    }

    
    greet(){
        console.log(`Hello ${this.name}`);
        console.log(this.age);
        console.log(this.high_qual);
        console.log(this.desig);
        console.log(this.city);
        console.log(this.nationality);
        console.log(this.gender);
        console.log(this.salary);     
    }
}

//let person1= new Person("sanjeevan",23);
//let person1 = new Person("Payal", 23, "phd", "assistant prof", "delhi", "indian", "50000", "F")
/*
let person5=new Person("Moteeullah Azmi", 21, "B.tech", "Azamgarh", "Indian",  "Male")
*/

/*
Parent Class- Person
1 child class- Student- behave exactly like Person class
1 child class- Child - behave exactly like Student class -> behave exactly like Person class  
*/

class Student extends Person{
    constructor(name,high_qual,dob,college_name){

        //super points to the constructor of the parent class
        //using super -> the derived class mimics behaviour of parent class
        super(name,high_qual);
   
        this.name=name;
        this.xyz=high_qual;
        this.dob=dob;
        this.college_name=college_name;

       /*
        this.name=name;
        this.age=age;
        this.high_qual=high_qual;
        this.desig=desig;
        this.city=city
        */
    }

    greet_student(){
        console.log(this.name);
        console.log(this.xyz);
        console.log(this.dob);
        console.log(this.college_name);
        /*
        console.log(this.age);
        console.log(this.high_qual);
        console.log(this.desig);
        console.log(this.city);
        */
    }
}

let student1=new Student("sanjeevan","Blockchain","1998","PVGCOET");


student1.greet_student();

//let child1=new Child("sanjeevan",23,"B.tech","Blockchain developer","banglore","Indian",1000,8);

//child1.greet();

/*
create a car class- name,brand,com,total_sales
child class- engine,transmission,suspension,seating capacity,price,yol
*/

class Student extends Person{
    constructor(name,high_qual,dob,college_name){

        //super points to the constructor of the parent class
        //using super -> the derived class mimics behaviour of parent class
        super(name,high_qual);
   
        this.name=name;
        this.xyz=high_qual;
        this.dob=dob;
        this.college_name=college_name;

       /*
        this.name=name;
        this.age=age;
        this.high_qual=high_qual;
        this.desig=desig;
        this.city=city
        */
    }

    greet_student(){
        console.log(this.name);
        console.log(this.xyz);
        console.log(this.dob);
        console.log(this.college_name);
        /*
        console.log(this.age);
        console.log(this.high_qual);
        console.log(this.desig);
        console.log(this.city);
        */
    }
}

//let student1=new Student("sanjeevan","Blockchain","1998","PVGCOET");


student1.greet_student();

//let child1=new Child("sanjeevan",23,"B.tech","Blockchain developer","banglore","Indian",1000,8);

//child1.greet();

/*
create a car class- name,brand,com,total_sales
child class- engine,transmission,suspension,seating capacity,price,yol
log everything in child class
*/


