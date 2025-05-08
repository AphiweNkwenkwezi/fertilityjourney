
# FertilityJourneyDashboard

This is a full-stack web application built with **Vue 3 (Vite)** for the frontend and **.NET 8 Web API** for the backend. The backend uses **Entity Framework Core** with a **Code-First** approach and connects to a **SQL Server** database.

---

## 🛠 Technologies Used

- **Frontend**: Vue 3 (Vite)
- **Backend**: .NET 8 Web API
- **Database**: SQL Server
- **ORM**: Entity Framework Core (Code-First)

---

## 📦 Project Structure

- `ClientApp/`: Vue.js frontend project (Vue 3 with Vite)
- `Server/`: .NET 8 backend API project with EF Core
- `README.md`: Project instructions and setup guide

---

## ⚙️ Setup Instructions

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

---

### Backend Setup

```bash
cd Server
dotnet restore
dotnet ef database update  # Applies migrations to create the SQL DB
dotnet run
```

---

### Frontend Setup

```bash
cd ClientApp
npm install
npm run dev
```

---

## 🧪 Testing

To be added (unit tests and integration tests can be written for both frontend and backend).

---

## 📁 Assets

![App Logo](src/assets/logo.png)

---

## 📌 Features

- User authentication (WIP)
- Dashboard with statistics and visualizations
- Notifications system
- Practice management with CRUD support
- Responsive and accessible UI design

---

## 🙌 Contribution

Feel free to fork this repo and submit pull requests. Issues and suggestions are welcome.

---

## 📃 License

This project is licensed under the MIT License.
