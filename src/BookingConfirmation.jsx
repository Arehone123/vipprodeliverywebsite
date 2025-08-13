import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

// Stripe Public Key (Replace with your actual public key)
const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXXXXXXXXXX");

const BookingConfirmation = ({ tour }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [adults, setAdults] = useState(1);
    const [kids, setKids] = useState(0);
    const stripe = useStripe();
    const elements = useElements();

    // Calculate Total Price
    const adultPrice = tour.price;
    const kidDiscount = 0.5; // 50% discount for kids
    const totalPrice = (adults * adultPrice) + (kids * (adultPrice * kidDiscount));

    // Handle Payment
    const handlePayment = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if (error) {
            alert(error.message);
        } else {
            alert("Payment Successful!");
        }
    };

    return (
        <div className="booking-container">
            <h2>Confirm Your Booking</h2>

            {/* Tour Details */}
            <div className="tour-details">
                <img src={tour.image} alt={tour.name} className="tour-image" />
                <h3>{tour.name}</h3>
                <p>Price per Adult: R{tour.price}</p>
            </div>

            {/* Booking Form */}
            <form className="booking-form" onSubmit={handlePayment}>
                <label>Select Date:</label>
                <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} minDate={new Date()} required />

                <label>Number of Adults:</label>
                <select value={adults} onChange={(e) => setAdults(parseInt(e.target.value))}>
                    {[...Array(10).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>{num + 1}</option>
                    ))}
                </select>

                <label>Number of Kids (Under 12):</label>
                <select value={kids} onChange={(e) => setKids(parseInt(e.target.value))}>
                    {[...Array(6).keys()].map((num) => (
                        <option key={num} value={num}>{num}</option>
                    ))}
                </select>

                <h3>Total Price: R{totalPrice.toFixed(2)}</h3>

                {/* Cancellation & Rescheduling Policies */}
                <div className="policies">
                    <h4>Policies</h4>
                    <p><strong>Rescheduling:</strong> Free reschedule if requested 48 hours before the tour.</p>
                    <p><strong>Cancellation:</strong> 100% refund if canceled 72 hours before, 50% refund if canceled within 48 hours.</p>
                </div>

                {/* Stripe Payment Section */}
                <Elements stripe={stripePromise}>
                    <CardElement className="card-element" />
                </Elements>

                <button type="submit" disabled={!stripe}>Confirm & Pay</button>
            </form>
        </div>
    );
};

export default BookingConfirmation;
