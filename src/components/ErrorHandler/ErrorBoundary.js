import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
      // Example "componentStack":
      //   in ComponentThatThrows (created by App)
      //   in ErrorBoundary (created by App)
      //   in div (created by App)
      //   in App
      logErrorToMyService(error, info.componentStack);
    }
  
    render() {
      if (this.state.hasError) {
        console.log('error on ' +this.props.stock);
        // You can render any custom fallback UI
        return <div>Something went wrong</div>;
      }
  
      return this.props.children;
    }
  }
  export default ErrorBoundary;