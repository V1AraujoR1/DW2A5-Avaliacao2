import React, { Component } from "react";
import "./List.css";
import { Button, Container, Row, Table } from "react-bootstrap";
import Products from "../../Services/Products";

export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            arrayProducts: []
        };

        this.voltar = this.voltar.bind(this);
        this.insertProduct = this.insertProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentDidMount() {
        this.getProducts();
    }

    voltar() {
        this.props.history.push("/");
    }

    getProducts() {
        Products.getProducts().then(
            (response) => this.setState({ arrayProducts: response.data })
        );
    }

    insertProduct() {
        this.props.history.push("/product/add");
    }

    updateProduct(seqProduct) {
        this.props.history.push("/product/" + seqProduct);
    }

    deleteProduct(seqProduct) {
        Products.deleteProduct(seqProduct).then(
            response => {
                alert(response.data);
                this.getProducts();
            }
        );
    }

    render() {
        return (
            <Container fluid className="px-5">
                <Row className="py-3">
                    <Button className="mr-2 mb-2" variant="link" onClick={this.voltar}>Voltar</Button>
                    <h1 >Produtos</h1>
                </Row>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th className="col-1">#</th>
                                <th className="col-3">Nome</th>
                                <th className="col-2">Marca</th>
                                <th className="col-3">Descrição</th>
                                <th className="col-1">Preço</th>
                                <th className="col-2">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.arrayProducts.map(
                                    product =>
                                        <tr key={product.seqProduto}>
                                            <td>{product.seqProduto}</td>
                                            <td>{product.nome}</td>
                                            <td>{product.marca}</td>
                                            <td>{product.descricao}</td>
                                            <td>{product.preco}</td>
                                            <td>
                                                <Button variant="warning" onClick={() => this.updateProduct(product.seqProduto)}>Editar</Button>
                                                <Button variant="danger"  onClick={() => this.deleteProduct(product.seqProduto)}>Deletar</Button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Row>
                <Row className="float-right">
                    <Button variant="primary" onClick={() => this.insertProduct()}>Novo Produto</Button>
                </Row>
            </Container>
        )
    }
}
