# Data Structures & Algorithms (DSA) Learning Repo

This repository documents my journey learning **Data Structures and Algorithms** using **JavaScript**. It contains manual implementations of core data structures, algorithmic solutions, and a practical mini-project applying these concepts.

### 📂 Repository Contents

#### 1. Data Structures
Manual class implementations and usage examples of fundamental structures:
* **Stacks (`stack.js`):** A generic Stack class with methods like `add`, `remove`, `peekFirst`, `peekLast`, and `isEmpty`.
* **Queues (`queue.js`):** A Queue class demonstrating FIFO logic with `enqueue`, `dequeue`, `front`, and `end` methods.
* **Maps & Sets (`map.js`, `set.js`):** Practical examples exploring the built-in JavaScript `Map` and `Set` objects, including methods like `set`, `get`, `has`, and iterators.

#### 2. Algorithms
* **Recursion:**
    * **Fibonacci Sequence (`assignment.js`):** A recursive solution to generate the Fibonacci sequence up to a specific limit.
    * **String Reversal (`test.js`):** A recursive function to reverse strings.
* **Searching:**
    * **Linear Search (`prac.js`):** A function to find target values within arrays (case-insensitive).

#### 3. Mini-Project: Authentication & Todo App (`SET/`)
A practical web application demonstrating the use of **Sets** for data uniqueness and **LocalStorage** for persistence.
* **Features:** User Signup/Login, Dashboard, and a Todo List.
* **Key Logic:** Uses `Set` to prevent duplicate usernames during signup and duplicate tasks in the todo list.
* **Tech:** HTML, CSS, Vanilla JavaScript.

---

### 🚀 How to Run
1.  **Algorithms:** Run any script file using Node.js:
    ```bash
    node stack.js
    node assignment.js
    ```
2.  **Mini-Project:** Open `SET/login.html` or `SET/signup.html` in your web browser to test the application.

---

### 🛠️ Tech Stack
* **Language:** JavaScript (ES6+)
* **Frontend:** HTML5, CSS3
* **Concepts:** OOP, Recursion, Time Complexity, Data Persistence (LocalStorage)