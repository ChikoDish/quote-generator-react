import React from 'react';
import quotes from '../../db/quotes';

//main component
export default function QuoteAndcharacter(props) {
  const { quote, generateRandomQuote } = props;
  return (
    <div id='quote-box'>
      <div id='text-div'>
        <i className='fas fa-quote-left open quote'></i>
        <div id='text'>
          <p>
            {quote.quote}
          </p>
        </div>
        <p id='author'>-{quote.author}</p>
      </div>
      <button
        id='new-quote'
        onClick={() => {
          generateRandomQuote(quotes);
        }}
      >
        <i className='fas fa-forward'></i>
      </button>
      <a href='a' id='tweet-quote' target='blank'>
        <button
          id='twitter'
          onClick={() => {
            window.open(
              'https://twitter.com/intent/tweet/?text=' +
                encodeURIComponent(quote.quote + ' -- ' + quote.author)
            );
          }}
        >
          <i className='fab fa-twitter'></i>
        </button>
      </a>
    </div>
  );
}
