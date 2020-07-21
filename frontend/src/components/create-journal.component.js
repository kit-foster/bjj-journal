import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateJournal extends Component {
    constructor(props) {
        super(props);

        // Bind methods to the this
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeTechnique = this.onChangeTechnique.bind(this);
        this.onChangeRolling = this.onChangeRolling.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Set initial state properties
        this.state = {
            username: '',
            technique: '',
            rolling: '',
            date: new Date(),
            users: []
        }
    }

    // Method for username drop down (currently a stub)
    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user',
        });
    }

    // Methods to update the state
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeTechnique(e) {
        this.setState({
            technique: e.target.value
        });
    }

    onChangeRolling(e) {
        this.setState({
            rolling: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const journal = {
            username: this.state.username,
            technique: this.state.technique,
            duration: this.state.duration,
            date: this.state.date
        };

        console.log(journal);

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Create New Journal Entry</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                                {
                                    this.state.users.map(function(user) {
                                        return <option
                                            key={user}
                                            value={user}>{user}
                                            </option>;
                                    })
                                }
                            </select>
                    </div>

                    <div className="form-group">
                        <label>Technique: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.technique}
                            onChange={this.onChangeTechnique}
                            />
                    </div>

                    <div className="form-group">
                        <label>Rolling: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.rolling}
                            onChange={this.onChangeRolling}
                            />
                    </div>

                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                                />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit"
                            className="btn btn-primary"
                            value="Create Exercise Log"
                            />
                    </div>
                </form>
            </div>
        )
    }
}