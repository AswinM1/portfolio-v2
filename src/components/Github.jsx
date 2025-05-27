import React, { useEffect, useState } from 'react';

function Github() {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://github-contributions-api.jogruber.de/v4/ASWIN_M1");
        const data = await response.json();
        // Flatten weeks and get all contribution days
        const allDays = data.weeks.flatMap(week => week.contributionDays);
        setContributions(allDays);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">GitHub Contributions</h2>
      <div className="grid grid-cols-7 gap-2">
        {contributions.map((day, index) => (
          <div
            key={index}
            className="p-2 text-center rounded"
            style={{
              backgroundColor: day.color,
              color: '#fff',
              fontSize: '12px'
            }}
          >
            {day.count}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Github;
