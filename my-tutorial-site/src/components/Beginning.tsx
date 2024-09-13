import React from 'react';

const Beginning: React.FC = () => {
  return (
    <div className="type-annotations">
      <h1>1. Type Annotations: Making Your Code Safer</h1>
      
      <section>
        <h2>Learning Goal</h2>
        <p>Understand how to use basic types (<code>string</code>, <code>number</code>, <code>boolean</code>) and annotate variables and functions.</p>
      </section>

      <section>
        <h2>What Are Type Annotations?</h2>
        <p>Type annotations allow you to tell TypeScript what type of data you expect. This helps TypeScript catch errors when the wrong type is used.</p>
        
        <h3>Basic Types</h3>
        <ul>
          <li><strong>string:</strong> Represents text.</li>
          <li><strong>number:</strong> Represents numbers (no need to differentiate between integers and floats).</li>
          <li><strong>boolean:</strong> Represents true or false.</li>
        </ul>
        
        <h3>Example</h3>
        <pre><code>
          {`// TypeScript
let username: string = "Alice"; // 'username' must always be a string
let age: number = 30;           // 'age' must be a number
let isAdmin: boolean = true;   // 'isAdmin' is either true or false`}
        </code></pre>
        <p>Why does this help? By using type annotations, TypeScript ensures you don’t accidentally assign the wrong type of data. For example, if you tried to assign <code>username = 123</code>, TypeScript would warn you: "You can’t assign a number to a string!"</p>
      </section>

      <section>
        <h2>Practice</h2>
        <p>Create variables for <code>firstName</code>, <code>age</code>, and <code>isStudent</code>. Try assigning them different types of data and watch TypeScript catch the mistakes.</p>
        
        <h3>Example</h3>
        <pre><code>
          {`// TypeScript
let firstName: string = "John";
let age: number = 25;
let isStudent: boolean = true;

// Trying to assign incorrect types
firstName = 123; // Error: Type 'number' is not assignable to type 'string'.
age = "twenty-five"; // Error: Type 'string' is not assignable to type 'number'.
isStudent = "yes"; // Error: Type 'string' is not assignable to type 'boolean'.`}
        </code></pre>
      </section>
    </div>
  );
};

export default Beginning;