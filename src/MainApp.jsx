import { Routes, Route } from 'react-router-dom';
import App from './App'; // Home page
import BotPage from './BotPage'; // Bot page

function MainApp() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/botpage" element={<BotPage />} />
    </Routes>
  );
}

export default MainApp;
