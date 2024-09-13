import React from 'react';

const Task3: React.FC = () => {
  return (
    <div className="arrays-tuples-enums">
      <h1>4. Arrays, Tuples, and Enums</h1>
      
      <section>
        <h2>Learning Goal</h2>
        <p>Learn how to work with arrays, tuples, and enums in TypeScript.</p>
      </section>

      <section>
        <h2>Typing Arrays</h2>
        <p>In TypeScript, you can create arrays that only contain certain types of data. For example, an array of numbers looks like this:</p>
        
        <h3>Example</h3>
        <pre><code>
          {`// TypeScript
let scores: number[] = [95, 85, 76];`}
        </code></pre>
        <p>This creates an array named <code>scores</code> that only contains numbers.</p>
      </section>

      <section>
        <h2>Tuples</h2>
        <p>Tuples are like arrays, but they have a fixed number of elements with specific types. For example:</p>
        
        <h3>Example</h3>
        <pre><code>
          {`// TypeScript
let person: [string, number] = ["Alice", 30];`}
        </code></pre>
        <p>This tuple always contains a <code>string</code> followed by a <code>number</code>.</p>
      </section>

      <section>
        <h2>Enums</h2>
        <p>Enums allow you to define a set of named constants. For example:</p>
        
        <h3>Example</h3>
        <pre><code>
          {`// TypeScript
enum Role { Admin, User, Guest }
let currentRole: Role = Role.User;`}
        </code></pre>
        <p>Enums make your code easier to read and maintain. Instead of using random numbers to represent roles, you can use meaningful names.</p>
      </section>

      <section>
        <h2>Practice</h2>
        <p>Create an enum for different days of the week. Then create a variable <code>today</code> and assign it a value from the enum.</p>
        
        <h3>Example</h3>
        <pre><code>
          {`// TypeScript
enum DayOfWeek {
  Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
}

let today: DayOfWeek = DayOfWeek.Friday;`}
        </code></pre>
      </section>
    </div>
  );
};

export default Task3;
