// Adding all relevant imports 
import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import axios from 'axios';

function Quote() {
    // Holds quote and error message data 
    const [quote, setQuote] = useState(null);
    const [error, setError] = useState(null); 

    useEffect(() => {
         // Make a GET request to the backend API to fetch a quote
        axios.get('http://localhost:4000/api/quote')
        .then((response) => {
            if (response.data && response.data.length > 0) {
                const quoteData = response.data[0];
                // Set content and author from api response
                setQuote({
                    content: quoteData.q,
                    author: quoteData.a,
                });
            } else {
                setError('No quote data found.');
            }
        })
        // Log to console and set error state 
        .catch((err) => {
            console.error('Error fetching quote:', err);
            setError('Could not load quote. Please try again later.');
        });
    // Empty array to make sure only run once
    }, []);

    return (
        <div>
            {/* If error occurs print error message */}
            {error ? (
                <Alert variant="danger">{error}</Alert>
                /* If quote available print quote */
            ) : quote ? (  
                <Alert variant="info">
                    <blockquote>
                        <p>{quote.content}</p>
                        <footer>— {quote.author}</footer>
                    </blockquote>
                </Alert>
            ) : (
                // If quote still loading
                <Alert variant="info">Loading quote...</Alert>
            )}
        </div>
    );
}
// Export quote component
export default Quote;
