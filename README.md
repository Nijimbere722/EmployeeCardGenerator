# Employee Cards React App 

## **Project Overview**
The **Employee Cards React App** is a dynamic, interactive React application that retrieves employee data from a public API and displays it in professional, responsive cards. Users can search for employees by name or email, explore employee details, and print individual cards or all employee cards.  

This project demonstrates key modern React concepts including:

- Fetching external data using APIs  
- Managing state with React Hooks (`useState`, `useEffect`)  
- Building reusable and modular components  
-  Dynamic rendering using array methods  
- Implementing interactivity such as search and printing  

---

## **How the Project Works**

### **1. Data Fetching**
- Employee data is retrieved from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users).  
- When the app loads, it fetches the data and updates the application state.  
- The app handles **loading** states to show a message while fetching and **error** states if the API call fails.  

---

### **2. Managing Application State**
The app uses React Hooks to manage data and interactions:

-  `employees` → stores all employee data  
-  `search` → stores the current search input  
-  `loading` → tracks whether the data is being fetched  
- `error` → stores any errors from fetching data  

---

### **3. Search Functionality**
- Users can filter employees by **name** or **email** in real-time.  
- As the user types in the search bar, the displayed employee cards update automatically to match the search query.  

---

### **4. EmployeeCard Component**
- Each employee is displayed using a **reusable EmployeeCard component**.  
- Each card shows the following information:  
  - ID  
  - Name  
  -  Email  
  - Phone  
  -  Website  
  -  Company Name  
- Each card includes a **Print Card** button to print that specific employee’s information.  

---

### **5. Printing Employees**
- Users can print:  
  - **All employees** using the "Print Employees" button  
  - **Individual employee cards** using the print button inside each EmployeeCard  

---

### **6. Layout & Responsiveness**
- The interface is designed using **Tailwind CSS**:  
  - Clean card design with shadows and rounded corners  
  - Grid layout for cards that adapts to mobile, tablet, and desktop screens  
  -  Responsive and professional appearance for all devices  

---

## **Project Structure**

- `EmployeeCard.jsx` → Reusable component for individual employee cards  
- `App.jsx` → Main component handling data fetching, search, and rendering  
- `App.css` → Custom styles (Tailwind handles most styling)  

---

## **How to Run the Project**

### **Prerequisites**
-  Node.js installed  
-  npm (Node Package Manager)  

### **Installation**
1. Clone the repository  
2. Navigate to the project folder  
3. Install dependencies using `npm install`  
4. Start the development server using `npm start`  
5. Open [http://localhost:3000](http://localhost:3000) in your browser  

---

## **Usage**
- Use the search bar to filter employees by **name** or **email**  
- Click **Print Employees** to print all visible employee cards  
- Click **Print Card** on an individual card to print only that employee  
- Explore employee details in a clean, responsive layout  

---

## **Technologies Used**
-  React.js (Functional Components & Hooks)  
- JavaScript (ES6+)  
- Fetch API for HTTP requests  
- Tailwind CSS for styling  
- HTML & CSS  

---

## **Author**
**Monia Nijimbere** – Ashesi University – Computer Science  

---

## **Live Demo**
(If deployed, you can add a link here)  
[Live Demo Link](#)
