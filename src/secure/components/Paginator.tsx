import React, {Component} from 'react';

class Paginator extends Component<{lastPage: number, handleChange: any}> {
    page = 1;
    prev = async () => {
        if (this.page === 1) return;
        this.page--;

        this.props.handleChange(this.page);
    }

    next = async () => {
        if (this.page === this.props.lastPage) return;
        this.page++;
        this.props.handleChange(this.page);
    }
    render() {
        return (
            <div>
                <nav>
                    <ul className="pagination">
                        <li className="page-item">
                            <a href="#" className="page-link" onClick={this.prev}>前へ</a>
                        </li>
                        <li className="page-item">
                            <a href="#" className="page-link" onClick={this.next}>次へ</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Paginator;
