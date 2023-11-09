'use client';

import { faX, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const DeleteBlock = ({ id }) => {
  return (
    <Link href={`/TicketPage/${id}`}>
      <FontAwesomeIcon
        icon={faEdit}
        className=" text-green-400 hover:cursor-pointer hover:text-green-200"
      />
    </Link>
  );
};

export default DeleteBlock;
