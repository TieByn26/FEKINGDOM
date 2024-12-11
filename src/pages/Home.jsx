import React from 'react';
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { HeaderHome } from "../features/home/HeaderHome";
import {Services} from "../features/home/Services";
import {Available} from "../features/home/Available";
import {About} from "../features/home/About";
import {Location} from "../features/home/Location";
import {Feedback} from "../features/home/Feedback";

export function Home() {
    return (
        <>
            <div id="page-top" data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="54">
                    <Header />
                    <HeaderHome />
                    <Services />
                    <Available/>
                    <About/>
                    <Location/>
                    <Feedback/>
                    <Footer />
            </div>
        </>
    );
}