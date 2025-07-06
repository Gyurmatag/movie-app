import React, { useState } from 'react';
import { useNavigate, useActionData } from 'react-router';
import { loginUser } from '../utils/auth';

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const actionData = useActionData() as { error?: string } | undefined;
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    const user = loginUser(username, password);
    
    if (user) {
      navigate('/movies');
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to MyMovieDB</h2>
        <p className="login-subtitle">Enter your credentials to access the movie database</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Enter username"
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter password"
              className="form-input"
            />
          </div>
          
          {actionData?.error && (
            <div className="error-message">
              {actionData.error}
            </div>
          )}
          
          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="demo-credentials">
          <h4>Demo Credentials:</h4>
          <p><strong>Username:</strong> demo | <strong>Password:</strong> password</p>
          <p><strong>Username:</strong> admin | <strong>Password:</strong> admin123</p>
        </div>
      </div>
    </div>
  );
} 