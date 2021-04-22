// @flow

import { Component, type Element, type ElementRef, createRef } from 'react';

type Props = {
  children: Element<*>,
  innerRef: ElementRef<*>,
};

export default class NodeResolver extends Component<Props> {
  wrapper = createRef();

  componentDidMount() {
    this.props.innerRef(this.wrapper.current);
  }
  componentWillUnmount() {
    this.props.innerRef(null);
  }
  render() {
    return this.props.children;
  }
}

