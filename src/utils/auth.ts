export interface User {
  id: string;
  username: string;
  email: string;
}

const AUTH_KEY = 'movie-app-auth';

export const auth = {
  // Get current user from localStorage
  getUser: (): User | null => {
    const stored = localStorage.getItem(AUTH_KEY);
    return stored ? JSON.parse(stored) : null;
  },

  // Save user to localStorage
  login: (user: User): void => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  },

  // Remove user from localStorage
  logout: (): void => {
    localStorage.removeItem(AUTH_KEY);
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return auth.getUser() !== null;
  }
};

// Mock user data for demo
export const mockUsers = [
  { id: '1', username: 'demo', email: 'demo@example.com', password: 'password' },
  { id: '2', username: 'admin', email: 'admin@example.com', password: 'admin123' }
];

  // Mock login function
export const loginUser = (username: string, password: string): User | null => {
  const user = mockUsers.find(u => u.username === username && u.password === password);
  if (user) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user;
    auth.login(userWithoutPassword);
    return userWithoutPassword;
  }
  return null;
}; 