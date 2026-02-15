
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectsGallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">Our Portfolio</h2>
            <p className="text-gray-600 text-lg">
              Every installation follows our strict engineering standards. Click on a project card to see the full technical specifications (SA Info).
            </p>
          </div>
          <div className="flex bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
            {(['All', 'Residential', 'Commercial'] as const).map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${filter === f ? 'bg-blue-900 text-white shadow-lg' : 'text-gray-500 hover:text-blue-900'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.location}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-5 right-5 bg-yellow-500 text-blue-900 font-black px-4 py-2 rounded-2xl text-xs shadow-xl">
                  {project.capacity.split(' ')[0]} kWp
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <div className="text-white">
                      <p className="text-xs uppercase tracking-widest font-black text-yellow-500 mb-1">Click to view details</p>
                      <h5 className="text-xl font-bold">SA Info Specification</h5>
                   </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                   <h4 className="font-bold text-blue-900 text-2xl group-hover:text-blue-700 transition-colors">{project.location.split(',')[0]}</h4>
                </div>
                <p className="text-blue-600 font-bold text-xs mb-4 uppercase tracking-widest">{project.capacity}</p>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
                   <span className="text-[10px] uppercase font-black text-gray-400 tracking-tighter">Verified Installation</span>
                   <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-900">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-blue-900/90 backdrop-blur-md animate-fade-in">
             <div className="bg-white rounded-[40px] w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-scale-up">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-8 right-8 text-blue-900 hover:scale-110 transition-transform z-10"
                >
                   <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                
                <div className="flex flex-col lg:flex-row">
                   <div className="lg:w-1/2 h-80 lg:h-auto">
                      <img src={selectedProject.imageUrl} className="w-full h-full object-cover" alt={selectedProject.title} />
                   </div>
                   <div className="lg:w-1/2 p-12">
                      <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-xs font-black uppercase mb-4 inline-block tracking-widest">Project SA Info</span>
                      <h3 className="text-4xl font-black text-blue-900 mb-2">{selectedProject.location}</h3>
                      <p className="text-blue-600 font-bold mb-6">{selectedProject.capacity}</p>
                      
                      <div className="space-y-6 mb-10">
                         <h5 className="text-sm font-black uppercase text-gray-400 border-b pb-2 tracking-widest">Technical Specs</h5>
                         <ul className="grid grid-cols-1 gap-4">
                            {selectedProject.detailedInfo?.map((info, idx) => (
                              <li key={idx} className="flex items-center text-gray-700 font-medium">
                                 <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 shrink-0">
                                    <svg className="w-3 h-3 text-blue-900" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                                 </div>
                                 {info}
                              </li>
                            ))}
                         </ul>
                      </div>

                      <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                         <p className="text-blue-900 font-bold mb-2 italic">Client Result:</p>
                         <p className="text-gray-600 italic">"The engineering precision was evident. Our electric bill dropped by 65% in the first full month of operation."</p>
                      </div>

                      <button 
                        onClick={() => { setSelectedProject(null); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="mt-8 w-full bg-blue-900 text-white py-4 rounded-2xl font-black shadow-xl hover:shadow-2xl hover:bg-blue-800 transition-all transform hover:-translate-y-1"
                      >
                         GET A QUOTE LIKE THIS
                      </button>
                   </div>
                </div>
             </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGallery;
