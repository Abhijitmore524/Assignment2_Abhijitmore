import React from 'react';

class Exercise3code extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      error: null
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const data = await response.json();
      this.setState({
        isLoading: false,
        data: data,
        error: null
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        data: null,
        error: error.message
      });
    }
  }

  render() {
    const { isLoading, data, error } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div>
        <h1>Async Component</h1>
        <p>Data: {JSON.stringify(data)}</p>
      </div>
    );
  }
}

export default Exercise3code;