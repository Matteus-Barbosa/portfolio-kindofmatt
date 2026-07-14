import React from 'react';

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg leading-8 text-gray-400">{subtitle}</p>}
    </div>
  );
}