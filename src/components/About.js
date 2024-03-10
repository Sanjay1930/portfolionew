import AboutImg from '../assets/about.png';

export default function About(){
    const config = {
        line1: 'Hi, My name is Sanjay Krishna G. I am a front-end developer. I built beautiful website with React.js and tailwind CSS',
        line2: 'I am proficient in frontend skills like React.js, HTML, CSS, tailwind CSS, Bootstarp and many more.',
        line3: 'In backend I know Node.js, MongoDB.'
    }


    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:Pw-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold '>About ME</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3}</p>
            </div>
            
        </div>
    </section>
}