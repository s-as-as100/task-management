# Tender Tasks Board

A dark-themed task management board built using **Next.js** and **TypeScript**. Tasks are displayed in different columns based on their status (e.g., Not Started, In Progress, Completed). The project follows an incremental development approach with frequent commits and meaningful messages.

## 🚀 Live Demo
[Hosted on Vercel/Netlify](#) *(Replace with actual deployed link)*

## 📌 Features
### Level 1: Core UI
- Display tasks grouped by status (Not Started, In Progress, etc.).
- Each task card contains:
  - Title
  - Description
  - Assignee
  - Priority
  - Due Date
  - Status
- Dark theme matching the provided design.
- Uses **Next.js + TypeScript**, storing data locally.
- Incremental commits for better tracking.

### Level 2: Animations & Interactivity
- Hover and focus effects for enhanced UI experience.
- Handles overflow smoothly when tasks exceed visible space.
- (Optional) Drag & Drop to move tasks between columns.
- Small, descriptive commits for better version control.

### Level 3: Architecture & Commenting
- Organized **folder structure** for scalability.
- UI and data logic separated for maintainability.
- Clicking a task card opens a **detailed view** with a comment thread.
- Inline comments explaining key code decisions.
- Well-documented commits for tracking changes.

## 🛠️ Tech Stack
- **Next.js** (React Framework)
- **TypeScript** (Static typing for reliability)
- **SCSS/Styled Components** (For styling and theming)
- **Local State Management** (No backend required)
- **Framer Motion** (For smooth animations)

## 📂 Project Structure
```
/tender-tasks-board
├── /components        # Reusable UI components (TaskCard, Column, etc.)
├── /pages            # Next.js pages (index.tsx, task/[id].tsx)
├── /styles          # Global styles and theme settings
├── /utils           # Helper functions (e.g., data formatting, local storage handling)
├── /public          # Static assets (icons, images)
├── package.json     # Project dependencies
└── README.md        # Project documentation
```

## 🚀 Installation & Running Locally
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/tender-tasks-board.git
   cd tender-tasks-board
   ```
2. **Install dependencies**
   ```sh
   npm install  # or yarn install
   ```
3. **Run the development server**
   ```sh
   npm run dev  # or yarn dev
   ```
4. Open **http://localhost:3000** to view the app.

## 🚀 Deployment
- The project is deployed on **Vercel**/**Netlify**.
- Clone the repo and deploy manually or connect to GitHub for automatic deployment.
- Ensure all commits are visible in the repository.

## 🔗 Contributing
1. **Fork** the repository.
2. **Create** a feature branch (`git checkout -b feature-name`).
3. **Commit** your changes (`git commit -m 'Add feature-name'`).
4. **Push** to the branch (`git push origin feature-name`).
5. Open a **Pull Request**.

## 📝 License
This project is **open-source**. Feel free to modify and contribute!

---
**Author:** *Your Name*
