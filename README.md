# Redux Money Manager

A simple money management application built using **React + Redux Toolkit + Vite**.

## 🚀 Features
- Add Money  
- Remove Money  
- Quick Add Buttons (+₹5,000, +₹10,000, -₹2,000)  
- Reset All Data  
- Current Balance Display  
- Clean UI and fast performance  

## 🛠️ Tech Stack
- React  
- Redux Toolkit  
- Vite  
- CSS  

## 📦 How to Run Locally
1. Clone the project  
2. Install dependencies:

3. ## 🌐 Live Demo
(https://lavkush-redux.netlify.app)

## 👤 Author
Lavkush Gupta

# Expense Tracker Pro – Top Interview Questions & Answers

**Live Demo**: https://expense-tracker-lavkush.netlify.app  
**GitHub**: https://github.com/Lavkush-Gupta/expense-tracker-pro

### 1. Why did you choose Redux Toolkit instead of classic Redux?
→ RTK reduces 70–80% boilerplate, gives immutable updates with Immer, has built-in devtools, and is the official recommended approach since 2020.

### 2. Explain createSlice and configureStore
→ `createSlice` combines reducer + actions in one file.  
→ `configureStore` auto-adds redux-thunk, devtools, and good defaults.

### 3. How did you make state immutable in Redux Toolkit?
→ Used Immer inside RTK – I can write "mutating" logic (push, splice) but it returns immutable state under the hood.

### 4. How are you persisting data?
→ Using `redux-persist` with localStorage – data survives page refresh and browser close.

### 5. Explain the chart implementation
→ Used Recharts library → PieChart for category breakdown, BarChart for monthly trend → data is derived from Redux state using `useSelector`.

### 6. How does dark mode work?
→ Theme stored in Redux → `useSelector` reads theme → Tailwind classes toggle between light/dark.

### 7. How did you implement CSV export?
→ Created a "Download CSV" button → converted expenses array → Blob → triggered download using `<a>` tag with `download` attribute.

### 8. How can you improve this project further?
→ Add user authentication (Firebase/Google)  
→ Add income vs expense comparison  
→ Monthly budget limit + alerts  
→ Deploy backend with Node/Express + MongoDB  
→ Add unit & E2E tests (Jest + Cypress)  
→ Convert to TypeScript

### 9. Redux vs Context API – when to use what?
→ This app needs time-travel debugging, middleware, persistence → Redux Toolkit perfect.  
→ Simple theme toggle or form state → Context + useReducer enough.

### 10. How would you add authentication?
→ Use Firebase/Auth0 → store user ID in Redux → protect routes → separate expenses per user.

### 11. What is middleware in Redux?
→ Functions that run between dispatch and reducer (e.g., redux-thunk for async, redux-persist for storage).

### 12. Why Recharts and not Chart.js?
→ Recharts is React-native, fully component-based, works perfectly with hooks and responsive out-of-the-box.

### 13. Any performance optimization?
→ Used `useMemo` for chart data calculation  
→ `React.memo` on list items  
→ Virtualized long list if >1000 expenses

### 14. How would you write a test for this?
→ Component test: Render ExpenseForm → type amount → submit → expect dispatch called  
→ Reducer test: Add expense → expect new state has one more item

### 15. Deploy kaise kiya?
→ Netlify with continuous deployment from GitHub main branch – free, instant, custom domain ready.

**I can explain every single line of this project in depth – from Redux flow to CSV generation!**
