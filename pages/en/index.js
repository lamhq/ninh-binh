/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Index extends React.Component {
  componentDidMount() {
    window.location.href = 'docs/ngay-1.html';
  }

  render() {

    return (
      <div>
        If you are not redirected automatically, follow this <a href="docs/ngay-1.html">link</a>.
      </div>
    );
  }
}

module.exports = Index;
