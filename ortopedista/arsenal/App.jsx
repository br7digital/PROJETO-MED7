import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';

// Função para validar se uma string é um base64 válido de e-mail (básico)
const isValidBase64Email = (str) => {
  if (!str) return false;
  try {
    const decoded = atob(str);
    // Regex simples para e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(decoded);
  } catch (e) {
    return false;
  }
};

const SECRET_KEY = 'med7_2026_elite';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const params = new URLSearchParams(window.location.search);
      const key = params.get('key');
      const auth = params.get('auth'); // E-mail em Base64

      const isKeyValid = key === SECRET_KEY;
      const isAuthValid = isValidBase64Email(auth);

      if (isKeyValid && isAuthValid) {
        setIsAuthenticated(true);
      } else {
        // Redireciona para a página de vendas principal em caso de falha
        window.location.replace('/ortopedista/');
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-med-navy flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-med-cyan/30 border-t-med-cyan rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // O redirecionamento já está sendo feito no useEffect
  }

  return (
    <div className="min-h-screen bg-med-navy font-inter text-gray-200">
      <Dashboard />
    </div>
  );
}

export default App;
