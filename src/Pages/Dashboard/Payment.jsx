import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutFrom from './CheckOutFrom';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);


const Payment = () => {
    return (
        <div>
            <SectionTitle hading={'Payment'} subheading={"Please pay to eat"}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutFrom></CheckOutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;