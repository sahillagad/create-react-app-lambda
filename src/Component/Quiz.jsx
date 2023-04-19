import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Madrid'],
    answer: 'Paris',
  },
  {
    question: 'Who is credited with inventing the World Wide Web?',
    options: ['Bill Gates', 'Steve Jobs', 'Tim Berners-Lee', 'Mark Zuckerberg'],
    answer: 'Tim Berners-Lee',
  },
  // Add more questions here
];

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [answerStatus, setAnswerStatus] = useState(null);

  function handleAnswerSelect(answer) {
    setSelectedAnswer(answer);
    setAnswerStatus(answer === questions[currentQuestionIndex].answer ? 'correct' : 'incorrect');
  }

  function handleNextQuestionClick() {
    setCurrentQuestionIndex((index) => index + 1);
    setSelectedAnswer('');
    setAnswerStatus(null);
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.options.map((option) => (
        <button
          key={option}
          onClick={() => handleAnswerSelect(option)}
          disabled={selectedAnswer !== ''}
        >
          {option}
        </button>
      ))}
      {answerStatus && (
        <div>
          {answerStatus === 'correct' ? <p>Correct!</p> : <p>Incorrect.</p>}
          <button onClick={() => handleNextQuestionClick()}>Next question</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;


// import React from "react";


// const Quiz=()=>{


    const javaQuestions = [  {   
     question: "What is Java?",
   options: ["A scripting language", "An object-oriented programming language", "A markup language", "A database language"],
    answer: "An object-oriented programming language"
  },
  {
    question: "Which of the following is not a primitive data type in Java?",
    options: ["byte", "float", "char", "string"],
    answer: "string"
  },
  {
    question: "What is the default value of an instance variable?",
    options: ["null", "0", "1", "NaN"],
    answer: "null"
  },
  {
    question: "What is the output of the following code snippet? \nint x = 5; \nSystem.out.println(x++);",
    options: ["5", "6", "4", "Compilation Error"],
    answer: "5"
  },
  {
    question: "Which of the following is a valid declaration of a two-dimensional array in Java?",
    options: ["int[][] arr = new int[][];", "int[][] arr = new int[3,3];", "int[][] arr = new int[3][3];", "int[][] arr = new int[3][3]()"],
    answer: "int[][] arr = new int[3][3];"
  },
  {
    question: "What is the difference between the ++i and i++ operators?",
    options: ["There is no difference", "++i increments the value of i and then returns the incremented value, while i++ returns the value of i and then increments it", "i++ increments the value of i and then returns the incremented value, while ++i returns the value of i and then increments it", "None of the above"],
    answer: "++i increments the value of i and then returns the incremented value, while i++ returns the value of i and then increments it"
  },
  {
    question: "What is the purpose of the final keyword in Java?",
    options: ["To define a constant", "To prevent inheritance", "To prevent method overriding", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "What is the output of the following code snippet? \nString s = \"Hello World\"; \nSystem.out.println(s.substring(0,5));",
    options: ["Hello", "World", "Hello ", "Hello W"],
    answer: "Hello"
  },
  {
    question: "What is the parent class of all classes in Java?",
    options: ["java.lang.Object", "java.util.Object", "java.io.Object", "java.text.Object"],
    answer: "java.lang.Object"
  },
  {
    question: "What is the purpose of the static keyword in Java?",
    options: ["To define a constant", "To prevent inheritance", "To make a variable or method belong to the class rather than an instance of the class", "All of the above"],
    answer: "To make a variable or method belong to the class rather than an instance of the class"
  },
  {
    question: "What is the output of the following code snippet? \nint[] arr = {1, 2, 3}; \nSystem.out.println(arr.length);",
    options: ["1", "2", "3", "Compilation Error"],
    answer: "3"
  },
  {
    question: "What is a constructor in Java?",
    options: ["A method that returns a value", "A method that has no return type", "A method that is used to initialize an object of a class", "A method that is used to create an instance of a class"],
    answer: "A method that is used to create an instance of a class"
  },
  {
    question: "What is the output of the following code snippet? \nString s = null; \nSystem.out.println(s.length());",
    options: ["0", "null", "Compilation Error", "Runtime Error"],
    answer: "Runtime Error"
  },
  {
    question: "What is an interface in Java?",
    options: ["A class that cannot be instantiated", "A set of methods that can be implemented by a class", "A way to achieve multiple inheritance in Java", "All of the above"],
    answer: "A set of methods that can be implemented by a class"
  },
  {
    question: "What is the output of the following code snippet? \nint[] arr = {1, 2, 3}; \nfor(int i = 0; i < arr.length; i++) { \n  System.out.print(arr[i]); \n}",
    options: ["123", "1 2 3", "1, 2, 3", "Compilation Error"],
    answer: "123"
  },
  {
    question: "What is the purpose of the break statement in Java?",
    options: ["To exit a loop or switch statement", "To skip to the next iteration of a loop", "To continue to the next statement in a switch statement", "None of the above"],
    answer: "To exit a loop or switch statement"
  },
  {
    question: "What is the output of the following code snippet? \nint x = 10; \nif(x > 5) { \n  System.out.println(\"Hello\"); \n}",
    options: ["Hello", "10", "Compilation Error", "Runtime Error"],
    answer: "Hello"
  },
  {
    question: "What is the purpose of the super keyword in Java?",
    options: ["To call a method in the superclass", "To access a variable in the superclass", "To create a new instance of the superclass", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "What is the output of the following code snippet? \nint x = 5; \nswitch(x) { \n  case 1: System.out.println(\"1\"); break; \n  case 2: System.out.println(\"2\"); break; \n  default: System.out.println(\"Default\"); \n}",
    options: ["1", "2", "Default", "Compilation Error"],
    answer: "Default"
  },
  {
    question: "What is the output of the following code snippet? \nint x = 5; \nwhile(x > 0) { \n  System.out.println(x); \n  x--; \n}",
    options: ["1 2 3 4 5", "5 4 3 2 1", "5", "Compilation Error"],
    answer: "5 4 3 2 1"
  },
  {
    question: "What is an abstract class in Java?",
    options: ["A class that cannot be instantiated", "A class that can only have abstract methods", "A class that can be used to provide a common interface for a group of related classes", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "What is the output of the following code snippet? \nString s1 = \"hello\"; \nString s2 = \"world\"; \nSystem.out.println(s1 + s2);",
    options: ["hello", "world", "helloworld", "Compilation Error"],
    answer: "helloworld"
  },
  {
    question: "What is the purpose of the continue statement in Java?",
    options: ["To exit a loop or switch statement", "To skip to the next iteration of a loop", "To continue to the next statement in a switch statement", "None of the above"],
    answer: "To skip to the next iteration of a loop"
  },
  {
    question: "What is the output of the following code snippet? \nint[] arr = new int[5]; \nSystem.out.println(arr[0]);",
    options: ["0", "null", "Compilation Error", "Runtime Error"],
    answer: "0"
  },
  {
    question: "What is the purpose of the final keyword in Java?",
    options: ["To indicate that a variable cannot be changed", "To indicate that a class cannot be inherited from", "To indicate that a method cannot be overridden", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "What is the output of the following code snippet? \nint x = 5; \nif(x > 10) { \n  System.out.println(\"Greater than 10\"); \n} else if(x > 5) { \n  System.out.println(\"Greater than 5\"); \n} else { \n  System.out.println(\"Less than or equal to 5\"); \n}",
    options: ["Greater than 10", "Greater than 5", "Less than or equal to 5", "Compilation Error"],
    answer: "Less than or equal to 5"
  },

{
  question: "What is the output of the following code snippet? \nint[] arr = {1, 2, 3}; \nfor(int i = 0; i < arr.length; i++) { \n  System.out.print(arr[i] + \" \"); \n}",
  options: ["1 2 3", "3 2 1", "1 3 2", "Compilation Error"],
  answer: "1 2 3"
},
{
  question: "What is the purpose of the super keyword in Java?",
  options: ["To call a superclass constructor", "To access a superclass method or variable", "To indicate that a method or variable is static", "None of the above"],
  answer: "To access a superclass method or variable"
},
{
  question: "What is the output of the following code snippet? \nint x = 5; \nint y = 2; \nSystem.out.println(x / y);",
  options: ["2", "2.5", "2.0", "Compilation Error"],
  answer: "2"
},
{
  question: "What is the difference between a static and non-static variable in Java?",
  options: ["There is no difference", "A static variable can only be accessed on an instance of the class, while a non-static variable can be accessed without creating an instance of the class", "A static variable can be accessed without creating an instance of the class, while a non-static variable can only be accessed on an instance of the class", "A static variable can be changed, while a non-static variable cannot be changed"],
  answer: "A static variable can be accessed without creating an instance of the class, while a non-static variable can only be accessed on an instance of the class"
},
{
  question: "What is the output of the following code snippet? \nString s = null; \nif(s == null) { \n  System.out.println(\"null\"); \n} else { \n  System.out.println(s); \n}",
  options: ["null", "Compilation Error", "Runtime Error", "None of the above"],
  answer: "null"
},
{
  question: "What is the purpose of the this keyword in Java?",
  options: ["To access a static method or variable", "To indicate that a variable cannot be changed", "To refer to the current object", "None of the above"],
  answer: "To refer to the current object"
},
{
  question: "What is the output of the following code snippet? \nint x = 5; \nif(x > 5) { \n  System.out.println(\"Greater than 5\"); \n} else if(x < 5) { \n  System.out.println(\"Less than 5\"); \n} else { \n  System.out.println(\"Equal to 5\"); \n}",
  options: ["Greater than 5", "Less than 5", "Equal to 5", "Compilation Error"],
  answer: "Equal to 5"
},


  {
    question: "What is the output of the following code snippet? \nfor(int i = 0; i < 5; i++) { \n  System.out.print(i + \" \"); \n}",
    options: ["0 1 2 3 4", "1 2 3 4 5", "5 4 3 2 1", "Compilation Error"],
    answer: "0 1 2 3 4"
  },
  {
    question: "What is the purpose of the final keyword in Java?",
    options: ["To indicate that a variable cannot be changed", "To indicate that a method cannot be overridden", "To indicate that a class cannot be extended", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "What is the output of the following code snippet? \nString s1 = \"hello\"; \nString s2 = new String(\"hello\"); \nif(s1 == s2) { \n  System.out.println(\"Equal\"); \n} else { \n  System.out.println(\"Not equal\"); \n}",
    options: ["Equal", "Not equal", "Compilation Error", "Runtime Error"],
    answer: "Not equal"
  },
  {
    question: "What is the difference between a public and private variable in Java?",
    options: ["There is no difference", "A public variable can be accessed outside the class, while a private variable can only be accessed within the class", "A private variable can be accessed outside the class, while a public variable can only be accessed within the class", "A public variable can be changed, while a private variable cannot be changed"],
    answer: "A public variable can be accessed outside the class, while a private variable can only be accessed within the class"
  },
  {
    question: "What is the output of the following code snippet? \nint x = 5; \nwhile(x > 0) { \n  System.out.print(x + \" \"); \n  x--; \n}",
    options: ["5 4 3 2 1", "1 2 3 4 5", "Compilation Error", "Runtime Error"],
    answer: "5 4 3 2 1"
  },
  {
    question: "What is the purpose of the break keyword in Java?",
    options: ["To exit a loop or switch statement", "To continue to the next iteration of a loop", "To indicate that a variable cannot be changed", "None of the above"],
    answer: "To exit a loop or switch statement"
  },
  {
    question: "What is the output of the following code snippet? \nint[] arr = {1, 2, 3}; \nfor(int i = 0; i <= arr.length; i++) { \n  System.out.print(arr[i] + \" \"); \n}",
    options: ["1 2 3", "3 2 1", "ArrayIndexOutOfBoundsException", "Compilation Error"],
    answer: "ArrayIndexOutOfBoundsException"
  },
  
  {
    question: "What is the output of the following code snippet? \nint x = 5; \nif(x < 0) { \n  System.out.println(\"Negative\"); \n} else if(x > 0) { \n  System.out.println(\"Positive\"); \n} else { \n  System.out.println(\"Zero\"); \n}",
    options: ["Negative", "Positive", "Zero", "Compilation Error"],
    answer: "Positive"
  },
  {
    question: "What is the purpose of the continue keyword in Java?",
    options: ["To skip to the next iteration of a loop", "To exit a loop or switch statement", "To indicate that a variable cannot be changed", "None of the above"],
    answer: "To skip to the next iteration of a loop"
  },
  {
    question: "What is the output of the following code snippet? \nint x = 5; \nint y = 3; \nint z = x + y; \nSystem.out.println(z);",
    options: ["8", "15", "35", "Compilation Error"],
    answer: "8"
  },
  {
    question: "What is the difference between a class and an object in Java?",
    options: ["There is no difference", "A class is a blueprint for creating objects, while an object is an instance of a class", "A class and an object are the same thing", "A class is a variable, while an object is a method"],
    answer: "A class is a blueprint for creating objects, while an object is an instance of a class"
  },
  {
    question: "What is the output of the following code snippet? \nint[] arr = {1, 2, 3}; \nSystem.out.println(arr);",
    options: ["1 2 3", "[I@15db9742", "Compilation Error", "Runtime Error"],
    answer: "[I@15db9742"
  },
  {
    question: "What is the purpose of the super keyword in Java?",
    options: ["To call a method in the superclass", "To create an object of a class", "To access a variable in the superclass", "None of the above"],
    answer: "To call a method in the superclass"
  },
  {
    question: "What is the output of the following code snippet? \nint x = 5; \nif(x < 0) { \n  System.out.println(\"Negative\"); \n} else if(x == 0) { \n  System.out.println(\"Zero\"); \n} else { \n  System.out.println(\"Positive\"); \n}",
    options: ["Negative", "Positive", "Zero", "Compilation Error"],
    answer: "Positive"
  },
  {
    question: "What is the purpose of the this keyword in Java?",
    options: ["To refer to the current object", "To call a method in the superclass", "To access a variable in the superclass", "None of the above"],
    answer: "To refer to the current object"
  },
  {
    question: "What is the output of the following code snippet? \nint x = 5; \nint y = 3; \nint z = x * y; \nSystem.out.println(z);",
    options: ["8", "15", "35", "Compilation Error"],
    answer: "15"
  },
  {
    question: "What is the output of the following code snippet? \nint x = 5; \nint y = 3; \nint z = x - y; \nSystem.out.println(z);",
    options: ["8", "15", "2", "Compilation Error"],
    answer: "2"
  },
  {
    question: "What is the purpose of the final keyword in Java?",
    options: ["To indicate that a variable cannot be changed", "To indicate that a method cannot be overridden", "To indicate that a class cannot be extended", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "What is the output of the following code snippet? \nString s = \"Hello\"; \nSystem.out.println(s.charAt(1));",
    options: ["H", "e", "l", "o"],
    answer: "e"
  },
  {
    question: "What is the purpose of the instanceof operator in Java?",
    options: ["To check if an object is an instance of a class or a subclass", "To create an instance of a class", "To access a variable in the superclass", "None of the above"],
    answer: "To check if an object is an instance of a class or a subclass"
  },
  {
    question: "What is the output of the following code snippet? \nString s = \"Hello\"; \nSystem.out.println(s.substring(1, 3));",
    options: ["Hel", "ell", "llo", "el"],
    answer: "el"
  },
  {
    question: "What is the purpose of the equals() method in Java?",
    options: ["To compare two objects for equality", "To create a new object", "To access a variable in the superclass", "None of the above"],
    answer: "To compare two objects for equality"
  },
  {
    question: "What is the output of the following code snippet? \nfor(int i = 0; i < 5; i++) { \n  System.out.println(i); \n}",
    options: ["0 1 2 3 4", "1 2 3 4 5", "0 1 2 3 4 5", "Compilation Error"],
    answer: "0 1 2 3 4"
  },
  {
    question: "What is the purpose of the toString() method in Java?",
    options: ["To convert an object to a string representation", "To compare two objects for equality", "To create a new object", "None of the above"],
    answer: "To convert an object to a string representation"
  },
  {
    question: "What is the output of the following code snippet? \nint x = 5; \nint y = 3; \nint z = x / y; \nSystem.out.println(z);",
    options: ["1", "2", "3", "Compilation Error"],
    answer: "1"
  },
  {
    question: "What is the output of the following code snippet? \nint x = 5; \nint y = 3; \nint z = ++x - y; \nSystem.out.println(z);",
    options: ["4", "5", "6", "7"],
    answer: "7"
  },
  {
    question: "What is the purpose of the super keyword in Java?",
    options: ["To call a method or variable in the superclass", "To create an instance of a class", "To access a variable in the superclass", "None of the above"],
    answer: "To call a method or variable in the superclass"
  },
  {
    question: "What is the output of the following code snippet? \nint[] arr = {1, 2, 3}; \nSystem.out.println(arr[1]);",
    options: ["1", "2", "3", "Compilation Error"],
    answer: "2"
  },
  {
    question: "What is the purpose of the static keyword in Java?",
    options: ["To indicate that a method or variable belongs to the class, not an instance of the class", "To indicate that a method or variable belongs to an instance of the class, not the class itself", "To indicate that a class cannot be extended", "None of the above"],
    answer: "To indicate that a method or variable belongs to the class, not an instance of the class"
  },
  {
    question: "What is the output of the following code snippet? \nint x = 5; \nint y = 3; \nint z = x % y; \nSystem.out.println(z);",
    options: ["1", "2", "3", "Compilation Error"],
    answer: "2"
  },
  {
    question: "What is the purpose of the break keyword in Java?",
    options: ["To exit a loop or switch statement", "To continue to the next iteration of a loop", "To create a new object", "None of the above"],
    answer: "To exit a loop or switch statement"
  },
  {
    question: "What is the output of the following code snippet? \nint[] arr = {1, 2, 3}; \nfor(int i : arr) { \n  System.out.println(i); \n}",
    options: ["1 2 3", "1\n2\n3", "Compilation Error", "None of the above"],
    answer: "1\n2\n3"
  },
  {
    question: "What is the purpose of the continue keyword in Java?",
    options: ["To continue to the next iteration of a loop", "To exit a loop or switch statement", "To create a new object", "None of the above"],
    answer: "To continue to the next iteration of a loop"
  },
  {
    question: "What is the output of the following code snippet? \nString s1 = \"Hello\"; \nString s2 = new String(\"Hello\"); \nSystem.out.println(s1 == s2);",
    options: ["true", "false", "Compilation Error", "None of the above"],
    answer: "false"
  },
  {
    question: "What is the purpose of the this keyword in Java?",
    options: ["To refer to the current instance of a class", "To create an instance of a class", "To access a variable in the superclass", "None of the above"],
    answer: "To refer to the current instance of a class"
  },
{
  question: "What is the purpose of the final keyword in Java?",
  options: ["To indicate that a variable's value cannot be changed", "To indicate that a method cannot be overridden", "To indicate that a class cannot be extended", "All of the above"],
  answer: "All of the above"
},
{
  question: "What is the output of the following code snippet? \nint x = 5; \nint y = 3; \nboolean z = x > y; \nSystem.out.println(z);",
  options: ["true", "false", "Compilation Error", "None of the above"],
  answer: "true"
},
{
  question: "What is the purpose of the instanceof operator in Java?",
  options: ["To check if an object is an instance of a class or a subclass", "To create a new object", "To access a variable in the superclass", "None of the above"],
  answer: "To check if an object is an instance of a class or a subclass"
},
{
  question: "What is the output of the following code snippet? \nint[] arr = new int[3]; \nSystem.out.println(arr[1]);",
  options: ["0", "1", "2", "Compilation Error"],
  answer: "0"
},
{
  question: "What is the purpose of the abstract keyword in Java?",
  options: ["To indicate that a class or method is incomplete and must be implemented by a subclass", "To indicate that a method cannot be overridden", "To indicate that a class cannot be extended", "None of the above"],
  answer: "To indicate that a class or method is incomplete and must be implemented by a subclass"
},
{
  question: "What is the output of the following code snippet? \nint x = 5; \nint y = 3; \nboolean z = x < y; \nSystem.out.println(z);",
  options: ["true", "false", "Compilation Error", "None of the above"],
  answer: "false"
},
{
  question: "What is the purpose of the protected keyword in Java?",
  options: ["To indicate that a variable or method can only be accessed by the class and its subclasses", "To indicate that a variable or method can only be accessed by the class itself", "To indicate that a variable or method can be accessed by any class", "None of the above"],
  answer: "To indicate that a variable or method can only be accessed by the class and its subclasses"
},
{
  question: "What is the output of the following code snippet? \nString s1 = \"Hello\"; \nString s2 = \"World\"; \nSystem.out.println(s1 + s2);",
  options: ["Hello World", "Hello\nWorld", "Compilation Error", "None of the above"],
  answer: "HelloWorld"
},

  {
    question: "What is the output of the following code snippet? \nint[] arr = {1, 2, 3, 4, 5}; \nSystem.out.println(arr.length);",
    options: ["1", "5", "Compilation Error", "None of the above"],
    answer: "5"
  },
  {
    question: "What is the purpose of the static keyword in Java?",
    options: ["To indicate that a variable or method belongs to the class and not to instances of the class", "To indicate that a variable or method can only be accessed by the class itself", "To indicate that a variable or method can only be accessed by the class and its subclasses", "None of the above"],
    answer: "To indicate that a variable or method belongs to the class and not to instances of the class"
  },
  {
    question: "What is the output of the following code snippet? \nString s1 = \"Hello\"; \nString s2 = \"World\"; \nSystem.out.println(s1.concat(s2));",
    options: ["Hello World", "Hello\nWorld", "Compilation Error", "None of the above"],
    answer: "HelloWorld"
  },
  {
    question: "What is the purpose of the super keyword in Java?",
    options: ["To access a variable or method in the superclass", "To access a variable or method in the subclass", "To create a new object", "None of the above"],
    answer: "To access a variable or method in the superclass"
  },
  {
    question: "What is the output of the following code snippet? \nint[] arr = {1, 2, 3, 4, 5}; \nSystem.out.println(arr[0]);",
    options: ["1", "5", "Compilation Error", "None of the above"],
    answer: "1"
  },
  {
    question: "What is the purpose of the this keyword in Java?",
    options: ["To refer to the current instance of the class", "To refer to a variable or method in the superclass", "To create a new object", "None of the above"],
    answer: "To refer to the current instance of the class"
  },
  {
    question: "What is the output of the following code snippet? \nString s = \"Hello\"; \nSystem.out.println(s.charAt(4));",
    options: ["H", "e", "l", "o"],
    answer: "o"
  },
{
  question: "What is the output of the following code snippet? \nint x = 5; \nif (x > 10) { \n  System.out.println(\"x is greater than 10\"); \n} else if (x < 10) { \n  System.out.println(\"x is less than 10\"); \n} else { \n  System.out.println(\"x is equal to 10\"); \n}",
  options: ["x is greater than 10", "x is less than 10", "x is equal to 10", "Compilation Error"],
  answer: "x is less than 10"
},
{
  question: "What is the purpose of the final keyword in Java?",
  options: ["To indicate that a variable or method cannot be changed", "To indicate that a variable or method belongs to the class and not to instances of the class", "To indicate that a variable or method can only be accessed by the class itself", "None of the above"],
  answer: "To indicate that a variable or method cannot be changed"
},
{
  question: "What is the output of the following code snippet? \nfor (int i = 0; i < 5; i++) { \n  System.out.print(i + \" \"); \n}",
  options: ["0 1 2 3 4", "1 2 3 4 5", "0 1 2 3", "1 2 3 4"],
  answer: "0 1 2 3 4"
},
{
  question: "What is the purpose of the break keyword in Java?",
  options: ["To exit a loop or switch statement", "To continue to the next iteration of a loop", "To access a variable or method in the superclass", "None of the above"],
  answer: "To exit a loop or switch statement"
},
{
  question: "What is the output of the following code snippet? \nint x = 5; \nwhile (x > 0) { \n  System.out.print(x + \" \"); \n  x--; \n}",
  options: ["5 4 3 2 1", "1 2 3 4 5", "0 1 2 3 4", "4 3 2 1 0"],
  answer: "5 4 3 2 1"
},
{
  question: "What is the purpose of the continue keyword in Java?",
  options: ["To skip to the next iteration of a loop", "To exit a loop or switch statement", "To access a variable or method in the superclass", "None of the above"],
  answer: "To skip to the next iteration of a loop"
},
{
  question: "What is the output of the following code snippet? \nString s = \"Hello\"; \nSystem.out.println(s.substring(1, 4));",
  options: ["Hello", "ell", "llo", "el"],
  answer: "ell"
},
{
  question: "What is the output of the following code snippet? \nint[] arr = {1, 2, 3, 4, 5}; \nfor (int i : arr) { \n  System.out.print(i + \" \"); \n}",
  options: ["1 2 3 4 5", "5 4 3 2 1", "0 1 2 3 4", "Compilation Error"],
  answer: "1 2 3 4 5"
},
{
  question: "What is the purpose of the instanceof operator in Java?",
  options: ["To determine if an object is an instance of a particular class or interface", "To access a variable or method in the superclass", "To create a new object", "None of the above"],
  answer: "To determine if an object is an instance of a particular class or interface"
},
{
  question: "What is the output of the following code snippet? \nint[][] arr = { {1, 2}, {3, 4}, {5, 6} }; \nSystem.out.println(arr[1][1]);",
  options: ["1", "2", "3", "4"],
  answer: "4"
},
{
  question: "What is the purpose of the static keyword in Java?",
  options: ["To indicate that a variable or method belongs to the class and not to instances of the class", "To indicate that a variable or method can only be accessed by the class itself", "To indicate that a variable or method cannot be changed", "None of the above"],
  answer: "To indicate that a variable or method belongs to the class and not to instances of the class"
},
{
  question: "What is the output of the following code snippet? \nString s1 = \"Hello\"; \nString s2 = \"World\"; \nSystem.out.println(s1 + s2);",
  options: ["Hello World", "Hello", "World", "None of the above"],
  answer: "HelloWorld"
},
{
  question: "What is the purpose of the this keyword in Java?",
  options: ["To refer to the current object", "To access a variable or method in the superclass", "To create a new object", "None of the above"],
  answer: "To refer to the current object"
},
{
  question: "What is the output of the following code snippet? \nint x = 5; \nint y = x++; \nSystem.out.println(y);",
  options: ["4", "5", "6", "Compilation Error"],
  answer: "5"
},
{
  question: "What is the purpose of the super keyword in Java?",
  options: ["To access a variable or method in the superclass", "To create a new object", "To refer to the current object", "None of the above"],
  answer: "To access a variable or method in the superclass"
},
{
  question: "What is the output of the following code snippet? \nint x = 5; \nint y = ++x; \nSystem.out.println(y);",
  options: ["4", "5", "6", "Compilation Error"],
  answer: "6"
},
{
question: "What is the output of the following code snippet? \nint x = 5; \nint y = x-- + 3; \nSystem.out.println(y);",
options: ["3", "4", "5", "8"],
answer: "8"
},
{
question: "What is the purpose of the final keyword in Java?",
options: ["To indicate that a variable or method cannot be changed", "To indicate that a class cannot be extended", "To indicate that a method cannot be overridden", "All of the above"],
answer: "All of the above"
},
{
question: "What is the output of the following code snippet? \nint x = 5; \nint y = 3; \nSystem.out.println(x > y ? \"x is greater\" : \"y is greater\");",
options: ["x is greater", "y is greater", "Both x and y are equal", "Compilation Error"],
answer: "x is greater"
},
{
question: "What is the purpose of the try-catch-finally block in Java?",
options: ["To handle exceptions", "To access a variable or method in the superclass", "To create a new object", "None of the above"],
answer: "To handle exceptions"
},
{
question: "What is the output of the following code snippet? \nString s = \"Hello World\"; \nSystem.out.println(s.substring(6));",
options: ["Hello", "World", "d", "None of the above"],
answer: "World"
},
{
question: "What is the purpose of the throw keyword in Java?",
options: ["To throw an exception", "To access a variable or method in the superclass", "To create a new object", "None of the above"],
answer: "To throw an exception"
},
{
question: "What is the output of the following code snippet? \nString s1 = \"Hello\"; \nString s2 = \"Hello\"; \nSystem.out.println(s1 == s2);",
options: ["true", "false", "Compilation Error", "None of the above"],
answer: "true"
},
{
question: "What is the purpose of the throws keyword in Java?",
options: ["To declare that a method may throw a particular type of exception", "To access a variable or method in the superclass", "To create a new object", "None of the above"],
answer: "To declare that a method may throw a particular type of exception"
},
{
question: "What is the output of the following code snippet? \nint x = 5; \nif (x < 10) { \n  System.out.println(\"x is less than 10\"); \n}",
options: ["x is less than 10", "x is greater than 10", "x is equal to 10", "Compilation Error"],
answer: "x is less than 10"
},
  {
    question: "What is the output of the following code snippet? \nint x = 5; \nwhile (x > 0) { \n  System.out.println(x); \n  x--; \n}",
    options: ["54321", "5432", "543", "Compilation Error"],
    answer: "54321"
  },
  {
    question: "What is the purpose of the this keyword in Java?",
    options: ["To refer to the current object", "To refer to the superclass object", "To create a new object", "None of the above"],
    answer: "To refer to the current object"
  },
  {
    question: "What is the output of the following code snippet? \nString s = \"Java\"; \nchar c = s.charAt(2); \nSystem.out.println(c);",
    options: ["J", "a", "v", "Compilation Error"],
    answer: "v"
  },
  {
    question: "What is the purpose of the throw statement in Java?",
    options: ["To throw an exception", "To access a variable or method in the superclass", "To create a new object", "None of the above"],
    answer: "To throw an exception"
  },
  {
    question: "What is the output of the following code snippet? \nString s1 = \"Hello\"; \nString s2 = new String(\"Hello\"); \nSystem.out.println(s1 == s2);",
    options: ["true", "false", "Compilation Error", "None of the above"],
    answer: "false"
  },
  {
    question: "What is the purpose of the transient keyword in Java?",
    options: ["To indicate that a variable should not be serialized", "To indicate that a method should not be overridden", "To indicate that a class should not be extended", "None of the above"],
    answer: "To indicate that a variable should not be serialized"
  },
  {
    question: "What is the output of the following code snippet? \nint[] arr = {1, 2, 3, 4, 5}; \nfor (int i : arr) { \n  System.out.print(i + \" \"); \n}",
    options: ["1 2 3 4 5", "5 4 3 2 1", "1, 2, 3, 4, 5", "Compilation Error"],
    answer: "1 2 3 4 5"
  },
  {
    question: "What is the purpose of the volatile keyword in Java?",
    options: ["To indicate that a variable may be modified by multiple threads", "To indicate that a method may throw a particular type of exception", "To indicate that a variable or method cannot be changed", "None of the above"],
    answer: "To indicate that a variable may be modified by multiple threads"
  },
  {
    question: "What is the output of the following code snippet? \nint x = 5; \nint y = 3; \nSystem.out.println(x & y);",
    options: ["1", "3", "4", "Compilation Error"],
    answer: "1"
  },
]
 
// console.log(javaQuestions.length)

//     return(
//         <>

//                <div c>
                
//                </div>        
//         </>
//     )
// }


// export default Quiz;