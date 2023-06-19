# ETL Tool with Front-End File Upload and Basic Transformation Features

## Project Overview
Our project is an Extract, Transform, Load (ETL) tool that allows users to upload CSV files, perform basic transformations on the data, and save transformation rules for future use. The application consists of a front-end interface built with React and React Query, and a back-end API built with Django and Django Rest Framework.

The front-end interface allows users to drag and drop CSV files onto the application, which are then displayed in a table format. Users can then drag and drop transformation blocks onto the table to perform basic transformations on the data, such as addition, subtraction, and multiplication. Users can also add or edit transformation rules, and save the rules for future use. The transformed data will be displayed in a table as transformations are being applied.

The back-end API is responsible for handling file uploads, performing transformations on the data, and storing the data and transformation rules in a database. The API is built using Django and Django REST Framework, and uses SQL Alchemy and Pandas to perform the data transformations.

Overall, the ETL tool provides a user-friendly interface for uploading, transforming, and analyzing CSV data.


