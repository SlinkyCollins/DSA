// LocalStorage keys
const LS_USERS = "users";    
const LS_SESSION = "session";
const LS_TODOS = "todos";

// Helpers for JSON read/write
function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/* Signup Page */
if (document.getElementById("signupForm")) {
  document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim().toLowerCase();
    const password = document.getElementById("password").value;

    if (!username || !password) {
      alert("Fill all fields!");
      return;
    }

    let users = readJSON(LS_USERS, []);
    let usersSet = new Set(users.map((u) => u.username));

    if (usersSet.has(username)) {
      alert("User already exists. Try login instead.");
      return;
    }

    users.push({ username, password });
    writeJSON(LS_USERS, users);

    alert("Account created! You can login now.");
    window.location.href = "login.html";
  });
}

/* Login Page */
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim().toLowerCase();
    const password = document.getElementById("password").value;

    let users = readJSON(LS_USERS, []);
    let user = users.find((u) => u.username === username);

    if (!user) {
      alert("No account found. Please signup first.");
      return;
    }
    if (user.password !== password) {
      alert("Wrong password.");
      return;
    }

    writeJSON(LS_SESSION, { username });
    alert("Login successful!");
    window.location.href = "dashboard.html";
  });
}

/* Dashboard Page */
if (document.getElementById("todoForm")) {

  let session = readJSON(LS_SESSION, null);
  if (!session || !session.username) {
    window.location.href = "login.html";
  }

  const username = session.username;
  document.getElementById("userDisplay").textContent = username;


  let todosPerUser = readJSON(LS_TODOS, {});
  let userTodos = todosPerUser[username] || [];
  renderTodos(userTodos);

  document.getElementById("todoForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("todoInput");
    const task = input.value.trim();
    if (!task) return;

    let todosSet = new Set(userTodos.map((t) => t.toLowerCase()));
    if (todosSet.has(task.toLowerCase())) {
      alert("Task already exists!");
      return;
    }

    userTodos.push(task);
    todosPerUser[username] = userTodos;
    writeJSON(LS_TODOS, todosPerUser);

    input.value = "";
    renderTodos(userTodos);
  });

  function renderTodos(todos) {
    const list = document.getElementById("todoList");
    list.innerHTML = "";
    if (todos.length === 0) {
      list.innerHTML = "<li>No tasks yet. Add one!</li>";
      return;
    }
    todos.forEach((task, id) => {
      const li = document.createElement("li");
      li.textContent = task;

      const del = document.createElement("button");
      del.textContent = "❌";
      del.style.marginLeft = "10px";
      del.onclick = () => {
        todos.splice(id, 1);
        todosPerUser[username] = todos;
        writeJSON(LS_TODOS, todosPerUser);
        renderTodos(todos);
      };

      li.appendChild(del);
      list.appendChild(li);
    });
  }
}

/* Logout */
function logout() {
  localStorage.removeItem(LS_SESSION);
  window.location.href = "login.html";
}