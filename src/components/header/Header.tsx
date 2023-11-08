const Header = () => {
  const pathName = window.location.pathname.split('/');
  let title = pathName[1];
  if (title === 'identification') {
    title = 'Indentify yourself';
  } else if (title === 'verification') {
    title = 'Additional security verification';
  } else if (title === 'dashboard') {
    title = 'Document Dashboard';
  } else {
    title = 'Home';
  }

  return (
    <div>
      <div className="">
        <div className="bg-white h-16 flex">
          <div className="w-4/5 m-auto">
            <div>Logo</div>
          </div>
        </div>

        <div className="bg-primary h-16 flex">
          <div className="w-4/5 m-auto">
            <h4 className="text-white text-xl">{title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
