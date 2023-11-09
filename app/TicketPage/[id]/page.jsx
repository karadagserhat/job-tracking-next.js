import EditTicketForm from '@/components/EditTicketForm';

const getTopicById = async (id) => {
  const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/topics/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch topic');
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

let updateTopicData = {};
const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === 'new' ? false : true;

  if (EDITMODE) {
    updateTopicData = await getTopicById(params.id);
    updateTopicData = updateTopicData.foundTopic;
  } else {
    updateTopicData = {
      _id: 'new',
    };
  }

  return (
    <div>
      <EditTicketForm topic={updateTopicData} />
    </div>
  );
};
export default TicketPage;
