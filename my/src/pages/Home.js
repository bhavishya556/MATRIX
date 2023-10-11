import React, { useEffect, useState } from 'react';
import { useFirebase } from '../context/Firebase';
import Nav from '../comp/Nav';
import Card from '../comp/Card';
import { Link, useNavigate } from "react-router-dom";
import HomeHero from '../comp/HomeHero';
import "./home.css";
import TxtColorChange from '../comp/TxtColorChange';
import WhyUs from '../comp/WhyUs';
import Join from '../comp/Join';
import Footer from '../comp/Footer'


const Home = () => {

    const navigate = useNavigate();
    const firebase = useFirebase(); // Define firebase before using it

    const logout = () => {
        firebase.logOut();
        navigate("/login");
    };


    useEffect(() => {
        if (!firebase.isLogedIn) {
            navigate("/");
        }
    }, [firebase, navigate])

    const [books, setBooks] = useState([]);

    useEffect(() => {
        firebase.listAllBooks()
            .then((books) => {
                setBooks(books.docs);
                console.log("worked", books.docs[0].data());
            })
            .catch((error) => {
                console.error("Error fetching books:", error);
            });



    }, []);



    return (
        <div>
            <Nav  ></Nav>
            <HomeHero />
            <div className='course-container'>
                <p className='couser-heading'>Explore all Our Courses.</p>




                {/* <h1 className='heading'>All course</h1> */}
                <div className='courses'>



                    {books.map((book) => (
                        <div className="course">
                            <Card  {...book.data()} ></Card>

                        </div>
                    ))}

                </div>
                






            </div>
            <TxtColorChange/>
            <WhyUs/>
            <Join></Join>
            <Footer/>


        </div>
    );
};

export default Home;
