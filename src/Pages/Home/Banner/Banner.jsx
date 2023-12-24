import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className=" opacity-70 lg:py-28 py-14 md:py-14 bg-[url('https://media.istockphoto.com/id/1319763895/photo/smiling-mixed-race-mature-man-on-grey-background.jpg?s=1024x1024&w=is&k=20&c=N8tCKAiS77uX8ZGltdjkhzh5pXzvuNHg48acJETZfs8=')]">
                <div className=" flex-col items-end lg:flex-row-reverse ">
                    
                    <div className="text-center pt-10">
                        <h1 className="lg:text-3xl text-2xl font-bold text-[#5ae253] ">Effortless Task Management <br /> Simplify Your Workflow <br />with Our Intuitive Task Manager!</h1>
                        <p className="py-3 lg:text-md text-white ">Streamline your daily tasks with our intuitive Task Manager.<br /> Stay organized, boost productivity,<br />  and effortlessly manage your projects with ease.</p>
                        
                       <Link to='/login'> <button className="btn bg-white border rounded-full  border-[#14a077] hover:bg-[#14a077] hover:text-white">Let’s Explore</button></Link>
                      
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;