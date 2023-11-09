import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import StatusDisplay from './StatusDisplay';

const TicketCard = () => {
  return (
    <div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>Job Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">Lorem ipsum dolor sit amet.</p>

      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex ">
          <p className="text-xs mt-auto">06/15-1995</p>
        </div>
        <div className="ml-auto  flex items-end">
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
};
export default TicketCard;
