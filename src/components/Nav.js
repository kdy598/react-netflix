import React from "react";
import {useState, useEffect} from "react";
import "./Nav.css";

export default function Nav() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log('window.scrollY', window.scrollY)
            if(window.scrollY > 50){ // 스크롤 내릴때 높이가 50 이상이 되면 바탕을 검정으로 하려고 선언
                setShow(true);
            } else {
                setShow(false);
            }
        })
        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, [])

    return (
        <nav className={`nav ${show && "nav__black"}`}>
            <img
                alt='Netflix logo'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                className='nav__logo'
                onClick={() => window.location.reload()} // 로고 클릭 시 홈으로
            />
            <img 
                alt='User logged'
                src='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp'
                className='nav__avatar'
            />
        </nav>
    );
}
