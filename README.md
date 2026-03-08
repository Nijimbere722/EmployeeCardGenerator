# ⭐ Employee Cards React App ⭐

## **Project Overview**
The **Employee Cards React App** is a dynamic, interactive React application that retrieves employee data from a public API and displays it in professional, responsive cards. Users can search for employees by name or email, explore employee details, and print individual cards or all employee cards.  

This project demonstrates key modern React concepts including:

- ⭐ Fetching external data using APIs  
- ⭐ Managing state with React Hooks (`useState`, `useEffect`)  
- ⭐ Building reusable and modular components  
- ⭐ Dynamic rendering using array methods (`.map()`)  
- ⭐ Implementing interactivity such as search and printing  

---

## **How the Project Works**

### **1. Data Fetching**
- Employee data is retrieved from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) using the Fetch API.  
- The data fetching logic is inside a `useEffect` hook in `App.jsx` so it runs once when the component mounts.  

```javascript
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch employee data");
      }
      return response.json();
    })
    .then((data) => {
      setEmployees(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
}, []);
