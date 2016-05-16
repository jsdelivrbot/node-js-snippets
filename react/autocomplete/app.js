import React from 'react';
import ReactDOM  from 'react-dom';
import AutoComplete from 'material-ui/AutoComplete';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

let states = [
  'California',
  'Tennessee',
  'Kentucky',
  'Mississippi',
  'Alabama',
  'Florida'
];

const lightMuiTheme = getMuiTheme(baseTheme);

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

const SearchState = () => (
  <div>
  <MuiThemeProvider muiTheme={lightMuiTheme}>
    <AutoComplete
        floatingLabelText="Search State"
        filter={AutoComplete.caseInsensitiveFilter}
        dataSource={states}
    />
  </MuiThemeProvider>
  <br/>
  <MuiThemeProvider muiTheme={muiTheme}>
    <AutoComplete
        floatingLabelText="Search State"
        filter={AutoComplete.caseInsensitiveFilter}
        dataSource={states}
    />
  </MuiThemeProvider>
  </div>
);

class SearchState1 extends React.Component {
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }

  handleUpdateInput = (value) => {
    const typeAheadValue = value.toLowerCase();
    let matchingReports = states.filter((state) => {
      return state.toLowerCase().indexOf(typeAheadValue) > -1;
    });

    this.setState({
      dataSource: matchingReports
    });
  };

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Search State"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
      </div>
    );
  }
}

SearchState1.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

ReactDOM.render(<SearchState/>, document.getElementById('react'));