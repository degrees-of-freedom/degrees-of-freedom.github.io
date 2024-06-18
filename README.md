# Dockerized Django Project on AWS EC2

## Table of Contents
1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Architecture](#architecture)
4. [Setup Instructions](#setup-instructions)
   - [1. Clone the Repository](#1-clone-the-repository)
   - [2. Configure Environment Variables](#2-configure-environment-variables)
   - [3. Build and Run Docker Containers](#3-build-and-run-docker-containers)
   - [4. Apply Database Migrations](#4-apply-database-migrations)
   - [5. Access the Application](#5-access-the-application)
5. [Deployment on AWS EC2](#deployment-on-aws-ec2)
   - [1. Create and Configure EC2 Instance](#1-create-and-configure-ec2-instance)
   - [2. Install Docker on EC2](#2-install-docker-on-ec2)
   - [3. Deploy Containers to EC2](#3-deploy-containers-to-ec2)
6. [Important Commands](#important-commands)
7. [Common Issues and Troubleshooting](#common-issues-and-troubleshooting)
8. [Credits and Resources](#credits-and-resources)

## Project Overview
This project involves the containerization of a Django web application using Docker. The stack includes Django for the web framework, PostgreSQL for the database, Gunicorn as the application server, and Nginx as the reverse proxy server. The deployment is managed on an Amazon Web Services (AWS) EC2 instance. This setup is ideal for scalable, production-grade web applications.

![Django](https://img.icons8.com/color/48/000000/django.png)
![Docker](https://img.icons8.com/color/48/000000/docker.png)
![PostgreSQL](https://img.icons8.com/color/48/000000/postgresql.png)
![Gunicorn](https://img.icons8.com/color/48/000000/gunicorn.png)
![Nginx](https://img.icons8.com/color/48/000000/nginx.png)
![AWS EC2](https://img.icons8.com/color/48/000000/amazon-web-services.png)

## Prerequisites
Before you begin, ensure you have the following:
- **Docker** installed on your local machine.
- **AWS Account** to create and manage EC2 instances.
- **Git** for version control.

## Architecture
The architecture consists of:
- **Django**: The backend framework handling requests and database interactions.
- **PostgreSQL**: A robust relational database system for storing application data.
- **Gunicorn**: A Python WSGI HTTP Server to serve the Django application.
- **Nginx**: A web server to act as a reverse proxy, handling client requests and forwarding them to Gunicorn.
- **AWS EC2**: The cloud environment where the application is hosted.

Each component runs in a separate Docker container, facilitating isolated environments and consistent behavior across different stages of development and deployment.

## Setup Instructions

### 1. Clone the Repository
Start by cloning the project repository from GitHub to your local machine:

```bash
git clone https://github.com/yourusername/your-django-project.git
cd your-django-project
