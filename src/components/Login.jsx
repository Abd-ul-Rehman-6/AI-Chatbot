import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Sparkles, ArrowRight, UserPlus } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Apne Python Backend Endpoint par credentials bhejein
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Login Response:', data);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        
        {/* Header */}
        <div className="auth-header">
          <div className="auth-brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <div className="logo-icon">✦</div> 
            <span>XI AI Chatbot</span>
          </div>
          <h2>Welcome back</h2>
          <p>Enter your credentials to access your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          
          {/* Email Field */}
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="input-group">
            <div className="label-row">
              <label htmlFor="password">Password</label>
              <a href="#forgot" className="forgot-link">Forgot password?</a>
            </div>
            <div className="input-wrapper">              
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="auth-submit-btn" disabled={loading}>
            {loading ? 'Signing in...' : (
              <>
                Sign In
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        {/* Footer & Create Account Action */}
        <div className="auth-footer">
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
          <button 
            type="button" 
            className="create-account-btn" 
            onClick={() => navigate('/signup')}
            style={{
              marginTop: '12px',
              width: '100%',
              padding: '10px',
              background: 'transparent',
              border: '1px solid var(--border-color, #e2e8f0)',
              borderRadius: '12px',
              fontSize: '13px',
              fontWeight: '600',
              color: 'var(--text-dark, #0f172a)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <UserPlus size={16} />
            Create an Account
          </button>
        </div>

      </div>
    </div>
  );
};

export default Login;