import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Journal = props => (
    <tr>
        <td>{props.journal.username}</td>
        <td>{props.journal.technique}</td>
        <td>{props.journal.rolling}</td>
        <td>{props.journal.date.substring(0,10)}</td>
        <td>
            <Link to={"edit/"+props.journal._id}>edit</Link> |
            <a href="#" onClick={() => {props.deleteJournal(props.journal._id)}}>delete</a>
        </td>
    </tr>
)

export default class JournalEntries extends Component {
    constructor(props)
    {
        super (props);

        this.deleteJournal = this.deleteJournal.bind(this);

        this.state = {journal: []};
    }

    componentWillMount() {
        axios.get('http://localhost:5000/journal/')
            .then(res => {
                this.setState({ journal: res.data});
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteJournal(id) {
        axios.delete('http://localhost:5000/journal/'+id)
            .then(res => console.log(res.data));

            this.setState({
                journal: this.state.journal.filter(el => el._id !== id)
            })
    }

    journalEntries() {
        return this.state.journal.map(currentJournal => {
            return <Journal 
                journal={currentJournal} deleteJournal={this.deleteJournal} key={currentJournal._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Journal Entry</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Technique</th>
                            <th>Rolling</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.journalEntries() }
                    </tbody>
                </table>
            </div>
        )
    }
}