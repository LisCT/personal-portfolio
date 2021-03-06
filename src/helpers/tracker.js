import React from 'react';
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize('UA-121781743-1');

const tracker = (WrappedComponent) => {

  const trackPage = (page) => {

    GoogleAnalytics.set({ page });
    GoogleAnalytics.pageview(page);

  };

  const HOC = (props) => {

    const page = props.location.pathname;
    trackPage(page);

    return (

      <WrappedComponent {...props} />
      
    );

  };

  return HOC;

};

export default tracker;