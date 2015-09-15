var MajorSearchList = React.createClass({
    render: function() {
        return (
        <div className="inner-search-box">
            <div>
                <select>
                    <option>인문대학</option>
                </select>
            </div>
            <div>
                <select>
                    <option>국어국문학과</option>
                </select>
            </div>
            <div className="row collapse">
                <div className="columns small-9">
                    <select>
                        <option>국어국문학과</option>
                    </select>
                </div>
                <div className="columns small-3">
                    <a href="#" className="button postfix x-small">검색</a>
                </div>
            </div>
       </div>
       );
    }
});

var GeneralSearchList = React.createClass({
    render: function() {
        return (
        <div className="inner-search-box">
            <div className="row collapse">
                <div className="columns small-9">
                    <select id="" name="">
                        <option value="">CHAPLE</option>
                    </select>
                </div>
                <div className="column small-3">
                    <a href="#" className="button postfix x-small">검색</a>
                </div>
            </div>
        </div>
        );
    }
});

var InputSearchList = React.createClass({
    render: function () {
        return (
            <div className="inner-search-box">
                <div>
                    <select id="" name="">
                        <option value="">과목번호</option>
                        <option value="">교수명</option>
                        <option value="">과목명</option>
                        <option value="">학점</option>
                    </select>
                </div>
                <div className="row collapse">
                    <div className="columns small-9">
                        <input type="text" />
                    </div>
                    <div className="columns small-3">
                        <a className="button postfix x-small">검색</a>
                    </div>
                </div>
             </div>
        );
    }
});

var tabTitles = {
    '전공': <MajorSearchList />,
    '교필': <GeneralSearchList />,
    '교양': <GeneralSearchList />,
    '기타': <GeneralSearchList />,
    '검색': <InputSearchList />
};

var timeTable = [ 
    ['', '', '', '', '', ''],   
    ['', '', '', '', '', ''],   
    ['', '', '', '', '', ''],   
    ['', '', '', '', '', ''],   
    ['', '', '', '', '', ''],   
    ['', '', '', '', '', ''],   
    ['', '', '', '', '', ''],   
    ['', '', '', '', '', ''],   
    ['', '', '', '', '', ''],   
    ['', '', '', '', '', ''] 
];

var SearchTabList = React.createClass({
    getInitialState: function() {
        var tabKeys = Object.keys(tabTitles);
        return {selectedSearchList: tabKeys[0]};
    },
    clickTitle: function(event, elem) {
        this.setState({'selectedSearchList':  event.target.text});
    },
    render: function() {

        var tabKeys = Object.keys(tabTitles);
        var buttonGroupClassName = 'button-group even-' + tabKeys.length;

        var tabs = tabKeys.map(title => {
            var className = title == this.state.selectedSearchList ?
                            'selected' : '';
            className += ' button small secondary';

            return (<li>
                <a className={className}
                   onClick={this.clickTitle}>
                    {title}
                </a>
            </li>);
        });

        return (
            <div>
                <ul id="table-search-tab" className={buttonGroupClassName}>
                   {tabs}
                </ul>
                <div id="search-list" ref="search_list">
                    {tabTitles[this.state.selectedSearchList]}
                </div>
            </div>
        );
    }
});

var TimeTable = React.createClass({
    render: function() {
        var tableContent = timeTable.map((timeData, index) => (
            <tr>
                <th>{index + 1} 교시</th>
                <td>{timeData[0]}</td>
                <td>{timeData[1]}</td>
                <td>{timeData[2]}</td>
                <td>{timeData[3]}</td>
                <td>{timeData[4]}</td>
                <td>{timeData[5]}</td>
            </tr>
        ))
        return (
            <table id="timetable">
                <thead>
                    <tr>
                        <th className="time"></th>
                        <th>월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th>금</th>
                        <th>토</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        );
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div id="app">
                <div className="left-bar">
                    <SearchTabList />
                </div>
                <div className="right-bar">
                    <TimeTable />
                </div>
            </div>
        );
    }
});

// Start Application

React.render(
    <App />,
    document.getElementById('content')
);

