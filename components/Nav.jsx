import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faHome} className="icon text-base" />
            <span className="text-default-text ml-1">Home</span>
          </div>
        </Link>
        <Link href="/TicketPage/new">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faTicket} className="icon" />
            <span className="text-default-text ml-2">Add Job</span>
          </div>
        </Link>
      </div>
      <div>
        <p className=" text-default-text text-base">Job Tracking App</p>
      </div>
    </nav>
  );
};
export default Nav;
