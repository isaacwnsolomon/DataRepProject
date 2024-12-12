import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import axios from 'axios';

function Quote() {
    const [quote, setQuote] = useState(null); // Holds the quote data
    const [error, setError] = useState(null); // Holds error message, if any

    useEffect(() => {
        axios.get('http://localhost:4000/api/quote')
        .then((response) => {
            if (response.data && response.data.length > 0) {
                const quoteData = response.data[0];
                setQuote({
                    content: quoteData.q,
                    author: quoteData.a,
                });
            } else {
                setError('No quote data found.');
            }
        })
        .catch((err) => {
            console.error('Error fetching quote:', err);
            setError('Could not load quote. Please try again later.');
        });
    
    }, []);

    return (
        <div>
            {error ? (
                <Alert variant="danger">{error}</Alert>
            ) : quote ? (
                <Alert variant="info">
                    <blockquote>
                        <p>{quote.content}</p>
                        <footer>— {quote.author}</footer>
                    </blockquote>
                </Alert>
            ) : (
                <Alert variant="info">Loading quote...</Alert>
            )}
        </div>
    );
}

export default Quote;
