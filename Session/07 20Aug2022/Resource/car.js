class Car{
    constructor(name,brand,com,total_sales){
      this.name = name;
      this.brand=brand;
      this.com=com;
      this.total_sales=total_sales;
    }
  }
  
  class Child extends Car{
    
    constructor(name,brand,com,total_sales,engine,transmission,seating,capacity,price,yol){
      super(name,brand,com,total_sales);
      this.engine =engine;
      this.transmission=transmission;
      this.seating=seating;
      this.capacity=capacity;
      this.price=price;
      this.yol=yol;
    }
    greeting(){
      console.log(`The properties of the Car and Child class are ${this.name} ${this.brand} ${this.com} ${this.total_sales} ${this.engine} ${this.brand} ${this.transmission} ${this.seating} ${this.capacity} ${this.price} ${this.yol}`);
    }
  
  }
  
  let vista = new Child('Maruti','tata','erwe','3434','vista','diesal',2,34,23123,2012);
  vista.greeting();
  