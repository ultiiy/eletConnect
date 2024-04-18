import "./home.css";
import Header from "../../_assets/components/Header";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap";

export default function Home() {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000')
            .then(response => setCurrentTime(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <>
            <Header />
            <section id='section'>
                <div className="box">
                <p>{currentTime}</p>
                </div>
            </section>
        </>
    );
}
