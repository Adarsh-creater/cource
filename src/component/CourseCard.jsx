import { Star } from 'lucide-react';
import React from 'react';
import complg from '../assets/image/company-logo.png'
import c1 from '../assets/image/c-1.jpg'
import c2 from '../assets/image/c-2.jpeg'
import c3 from '../assets/image/c-3.png'

function CourseCard({ course }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-80 transform transition duration-300 hover:scale-105">
      <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <img src={course.institutionLogo} alt={course.institution} className="w-6 h-6 rounded-full" />
          <p className="text-gray-700 font-medium">{course.institution}</p>
        </div>
        <h3 className="text-lg font-semibold mt-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mt-1">Skills you'll gain: {course.skills}</p>
        <div className="flex items-center my-3 text-yellow-500">
          <Star />
          <p className="ml-1 font-semibold">{course.rating}</p>
          <p className="ml-1 text-gray-500">• {course.reviews} reviews</p>
        </div>
        <ul className="text-gray-500 text-sm  ">  
          <li>• {course.level}</li>
          <li>• {course.type}</li>
          <li>• {course.duration}</li>
          <li>• {course.fee}</li>
        </ul>
      </div>
    </div>
  );
}

function CourseList() {
  const courses = [
    {
      image: c1, // Replace with actual image URLs
      institutionLogo: complg,
      institution: 'California Institute of the Arts',
      title: 'UI / UX Design',
      skills: 'Graphic Design, Strategy, User Experience, Visual Design, Web Design',
      rating: '4.7',
      reviews: '7.7K',
      level: 'Beginner',
      type: 'Specialization',
      duration: '3 - 6 Months',
      fee:'free',
    },
    {
      image: c2,
      institutionLogo: complg,
      institution: 'Coursera Project Network',
      title: 'Build a Portfolio Website with HTML, CSS, and JavaScript',
      skills: 'HTML and CSS, JavaScript, Web Design, Web Development',
      rating: '4.1',
      reviews: '75',
      level: 'Intermediate',
      type: 'Guided Project',
      duration: 'Less Than 2 Hours',
      fee:'paid'
    },
    {
      image: c3,
      institutionLogo: complg,
      institution: 'University of California, Davis',
      title: 'Introduction to Web Development',
      skills: 'JavaScript, Web Design, Web Development',
      rating: '4.7',
      reviews: '3.7K',
      level: 'Beginner',
      type: 'Course',
      duration: '1 - 4 Weeks',
      fee:'free',
    },
    {
      image: c3,
      institutionLogo: complg,
      institution: 'Harvard University',
      title: 'Computer Science for Web Programming',
      skills: 'Python, JavaScript, Web Development, Computer Science',
      rating: '4.8',
      reviews: '9.5K',
      level: 'Advanced',
      type: 'Course',
      duration: '6 - 8 Weeks',
      fee:'free',
    },
    {
      image: c2,
      institutionLogo: complg,
      institution: 'Google Cloud',
      title: 'Google Cloud Platform Fundamentals',
      skills: 'Cloud Computing, Infrastructure, Google Cloud, Networking',
      rating: '4.6',
      reviews: '4.3K',
      level: 'Intermediate',
      type: 'Specialization',
      duration: '2 - 4 Months',
      fee:'free',
    },
    {
      image: c1,
      institutionLogo: complg,
      institution: 'Stanford University',
      title: 'Introduction to Machine Learning',
      skills: 'Machine Learning, AI, Data Science, Python, Algorithms',
      rating: '4.9',
      reviews: '15K',
      level: 'Beginner',
      type: 'Course',
      duration: '8 - 10 Weeks',
      fee:'paid',
    }
    
  ];

  return (
    <div className="flex flex-wrap flex-1 mx-auto justify-center gap-4  p-4 w-[60%]">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}

export default CourseList;