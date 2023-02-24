import clsx from "clsx";
import { Component } from "react";

export class Searchbar extends Component {
    state = {
        request: ''
    }
    handleInputChange = e => {
        this.setState({ request: e.currentTarget.value })
    }
    handleOnSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.request);
    }

    render() {
        const isContent = this.state.request.trim().length > 0;
        return (
            
            <div className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleOnSubmit}>
                    <button type="submit" 
                    className={clsx("SearchForm-button", !isContent && "disabled")}
                    disabled={!isContent}>
                    <span className="SearchForm-button-label">Search</span>
                    </button>
    
                    <input type="text" 
                    name="request"
                    className="SearchForm-input" 
                    placeholder="Search images and photos" 
                    autoComplete="off"
                    autoFocus
                    onChange = {this.handleInputChange}
                    value = {this.state.request}
                    />
                </form>
            </div>
        )
    }
    
}