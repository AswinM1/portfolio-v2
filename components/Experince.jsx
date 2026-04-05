import React from 'react';
import acc from '../assets/images/acc.png';
import tvs from '../assets/images/tvs.png'

function Experience() {
  const comp = [
    {
      name: "Accenture",
      role: "Summer Intern",
      des: ["Learned about oracle databases and concepts like tablespaces,RMAN and backup",
      "gained hands-on experience using the oracle server and created tablespaces,user management"],
      time: "May 2025 - Present",
      img: acc
    },
    {
      name: "TVS Sensing Solutions",
      role: "Front-end Intern",
       des: [
    "Developed a responsive and user-friendly UI for the company’s knowledge portal",
    "Designed a modern and visually appealing interface for improved user experience",
    "Built the frontend using React.js",
    "Styled the application using Tailwind CSS",
    "Ensured responsiveness across different devices and screen sizes"
  ],
      
      time: "June 2024 - July 2024",
      img: tvs
    }
  ];

  return (
    <div className="px-6 py-8">
      <h2 className="text-3xl font-serif tracking-tight text-black dark:text-white mb-6">
        Experience
      </h2>
      <div className="space-y-2">
        {comp.map((val, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-start p-4 "
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
                <p className="text-xl font-medium font-sans tracking-tight text-neutral-800 dark:text-white">
                  {val.name}
                </p>
                <p className="text-md font-sans tracking-tight text-black dark:text-gray-300">
                  {val.role}
                </p>
                <div className=" w-full flex flex-col text-md font-sans tracking-tight text-gray-700 dark:text-gray-400 ">
                  {val.des.map((val,idx)=>
                  (
                    <li>{val}</li>
                  ))}
                </div>
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
