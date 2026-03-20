import React from 'react';
import Card from '../shared/Card';
import SectionTitle from '../shared/SectionTitle';
import { newsData } from '../../data/news'; // Importing from your data folder

const NewsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <SectionTitle>Latest Updates</SectionTitle>
          <a href="/news" className="text-blue-600 font-semibold hover:underline">View All News</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.slice(0, 3).map((item) => (
            <Card 
              key={item.id}
              title={item.title}
              description={item.excerpt}
              image={item.image}
            >
              <button className="text-sm font-bold text-blue-900 mt-2 hover:translate-x-1 transition-transform inline-flex items-center">
                Read More →
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;