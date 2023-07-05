import React from 'react';

import pretty from '../../images/Ric-Rac_LetItSnow_JEWELRY__18605.jpg';
import bee from '../../images/chain-maille-jewelry-making-tips.jpg.optimal.jpg';

import packMule from '../../images/Pack-mule.jpg';
// import express from '../../images/express.png'
// import sql from '../../images/sql.png'
import suit from '../../images/chain mail example.jpg'



export default function Portfolio() {
  const projects = [
    {
      id: 1,
      name: 'pretty jewelry',
      description: '',     
      src: pretty,
      backgroundColor: '#e5446dff',
      toolsUsed: 'HTML, CSS, JavaScript, Git, GitHub, APIs'
    },
    {
      id: 2,
      name: "Bee Bracelet",
      description: '',
      src: bee,
      backgroundColor: '#ff9474ff',
       },
    {
      id: 2,
      name: "Pack Mule",
      description: '',
      src: packMule,
      backgroundColor: '#ff9474ff',
    },
    {
      id: 3,
      name: "chainMail suit",
      description: '',
      src: suit,
      backgroundColor: '#ff9474ff',
      },

  ];

  return (
    <div>
      <h1 className="text-center">Portfolio Page</h1>
      <p>
        {/* Rest of the content */}
      </p>
      <div className='row'>
        {projects.map(project => (
          <div className='col-md-4 col-sm-12' key={project.id}>
            <div className="card" style={{ backgroundColor: project.backgroundColor }}>
              {/* Render project details */}
              <img src={project.src} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '24px' }}>{project.name}</h5>
                <p className="card-text" style={{ fontSize: '18px' }}>{project.description}{project.toolsUsed}</p>
                <a href={project.Repo} target="_blank" className="btn btn-primary me-3">Github Repo</a>
                <a href={project.deployed} target="_blank" className="btn btn-primary">Deployed Application</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
