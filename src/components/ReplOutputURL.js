import React from 'react';
import shell from 'shell';
import ReplCommon from '../common/ReplCommon';

export default class ReplOutputURL extends React.Component {
  constructor(props) {
    super(props);
    this.openExternalFile = this.openExternalFile.bind(this);
  }
  openExternalFile() {
    shell.openExternal(this.props.url);
  }
  render() {
    return (
      <span className='repl-output-url'>
      {
        <span className='repl-url' title={this.props.url}>
          {this.props.url}
          <i className="fa fa-external-link" onClick={this.openExternalFile}></i>
        </span>
      }
    </span>
    );
  }
}
