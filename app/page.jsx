import TicketCard from '@/components/TicketCard';

const getTopics = async () => {
  const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/topics`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch topics');
    }

    return res.json();
  } catch (error) {
    console.log('Error loading topics: ', error);
  }
};

const Dashboard = async () => {
  const { topics } = await getTopics();

  const uniqueCategories = [
    ...new Set(topics?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {topics &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
                {topics
                  .filter((topic) => topic.category === uniqueCategory)
                  .map((filteredTopic, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      topic={filteredTopic}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Dashboard;
