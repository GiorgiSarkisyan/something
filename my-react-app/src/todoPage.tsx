import { useState } from "react";
import { Link } from "react-router-dom";

interface TodoItem {
  value: string;
}

export default function TodoPage() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [array, setArray] = useState<TodoItem[]>([]);
  const [localStorageItem, setLocalStorageItem] = useState<string>("");

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleAddTodoItem = () => {
    if (value === "") {
      alert("Please enter a task");
    } else {
      setArray((prev) => [...prev, { value }]);
      setValue("");
      handleSendButtonClick();
    }
  };

  const handleDeleteItem = (todoItem: string) => {
    setArray((prev) => prev.filter((item) => item.value !== todoItem));
  };

  const handleSendButtonClick = () => {
    localStorage.setItem("inputValue", value);
    const storedValue: any = localStorage.getItem("inputValue");
    setLocalStorageItem(storedValue);
    setValue("");
    alert("local storage dagiupdateda")
  };

  return (
    <div className={darkMode ? "darkMode" : ""}>
      <header>
        <ul>
          <Link to="/">FetchPage</Link>
          <Link to="/inputPage">InputPage</Link>
          <Link to="/todoPage">TodoPage</Link>
        </ul>
        <button onClick={handleDarkModeToggle}>darkMode</button>
      </header>
      <div className="todo-app">
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleAddTodoItem}>Send Task</button>
        {array.map((item, index) => (
          <ul style={{ display: "flex" }} key={index}>
            <li
              style={{
                listStyle: "none",
              }}
            >
              {item.value}
            </li>
            <button onClick={() => handleDeleteItem(item.value)}>Delete</button>
          </ul>
        ))}
        <div>
          <h1>{localStorageItem}</h1>
        </div>
      </div>
    </div>
  );
}
