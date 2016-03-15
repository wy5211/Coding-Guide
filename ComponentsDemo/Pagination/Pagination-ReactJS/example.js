import React, { Component, PropTypes } from 'react';
import Pages from './PaginationReactJS';
import { render } from 'react-dom';

class PageDemo extends Component {
  constructor(props) {
    super(props);
  }

  onPageChange(pageNumber) {
    console.log(pageNumber);
  }

  render() {
    return (
      <div className="pagination_demo">
        <Pages pageNum={"100"} currentPage={"25"} onPageChange={this.onPageChange.bind(this)} />
      </div>
    )
  }
}

render(
  <PageDemo />,
  document.getElementById('pagination_demo')
);