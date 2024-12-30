
# FeedBook Client

This repository represents the client-side of the **FeedBook** project. It is designed to interact with the server-side repository, enabling a complete social media experience. The application allows users to register, sign in, interact with a feed, manage profiles, and connect with friends.

## Features

- **User Registration and Login**: Create a new user account or log in with existing credentials.
- **Feed Page**: View posts from yourself, your friends, and random users. Add, edit, delete, like, and comment on posts.
- **User Profiles**: View your profile or explore other users' profiles.
- **Theme Options**: Switch between light and dark modes.
- **Session Management**: Log out securely.

---

## Prerequisites

Ensure the following are installed on your system:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- A running instance of the **server-side application** (available in the [server repository](https://github.com/YehonatanHayat/FeedBook-server))

---

## How to Run

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/YehonatanHayat/part2.git
   cd part2
   ```

   Make sure to switch to the updated branch:

   ```bash
   git checkout main_part_3
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Server**:

   Follow the instructions in the [server repository](https://github.com/YehonatanHayat/FeedBook-server) to set up and start the backend server.

4. **Start the Client**:

   ```bash
   npm start
   ```

   The application will open in your default browser (or accessible at `http://localhost:3000`).

---

## Usage Instructions

1. **Register**: Create an account by filling in all required fields. Follow the guidelines for valid input.
2. **Login**: Use your credentials to log in. Alternatively, use the built-in user:
   - **Email**: `football@life`
   - **Password**: `footballislife`
3. **Feed Page**: 
   - Add new posts using the "Add Post" button.
   - Edit or delete your own posts.
   - Like or comment on any post.
4. **Profile Navigation**: 
   - Access your profile or visit others' profiles.
5. **Dark Mode and Logout**:
   - Use the dropdown menu in the top-right corner to switch themes or log out.

---

## Workflow

The project development was structured for efficiency and clarity:

- **Task Management**: Tasks were planned and assigned using Jira, ensuring clear goals and progress tracking.
- **Version Control**: GitHub was used for collaboration, with separate branches for each feature. Code was merged strategically after thorough testing.
- **Division of Work**: One branch focused on the signup process, while another implemented the feed page. Each task was designed to be modular and cohesive.
- **MVC Structure**: The code was organized using the Model-View-Controller (MVC) design pattern to maintain clean separation of concerns.

---

## Notes

- Ensure the backend server is running before starting the client application.
- If you encounter issues, verify your dependencies and environment setup.

---

Make sure to always use the **main_part_3 branch** for the most up-to-date code.
