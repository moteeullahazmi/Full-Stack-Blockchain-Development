//  this
    // This keyword is refer the Object.

function student (name, age, yop, high_qua, dob){
    this.name=name;
    this.age=age;
    this.yop=yop;
    this.high_qua=yop;
        this.      dob=       dob;
    //  pointer  attribute    value         
}
    //CONSTRUCTOR is Object.

       //object_type object_name= new(initilization keyword)  constructor
         //let          student1=    new                      student();
    // console.log(student1);              //UNDEFINED VALUE ALL   

    /*
        let a;
        MEMORY STACK
        RAM
        1000- constructor
        1001- object
        1002- this.name
        1003-
    */

        //Value INSERTING

        let student1= new student("Moteeullah Azmi",21, 2022, "B.tech",2000);
        let student2= new student("Mohd Adil Khan",22, 2022, "B.tech",2001);
        let student3= new student("Mohd Sadique",21, 2023, "B.tech",2000);
        let student4= new student("Emad khan",21, 2022, "B.tech",2000);
        let student5= new student("Saif Ahmad Khan",21, 2022, "B.tech",2000);

        console.log(student1); 

