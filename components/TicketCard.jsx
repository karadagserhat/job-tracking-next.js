import Link from 'next/link';
import DeleteBlock from './DeleteBlock';
import EditBlock from './EditBlock';
import PriorityDisplay from './PriorityDisplay';
import StatusDisplay from './StatusDisplay';

const TicketCard = ({ topic }) => {
  function formatTimestamp(timestamp) {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString('tr-TR', options);

    return formattedDate;
  }

  return (
    <div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={topic.priority} />
        <div className="ml-auto">
          <div className="flex justify-between gap-3 items-center -mt-1">
            <EditBlock id={topic._id} />
            <DeleteBlock id={topic._id} />
          </div>
        </div>
      </div>
      <Link href={`/TicketPage/${topic._id}`} style={{ display: 'contents' }}>
        <h4>{topic.company}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{topic.description} </p>

        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex ">
            <p className="text-xs mt-auto">
              {formatTimestamp(topic.createdAt)}{' '}
            </p>
          </div>
          <div className="ml-auto  flex items-end">
            <StatusDisplay status={topic.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};
export default TicketCard;
