import React, {Component} from 'react';
import Wrapper from "../Wrapper";
import {Link} from "react-router-dom";
import axios from "axios";
import {Product} from '../../classes/product';
import Paginator from '../components/Paginator';

class Products extends Component {
    page = 1;
    last_page = 0;
    state = {
        products: []
    }
    componentDidMount = async () => {
        const response = await axios.get(`products?page=${this.page}`);

        this.setState({
            products: response.data.data
        })

        this.last_page = response.data.meta.last_page;
    }

    delete = async (id: number) => {
        if (window.confirm('削除しますか？')) {
            await axios.delete(`products/${id}`);

            this.setState({
                products: this.state.products.filter((p: Product) => p.id !== id)
            })
        }
    }

    handlePageChange = async (page: number) => {
        this.page = page;
        await this.componentDidMount();
    }

    render() {
        return (
            <Wrapper>
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <div className="btn-toolbar mb-2 mb-nd-0">
                        <Link to={'/products/create'} className="btn btn-sm btn-outline-secondary">Add</Link>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.products.map((product: Product) => {
                            return (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td><img src={product.image} alt="" width={50}/></td>
                                    <td>{product.title}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <div className="btn-group mr-2">
                                            <Link to={`/products/${product.id}/edit`}
                                                  className="btn btn-sm btn-outline-secondary mr-1">Edit</Link>
                                            <a href="#" className="btn btn-sm btn-outline-secondary"
                                               onClick={() => this.delete(product.id)}>Delete</a>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <Paginator lastPage={this.last_page} handleChange={this.handlePageChange}/>
            </Wrapper>
        );
    }
}

export default Products;
