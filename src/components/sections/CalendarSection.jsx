import React from 'react';
import SectionTitle from '../shared/SectionTitle';

const CalendarSection = ({ events }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle>Academic Calendar</SectionTitle>
        <div className="mt-10 space-y-4">
          {events?.map((event, idx) => (
            <div key={idx} className="flex items-center p-4 border-l-4 border-university-red bg-gray-50 rounded-r-lg">
              <div className="text-center pr-6 border-r border-gray-200">
                <span className="block text-xl font-bold text-university-red">{event.day}</span>
                <span className="text-xs uppercase font-semibold text-gray-500">{event.month}</span>
              </div>
              <div className="pl-6">
                <h4 className="font-bold text-gray-800">{event.title}</h4>
                <p className="text-sm text-gray-600">{event.time} • {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;