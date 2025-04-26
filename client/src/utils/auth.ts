import { jwtDecode } from 'jwt-decode';

// Define interfaces for JWT payload types
interface JwtPayload {
  exp?: number;
  iat?: number;
}

interface ExtendedJwt extends JwtPayload {
  id?: string;
  username?: string;
  email?: string;
  role?: string;
}

// auth.ts handles token storage, retrieval, login/logout and token validation
class AuthService {
  // This method decodes the JWT token to get the user's profile information.
  getProfile() {
    // jwtDecode is used to decode the JWT token and return its payload.
    return jwtDecode<ExtendedJwt>(this.getToken());
  }

  getAuthHeader() {
    const token = this.getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  // This method checks if the user is logged in by verifying the presence and validity of the token.
  loggedIn() {
    const token = this.getToken();
    // Returns true if the token exists and is not expired.
    return !!token && !this.isTokenExpired(token);
  }

  // This method checks if the provided token is expired.
  isTokenExpired(token: string) {
    try {
      // jwtDecode decodes the token to check its expiration date.
      const decoded = jwtDecode<JwtPayload>(token);

      // Returns true if the token has expired, false otherwise.
      if (decoded?.exp && decoded?.exp < Date.now() / 1000) {
        return true;
      }
    } catch (err) {
      console.log('Token is expired:', err);
      // If decoding fails, assume the token is not expired.
      return false;
    }
  }

  // This method provides a clear alias for checking authentication status
  isAuthenticated(): boolean {
    return this.loggedIn();
  }

  // This method retrieves the token from localStorage.
  getToken(): string {
    const loggedUser = localStorage.getItem('id_token') || '';
    // Returns the token stored in localStorage.
    return loggedUser;
  }

  // This method logs in the user by storing the token in localStorage and redirecting to the home page.
  login(token: string) {
    localStorage.setItem('id_token', token);
  }

  // This method logs out the user by removing the token from localStorage and redirecting to the home page.
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
