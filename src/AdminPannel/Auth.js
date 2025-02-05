const users = [
    { username: "admin", password: "admin123", role: "admin" },
    { username: "user", password: "user123", role: "user" },
  ];
  
  export const login = (username, password) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    }
    return null;
  };
  
  export const getUser = () => JSON.parse(localStorage.getItem("user"));
  
  export const logout = () => localStorage.removeItem("user");
  