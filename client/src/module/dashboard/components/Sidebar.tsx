import { Link } from 'react-router-dom';

const menuItems = [
  { id: 1, label: 'Home', path: '/home' },
  { id: 2, label: 'Project', path: '/project' },
  { id: 3, label: 'Contact', path: '/contact' }
];

const Sidebar = () => {
  return (
    <div className="bg-sidebar w-[200px] text-white flex flex-col gap-3 h-screen p-4">
      <span className="text-3xl mt-4 mb-6">Sumit</span>
      {menuItems.map((mi) => (
        <Link key={mi.id} to={mi.path} className="custom-li">
          {mi.label}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
