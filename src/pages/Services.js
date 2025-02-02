import React from 'react';
import styled from 'styled-components';
import { 
  FaCode, 
  FaCloud, 
  FaChartLine, 
  FaMobileAlt, 
  FaDatabase, 
  FaBullhorn, 
  FaShieldAlt, 
  FaCogs 
} from 'react-icons/fa';

const ServicesContainer = styled.div`
  padding: 2rem;
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .service-card {
    background-color: #f8f9fa;
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 6px 12px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    }

    .service-icon {
      font-size: 3rem;
      color: #007bff;
      margin-bottom: 1rem;
    }

    .service-details {
      margin-top: 1rem;
      
      .service-pricing {
        font-weight: bold;
        color: #28a745;
        margin-top: 0.5rem;
      }
    }
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;
    color: #333;
  }
`;

const Services = () => {
  const servicesList = [
    {
      title: 'Web Development',
      description: 'End-to-end web solutions using cutting-edge technologies',
      icon: FaCode,
      subServices: [
        'Custom Website Design',
        'E-commerce Platforms',
        'Responsive Web Applications'
      ],
      pricing: 'Starting from $1,500'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure services',
      icon: FaCloud,
      subServices: [
        'Cloud Migration',
        'Serverless Architecture',
        'Multi-cloud Management'
      ],
      pricing: 'Custom Pricing'
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive online marketing and brand strategies',
      icon: FaBullhorn,
      subServices: [
        'SEO Optimization',
        'Social Media Marketing',
        'Content Strategy'
      ],
      pricing: 'Starting from $1,000/month'
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform mobile application solutions',
      icon: FaMobileAlt,
      subServices: [
        'iOS Development',
        'Android Development',
        'React Native Apps'
      ],
      pricing: 'Starting from $5,000'
    },
    {
      title: 'Database Solutions',
      description: 'Advanced database design and optimization',
      icon: FaDatabase,
      subServices: [
        'Database Architecture',
        'Performance Tuning',
        'Data Migration'
      ],
      pricing: 'Starting from $2,000'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for businesses',
      icon: FaShieldAlt,
      subServices: [
        'Security Audits',
        'Penetration Testing',
        'Threat Monitoring'
      ],
      pricing: 'Starting from $3,000'
    },
    {
      title: 'Business Consulting',
      description: 'Strategic technology and business consulting',
      icon: FaCogs,
      subServices: [
        'Digital Transformation',
        'IT Strategy',
        'Process Optimization'
      ],
      pricing: 'Custom Pricing'
    },
    {
      title: 'Performance Marketing',
      description: 'Data-driven marketing and growth strategies',
      icon: FaChartLine,
      subServices: [
        'PPC Campaigns',
        'Conversion Optimization',
        'Analytics & Reporting'
      ],
      pricing: 'Starting from $1,500/month'
    }
  ];

  return (
    <ServicesContainer>
      <h1 className="section-header">Our Comprehensive Services</h1>
      <div className="services-grid">
        {servicesList.map((service, index) => {
          const ServiceIcon = service.icon;
          return (
            <div key={index} className="service-card">
              <ServiceIcon className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-details">
                <h4>Key Services:</h4>
                <ul>
                  {service.subServices.map((subService, subIndex) => (
                    <li key={subIndex}>{subService}</li>
                  ))}
                </ul>
                <p className="service-pricing">{service.pricing}</p>
              </div>
            </div>
          );
        })}
      </div>
    </ServicesContainer>
  );
};

export default Services;