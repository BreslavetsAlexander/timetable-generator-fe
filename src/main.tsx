import ReactDOM from 'react-dom/client';
import { App } from './App';
import { CurrentUserProvider } from './contexts';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('add #root element');
}

ReactDOM.createRoot(rootElement).render(
  <CurrentUserProvider>
    <App />
  </CurrentUserProvider>,
);
