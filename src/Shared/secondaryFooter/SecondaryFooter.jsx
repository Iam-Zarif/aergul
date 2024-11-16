

const SecondaryFooter = () => {
  return (
    <div className="text-xs">
      <footer className="footer bg-gray-200 footer-center  text-base-content p-4">
        <aside>
          <p className="text-xs">
            Copyright © {new Date().getFullYear()} - All right reserved by Aergul
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default SecondaryFooter