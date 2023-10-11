import React, { useEffect, useState } from 'react'
import "./whyUs.css"





const WhyUs = () => {


    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const y = window.scrollY;
        if (y >= 2100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='us-con'>

            <div className='un-con-head'>

                <div className='us-head'>Making learning easier and more convenient for you.</div>



                <diV className="us-card-con">

                    {/* <div className={`bottomMenu ${isVisible ? 'show' : 'hide'}`}>

                        <div className='card-icon'>
                            <img src="https://cdn-icons-png.flaticon.com/128/3850/3850259.png"></img>
                        </div>
                        <h2 className='card-heading'>Job Portal</h2>
                        <div className='card-sub-heading'>Effortlessly explore your dream career with our AI-driven job portal. We use cutting-edge technology to match your skills and aspirations with the perfect job opportunities-.</div>


                    </div> */}
                    <div className={`bottomMenu ${isVisible ? 'show' : 'hide'}`}>

                        <div className='card-icon'>
                            <img src="https://cdn-icons-png.flaticon.com/128/4616/4616655.png"></img>
                        </div>

                        <h2 className='card-heading'>AI                    Doubt Solver</h2>
                        <div className='card-sub-heading'>No more struggling with questions. Our AI doubt solver is your instant knowledge companion, providing precise answers whenever you need clarification.</div>



                    </div>
                    <div className={`bottomMenu ${isVisible ? 'show' : 'hide'}`}>

                        <div className='card-icon'>
                            <img src="https://cdn-icons-png.flaticon.com/128/8347/8347411.png"></img>
                        </div>
                        <h2 className='card-heading'>Live Class</h2>
                        <div className='card-sub-heading'>Connect with peers and experts in our dynamic video call community. Join live discussions, collaborate on projects, and gain valuable insights through face-to-face interactions.</div>
                    </div>
                    <div className={`bottomMenu ${isVisible ? 'show' : 'hide'}`}>

                        <div className='card-icon'>
                            <img src="https://cdn-icons-png.flaticon.com/128/10108/10108263.png"></img>
                        </div>
                        <h2 className='card-heading'>Community</h2>
                        <div className='card-sub-heading'>Engage in thought-provoking discussions with fellow learners and subject matter experts. Share your knowledge, ask questions, and participate in a community dedicated to knowledge sharing and growth.</div>
                    </div>
                    <div className={`bottomMenu ${isVisible ? 'show' : 'hide'}`}>

                        <div className='card-icon'>
                            <img src="https://cdn-icons-png.flaticon.com/128/1763/1763648.png"></img>
                        </div>
                        <h2 className='card-heading'>Our Lab</h2>
                        <div className='card-sub-heading'>Hone your coding skills in our state-of-the-art online compiler lab. Practice coding in various languages, tackle challenges, and execute code in real-time, all within a safe and interactive environment.</div>
                    </div>




                </diV>
            </div>









        </div>
    )
}

export default WhyUs