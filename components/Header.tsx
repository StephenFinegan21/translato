import Logo from "./Logo";
import ThemeSwitch from "./ui/ThemeSwitch";
import UserButton from "./ui/UserButton.tsx";

export default function Header() {
  return (
    <header className="sticky top-0 z-50   dark:bg-zinc-800">
      <nav className="flex flex-col sm:flex-row items-center p-5 gap-8 max-w-7xl mx-auto">
        <Logo />
        <div className="flex-1 flex items-center justify-end space-x-4">
          <p>languageSelect</p>
          <ThemeSwitch />
         <UserButton />
        </div>
      </nav>
    </header>
  );
}
