"use strict";

var data = {
  msg: 'Hello World'
}

var CommentBox = React.createClass({
    render: function() {
      return (<div className="comment">
        Hello, world! I am a comment box.<br/>
        <div>
          {this.props.author}
        </div>
      </div>);
    }
  });

React.render(
 <CommentBox url="data.json"/>,
 document.getElementById('example')
);

