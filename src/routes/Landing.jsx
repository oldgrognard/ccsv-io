import { Divider } from '@mui/material';
import { Comparison } from '../components/Comparison.jsx';
import { Hero } from '../components/Hero.jsx';
import { Mechanism } from '../components/Mechanism.jsx';
import { Parsing } from '../components/Parsing';
import { Spec } from '../components/Spec.jsx';

const Landing = () => {
    return (
        <>
            {/* --- HERO --- */}
            <Hero />
            <Divider />
            {/* --- HOW IT WORKS --- */}
            <Mechanism />
            <Divider />
            <Parsing />
            <Divider />
            {/* COMPARISON */}
            <Comparison />
            <Divider />
            {/* CTA / SPEC */}
            <Spec />
        </>
    );
};

export { Landing };
