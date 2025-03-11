# 🚀 GitHub Actions Workflow for Pull Requests – React Project

## 📌 Overview
This repository contains a **GitHub Actions workflow** that automatically runs when a **pull request** is made to the following branches:  
- `dev`  
- `staging`  
- `main`  

The workflow ensures that the project meets **code quality standards** and can be built successfully before merging.

---

## ⚙️ Workflow Details
### ✅ **Trigger**
The workflow is triggered **on pull requests** targeting `dev`, `staging`, and `main`.

### 🔄 **Steps in the Workflow**
1. **Checkout Code** – Fetches the latest code from the pull request.  
2. **Set Up Node.js** – Installs Node.js to run the React project.  
3. **Install Dependencies** – Installs all required npm packages.  
4. **Lint & Format Check** – Runs:  
   - **ESLint** (`npm run lint`) – Ensures code follows best practices.  
   - **Prettier** (`npm run format:check`) – Checks code formatting.  
5. **Build the Project** – Runs `npm run build` to verify the project compiles successfully.  

---

## 🛠️ How to Use This Repository  

### 🔹 **1. Clone the Repository**  
```bash
git clone <repository-url>
cd <your-project-name>
```

### 🔹 **2. Install Dependencies**  
```bash
npm install
```

### 🔹 **3. Run Linting and Formatting Locally** (Optional)  
```bash
npm run lint       # Run ESLint  
npm run format     # Auto-format files  
npm run format:check  # Check formatting without modifying files  
```

### 🔹 **4. Run the Build Locally**  
```bash
npm run build
```

---

## 📂 Workflow File Location
The GitHub Actions workflow file is stored in:  
```
.github/workflows/pull_request.yaml
```

---

## 🔀 Branches in This Repository  
- **`main`** – Production-ready branch.  
- **`staging`** – Pre-release testing branch.  
- **`dev`** – Development branch for feature testing.  

---

## 🔒 Security Considerations  
✅ No sensitive information is hardcoded.  
✅ Uses **GitHub Secrets** or environment variables if needed.  
