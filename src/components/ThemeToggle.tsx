import { FaMoon, FaSun } from 'react-icons/fa';
import { useGlobalContext } from '../utils/hooks';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  const iconClass = 'toggle-icon';
  const icon = isDarkTheme ? (
    <FaSun className={iconClass} />
  ) : (
    <FaMoon className={iconClass} />
  );

  return (
    <div className="toggle-container">
      <button type="button" className="dark-toggle" onClick={toggleDarkTheme}>
        {icon}
      </button>
    </div>
  );
};

export default ThemeToggle;
