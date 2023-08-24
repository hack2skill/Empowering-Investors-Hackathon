import Switcher from "./Switcher"
import Logout from "./Logout"
export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-12 right-12 p-3 bg-violet-500 w-11 h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? "rotate-45  translate-y-0.5" : ""
            }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${menuOpened ? "hidden" : ""
            }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? "-rotate-45" : ""
            }`}
        />
      </button>
      <div
        className={`z-10 fixed text-slate-700 dark:text-slate-300 top-0 right-0 bottom-0 bg-white/50 backdrop-blur dark:bg-slate-800/50 transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-80" : "w-0"}`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton label="About" onClick={() => onSectionChange(0)} />
          <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
          <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
          <MenuButton label="Contact" onClick={() => onSectionChange(3)} />
          <Switcher />
          <Logout />
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-violet-500 transition-colors"
    >
      {label}
    </button>
  );
};
