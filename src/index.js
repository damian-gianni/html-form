import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReviewLayout from './Components/ReviewLayout'
import './Styles/styles.scss';

// Steps
const steps = [
  {
    image: {
      url: '',
      alt: ''
    }, title: {
      id: 'title-step',
      text: 'Que te pareció tu ...'
    }, components: [{
      id: 'starts',
      type: 'stars'
    }]
  },
  {
    title: {
      id: 'title-step',
      text: 'Cómo te quedó...'
    }, components: [{
      id: 'size',
      type: 'list',
      values: ['Pequeño', 'Algo Pequeño', 'Como esperaba', 'Algo grande', 'Grande']
    }]
  },
  {
    title: {
      id: 'title-step',
      text: 'Contale a otras personas...'
    }, components: [
      {
        id: 'comment',
        type: 'textBox'
      },
      {
        id: 'image',
        type: 'attach'
      }
    ]
  }
];

ReactDOM.render(
  <React.StrictMode>
    <form id='form-review' className='form-steps' action='/review'>
      <ReviewLayout steps={steps}></ReviewLayout>
    </form>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
