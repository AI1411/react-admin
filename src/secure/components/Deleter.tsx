import React, {Component} from 'react';
import axios from "axios";

class Deleter extends Component<{id: number, endpoint: string, handleDelete: any}> {
    delete = async () => {
        if (window.confirm('削除しますか？')) {
            await axios.delete(`${this.props.endpoint}/${this.props.id}`);

            this.props.handleDelete(this.props.id);
        }
    }
    render() {
        return (
            <div>
                <a href="#" className="btn btn-sm btn-outline-secondary" onClick={() =>this.delete()}>Delete</a>
            </div>
        );
    }
}

export default Deleter;
