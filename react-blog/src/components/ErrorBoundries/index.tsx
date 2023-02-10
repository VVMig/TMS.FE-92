import React from "react";

interface IProps {
  children: React.ReactNode;
}

interface IState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // Здесь можно рендерить запасной интерфейс
      return <h1>Что-то пошло не так.</h1>;
    }

    return this.props.children;
  }
}
