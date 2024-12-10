import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import axios from 'axios';

function Quote() {
    const [quote, setQuote] = useState(null); // Holds the quote data
    const [error, setError] = useState(null); // Holds error message, if any

    useEffect(() => {
        // Fetch a random quote when the component mounts
        axios.get('http://api.quotable.io/random')
            .then((response) => {
                setQuote(response.data); // Save the quote data
            })
            .catch((err) => {
                console.error('Error fetching quote:', err);
                setError('Could not load quote. Please try again later.'); // Set error message
            });
    }, []);

    return (
        <div    >
            <Alert variant="info">
           
                    <blockquote>
                        <p>{quote.content}</p>
                        <footer>— {quote.author}</footer>
                    </blockquote>
             
            </Alert>
        </div>
    );
}

export default Quote;
