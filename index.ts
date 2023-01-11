// / / Encapsulation
class BankAccount {
    // The constructor method is used to create and initialize an object created from a class.
    constructor(balance) {
      // The "balance" property is a piece of data that is bundled with the object.
        this.balance = balance;
    }
    
    // The "deposit" method is a function that operates on the "balance" property of the object.
    deposit(amount) {
        this.balance += amount;
    }
    
    // The "withdraw" method is another function that operates on the "balance" property of the object.
    withdraw(amount) {
        this.balance -= amount;
    }
    }
    
  // Abstraction
  // The "Shape" class is an abstract class because it has a method called "area" that is not implemented.
  // This means that the "Shape" class cannot be instantiated on its own.
    abstract class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    // The "area" method is an abstract method because it has no implementation.
    // This means that any class that extends the "Shape" class must provide its own implementation of the "area"
    //  method.
    abstract area(): number;
    }
    
  // The "Rectangle" class extends the "Shape" class, which means it inherits the "width" and "height" properties 
//   and the abstract "area" method.
  // The "Rectangle" class must provide an implementation of the "area" method, or it will also be an abstract class.
    class Rectangle extends Shape {
    // The "area" method of the "Rectangle" class calculates the area of the rectangle using the "width" and "height" properties.
    area(): number {
      return this.width * this.height;
    }
    }
    
  // Polymorphism
  // The "Shape" class is polymorphic because it can take on multiple forms (i.e. it can be a rectangle, a circle, etc.).
    // The "Shape" class can be used as a type for variables and function parameters, and any object that satisfies the "Shape" interface can be assigned to those variables or passed to those functions.
    let shape: Shape;
    
  // The "Rectangle" class satisfies the "Shape" interface, so it can be assigned to the "shape" variable.
    shape = new Rectangle(10, 20);
    
  // The "area" method of the "Rectangle" class can be called on the "shape" variable, even though it is of type "Shape".
  // This is possible because the "Rectangle" class provides an implementation of the "area" method.
    console.log(shape.area());
    
  // The "Circle" class also satisfies the "Shape" interface, so it can also be assigned to the "shape" variable.
    class Circle extends Shape {
    // The "area" method of the "Circle" class calculates the area of the circle using the "width" property (which represents the radius of the circle) and the Math.PI constant.
    area(): number {
      return Math.PI * this.width * this.width;
    }
    }
    
    shape = new Circle(10);
    console.log(shape.area());

export default App;
