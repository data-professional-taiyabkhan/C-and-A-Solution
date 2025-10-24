import { FC } from 'react';

/**
 * A simple preloader overlay that appears while the app is starting up.
 * It uses Tailwind CSS utility classes for styling and animation.
 * You can customize the loader size, colors, and animation duration by
 * tweaking the utility classes below.
 */
const Preloader: FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 transition-colors">
      {/* Spinner */}
      <div className="h-16 w-16 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
    </div>
  );
};

export default Preloader;