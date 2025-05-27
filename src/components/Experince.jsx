import React from 'react';
import acc from '../assets/images/acc.png';
import tvs from '../assets/images/tvs.png'

function Experience() {
  const comp = [
    {
      name: "Accenture",
      role: "Summer Intern",
      des: "Interning at Accenture India",
      time: "May 2025 - Present",
      img: acc
    },
    {
      name: "TVS Sensing Solutions",
      role: "Front-end Intern",
      des: "Developed a responsive and user-friendly UI for the knowledge portal of the company",
      time: "June 2024 - July 2024",
      img: tvs
    }
  ];

  return (
    <div className="px-6 py-8">
      <h2 className="text-3xl font-semibold font-sans tracking-tight text-black dark:text-white mb-6">
        Experience
      </h2>
      <div className="space-y-2">
        {comp.map((val, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-5 p-4 rounded-lg"
          >
            <div className="flex items-start gap-4">
              {val.img && (
                <img
                  src={val.img}
                  alt={val.name}
                  className="w-10 h-10 object-contain rounded-sm "
                />
              )}
              <div>
                <p className="text-xl font-semibold font-sans tracking-tight text-black dark:text-white">
                  {val.name}
                </p>
                <p className="text-md font-sans tracking-tight text-black dark:text-gray-300">
                  {val.role}
                </p>
                <p className="text-md font-sans tracking-tight text-gray-700 dark:text-gray-400">
                  {val.des}
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-600 dark:text-white font-semibold  whitespace-nowrap">
              {val.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
