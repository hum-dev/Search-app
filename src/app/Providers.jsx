'user client'
import { ThemeProvider } from "next-themes"

export default function Providers({ children }) {
  return (
    <div>
      <ThemeProvider defaultThemes="system" attribute="class">
        <div className="text-gray-600 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300">
          {children}
        </div>
      </ThemeProvider>
    </div>
  );
}
