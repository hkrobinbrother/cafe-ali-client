import React from 'react';

const SectionTitle = ({subheading,hading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-8'>
            <p className='text-yellow-600 italic mb-2'>------- {subheading} -------</p>
            <h1 className='text-2xl border-y-4 uppercase text-gray-700  border-gray-400 py-4'>{hading}</h1>
        </div>
    );
};

export default SectionTitle;