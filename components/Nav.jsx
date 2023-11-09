import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <span className="text-default-text ml-2">Home</span>
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
          <span className="text-default-text ml-2">Add Job</span>
        </Link>
      </div>
      <div>
        <p className=" text-default-text">Job Tracking App</p>
      </div>
    </nav>
  );
};
export default Nav;
