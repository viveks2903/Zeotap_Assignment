# **Spreadsheet Web Application**

A web application mimicking the functionality and user interface of Google Sheets, with a focus on mathematical functions, data quality functions, data entry, and key UI interactions. This application allows users to input, manipulate, and save spreadsheet data with essential features for mathematical calculations and data validation.

---

## **Table of Contents**
- [Project Description](#project-description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Folder Structure](#folder-structure)
- [License](#license)

---

## **Project Description**
This project aims to provide a simple yet powerful web-based spreadsheet application that mimics Google Sheets. It allows users to perform basic mathematical operations, text transformations, and manage spreadsheet data through an intuitive UI. The backend is built with Node.js, Express, and MongoDB, and the frontend is built with React.

---

## **Features**
- **Spreadsheet Interface**:  
  - Mimics Google Sheets UI with a grid layout, toolbar, and formula bar.
  - Supports basic cell formatting like bold, italics, font size, and color.
  - Drag-and-drop functionality for cells, formulas, and selections.
  - Ability to add, delete, and resize rows and columns.

- **Mathematical Functions**:  
  - **SUM**: Calculates the sum of a range of cells.
  - **AVERAGE**: Calculates the average of a range of cells.
  - **MAX**: Returns the maximum value from a range of cells.
  - **MIN**: Returns the minimum value from a range of cells.
  - **COUNT**: Counts the number of cells containing numerical values.

- **Data Quality Functions**:  
  - **TRIM**: Removes leading and trailing whitespace.
  - **UPPER**: Converts text to uppercase.
  - **LOWER**: Converts text to lowercase.
  - **REMOVE_DUPLICATES**: Removes duplicate rows from a selected range.
  - **FIND_AND_REPLACE**: Finds and replaces specific text within a range.

- **Data Entry and Validation**:  
  - Allows users to input various data types like numbers, text, and dates.
  - Ensures numeric cells only contain valid numbers.

- **Testing**:  
  - A feature that allows users to test implemented functions with their own data.

---

## **Tech Stack**
- **Frontend**:  
  - React.js (for building UI)
  - CSS (for styling)
  - Axios (for API requests)

- **Backend**:  
  - Node.js (runtime environment)
  - Express.js (web framework)
  - MongoDB (database)
  - Mongoose (ODM for MongoDB)
  - dotenv (for environment variables)
  - body-parser (for parsing request bodies)

---

## **Installation**

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/spreadsheet-web-app.git
   cd spreadsheet-web-app

---

### Key Elements in this `README.md`:
- **Headings**: Clear organization with sections like "Project Description," "Features," "Tech Stack," etc.
- **Installation Instructions**: Step-by-step guidance on how to get the project running.
- **Usage Instructions**: Easy-to-understand instructions on how to use the app once it's running.
- **API Documentation**: Clear examples of how to interact with the API for saving, loading, and deleting spreadsheets.
- **Folder Structure**: The layout is represented in code blocks for easy understanding.
- **License**: Information about the project's open-source license.


