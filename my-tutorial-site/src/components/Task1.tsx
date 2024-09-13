import React from 'react';

const Task1: React.FC = () => {
  return (
    <div className="working-with-functions">
      <h1>2. Working with Functions</h1>
      
      <section>
        <h2>Learning Goal</h2>
        <p>Learn how to define function parameters and return types with TypeScript.</p>
      </section>

      <section>
        <h2>Typing Function Parameters</h2>
        <p>When you write a function in TypeScript, you can specify what types of arguments (inputs) the function expects. You can also define what type the function returns.</p>
        
        <h3>Example</h3>
        <pre><code>
          {`// TypeScript
function add(x: number, y: number): number {
  return x + y;
}`}
        </code></pre>
        <p>Here, the function <code>add</code> accepts two numbers (<code>x</code> and <code>y</code>) and returns a number (specified after the colon).</p>
        <p>Why does this help? This prevents you from accidentally passing the wrong data. For instance, if you try calling <code>add("hello", 2)</code>, TypeScript will throw an error because the first argument should be a number, not a string.</p>
      </section>

      <section>
        <h2>Practice</h2>
        <p>Create a function <code>multiply</code> that accepts two numbers and returns their product. Test what happens if you try passing a string or boolean.</p>
        
        <h3>Example</h3>
        <pre><code>
          {`// TypeScript
function multiply(x: number, y: number): number {
  return x * y;
}

// Testing
console.log(multiply(2, 3)); // Output: 6
console.log(multiply("hello", 2)); // Error: Argument of type '"hello"' is not assignable to parameter of type 'number'.
console.log(multiply(2, true)); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.`}
        </code></pre>
      </section>
    </div>
  );
};

export default Task1;
