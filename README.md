# Provider App - FullStack

This is a **Programming 1** project where businesses can list their products and customers can place orders. The app includes user authentication, a business panel for managing products, a customer panel for managing orders, and an admin panel for overseeing the entire system. The application is built using **Python** with **Flask** for the backend, **React** with **TailwindCSS** for the frontend, and **PostgreSQL** for the database. The app is containerized using **Docker** for easy deployment and environment management.

## Features

- **Authentication**: Users can register and log in as either customers, suppliers, or admins. Authentication is required to access certain areas of the app.
- **Customer Panel**: Customers can browse available products, place orders, and view their order history.
- **Business Panel**: Suppliers can create, edit, and manage their products, as well as view and manage orders placed for their products.
- **Admin Panel**: Admin users can manage customers, suppliers, products, and orders. The admin has full control over the system.
- **CRUD Operations**: The app provides full Create, Read, Update, and Delete operations for:
  - **Products**: Suppliers can create, edit, or delete their products.
  - **Orders**: Customers can place, cancel, and view their orders.
  - **Users**: Admins can manage user accounts (customers and suppliers).
- **Responsive Design**: The app is fully responsive, with a mobile-first approach using **TailwindCSS** for styling.

## Technologies Used

- **Backend**: Python, Flask
- **Frontend**: React, TailwindCSS
- **Database**: PostgreSQL

## Overview

### Backend (Python & Flask)
The backend is developed using **Flask**, which provides a lightweight framework for building APIs. It handles all logic for product management, order management, and user authentication. The API is structured as follows:
- **Authentication**: User roles are defined (customer, supplier, admin) with role-based access control.
- **Product Management**: Suppliers can add, edit, and delete products.
- **Order Management**: Customers can place and cancel orders, and suppliers can view orders placed for their products.
- **User Management**: Admins can create, update, or delete customer and supplier accounts.
- **Database**: **PostgreSQL** is used to persist data for users, products, and orders. The database is structured with tables for each entity, and relationships are defined between products, orders, and users.

### Frontend (React & TailwindCSS)
The frontend is built with **React** for a dynamic and interactive user interface. The layout is styled using **TailwindCSS**, ensuring a clean and modern design that is responsive on both desktop and mobile devices. 
The application includes:
- **Customer Dashboard**: Allows customers to browse products, place orders, and view order status.
- **Supplier Dashboard**: Enables suppliers to manage their product listings and view orders placed for their products.
- **Admin Dashboard**: Provides an interface for admins to manage users, products, and orders.

### Database (PostgreSQL)
The **PostgreSQL** database stores data for users (customers, suppliers, admins), products, and orders. The schema includes tables for each entity, and relationships are set up to link customers to their orders, and suppliers to their products. 

## Requirements

- **Docker** and **Docker Compose** for running containers.
- **Python 3.x** for the backend.
- **Node.js** and **npm** for building and running the frontend.
