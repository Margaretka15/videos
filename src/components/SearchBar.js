import React from "react";

class SearchBar extends React.Component{

    state = {term: ''};

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        // call callback from parent component!!
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="inputField">Video Search</label>
                        <input
                            id="inputField"
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />

                    </div>

                </form>

            </div>
        );
    }

}

export default SearchBar;