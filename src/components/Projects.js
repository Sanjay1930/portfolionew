import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/Ticket.jpg';

export default function Projects(){
    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Ecommerce Website. Built with React.js, node.js and mongo DB',
                link: 'https://github.com'
            },
            {
                image: websiteImg2,
                description: 'Food Ecommerce Website like swiggy. Built with HTML & CSS',
                link: 'https://github.com/Sanjay1930/food'
            },
            {
                image: websiteImg3,
                description: 'Smart E-Ticketing System. Built with a React.js',
                link: 'https://github.com'
            },
            
        ]
    }

    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
            <h1  className='text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold'>Projects</h1>
            <p>These are some of my projects. I have built these with React, HTML, CSS, BOOTSTARP. check them out.</p>
            </div>         
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
            {config.projects.map((projects) => (
                <a href = {projects.link}>
                        <div className='relative'>
                        <img  className='h-[200px] w-[500px]' src={projects.image}/>
                        <div className='project-desc'>
                            <p className='text-center py-5 px-5'>{projects.description}</p>
                            <div className='flex justify-center'>
                            <a className='btn' target='_blank' href={projects.link}>View Project</a>
                            </div>
                        </div>
                        
                    </div>
             </a>
            ))}
            
                
                   
            </div>
        </div>
    </section>
}