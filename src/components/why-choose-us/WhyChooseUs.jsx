import React from 'react'

import datadriven from '../../assets/whychoosecard/datadriven.png'
import security from '../../assets/whychoosecard/security.png'
import support from '../../assets/whychoosecard/support.png'
import targetreach from '../../assets/whychoosecard/targetreach.png'
import ChooseCard from './ChooseCard'

const whyChooseUsData = [
    {
        id: 1,
        image: datadriven,
        title: 'Data-Driven Insights',
        description: 'We provide real-time analytics to optimize your campaign’s performance.'
    },
    {
        id: 2,
        image: security,
        title: 'Security & Reliability',
        description: 'Your data is secure with our top-tier infrastructure and encryption protocols.'
    },
    {
        id: 3,
        image: support,
        title: '24/7 Support',
        description: 'Our team is always here to support your advertising goals, anytime, anywhere.'
    },
    {
        id: 4,
        image: targetreach,
        title: 'Targeted Reach',
        description: 'Our platform ensures your ads reach the right audience at the right time.'
    }
]

const WhyChooseUs = () => {
  return (
    <div className='p-5'>
        <div className="flex justify-center items-center p-4">
            <h1 className='text-4xl font-bold pb-14'>Why Choose Us</h1>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center">
            {whyChooseUsData.map((item) => (
                <div key={item.id}>
                   <ChooseCard
                   image={item.image}
                   title={item.title}
                   description={item.description}
                   />
                </div>
            ))}
        </div>
    </div>
  )
}

export default WhyChooseUs