import React, { Component } from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import Products from "../Services/Products";
import "./InsertUpdateProduct.css";

export default class InsertUpdateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seqProduct: this.props.match.params.seqProduct,
            nome: "",
            marca: "",
            descricao: "",
            preco: "",
            referencia: ""
        };

        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeMarcaHandler = this.changeMarcaHandler.bind(this);
        this.changeDescricaoHandler = this.changeDescricaoHandler.bind(this);
        this.changePrecoHandler = this.changePrecoHandler.bind(this);
        this.changeReferenciaHandler = this.changeReferenciaHandler.bind(this);

        this.save = this.save.bind(this);
    }

    componentDidMount() {
        if(this.state.seqProduct === "add") {
            return false;
        } else {
            return Products.getProduct(this.state.seqProduct).then(
                (response) => {
                    let product = response.data;
                    this.setState({
                        nome: product.nome,
                        marca: product.marca,
                        descricao: product.descricao,
                        preco: product.preco,
                        referencia: product.referencia
                    });
                }
            );
        }
    }

    changeNomeHandler(event) {
        this.setState({nome: event.target.value})
    }

    changeMarcaHandler(event) {
        this.setState({marca: event.target.value})
    }

    changeDescricaoHandler(event) {
        this.setState({descricao: event.target.value})
    }

    changePrecoHandler(event) {
        this.setState({preco: event.target.value})
    }

    changeReferenciaHandler(event) {
        this.setState({referencia: event.target.value})
    }

    save() {
        let product = {
            nome: this.state.nome,
            marca: this.state.marca,
            descricao: this.state.descricao,
            preco: this.state.preco,
            referencia: this.state.referencia
        };

        if(this.state.seqProduct === "add") {
            Products.insertProduct(product).then(
                (res) => {
                    alert(res.data);
                }
            );
        } else {
            product.seqProduct = this.state.seqProduct;
            Products.updateProduct(product).then(
                (res) => {
                    console.log(res.data);
                }
            );
        }

        this.props.history.push("/products");
    }

    cancel() {
        this.props.history.push("/products");
    }

    render() {
        return (
            <Container>
                <Row>
                    <h1>Cadastro de Produtos</h1>
                </Row>
                <Form>
                    <Form.Group controlId="frmNome">
                        <Form.Text className="text-muted">Nome do produto</Form.Text>
                        <Form.Control type="text" placeholder="Nome" value={this.state.nome} onChange={this.changeNomeHandler}/>
                    </Form.Group>
                    <Form.Group controlId="frmMarca">
                        <Form.Text className="text-muted">Marca do produto</Form.Text>
                        <Form.Control type="text" placeholder="Marca" value={this.state.marca} onChange={this.changeMarcaHandler}/>
                    </Form.Group>
                    <Form.Group controlId="frmDescricao">
                        <Form.Text className="text-muted">Descrição do produto</Form.Text>
                        <Form.Control type="text" placeholder="Descrição" value={this.state.descricao} onChange={this.changeDescricaoHandler}/>
                    </Form.Group>
                    <Form.Group controlId="frmPreco">
                        <Form.Text className="text-muted">Preço do produto</Form.Text>
                        <Form.Control type="text" placeholder="Preço" value={this.state.preco} onChange={this.changePrecoHandler}/>
                    </Form.Group>
                    <Form.Group controlId="frmReferencia">
                        <Form.Text className="text-muted">Referência do produto</Form.Text>
                        <Form.Control type="text" placeholder="Referência" value={this.state.referencia} onChange={this.changeReferenciaHandler}/>
                    </Form.Group>
                    <Row>
                        <Button variant="success" className="btnSubmit" onClick={this.save}>Salvar</Button>
                        <Button variant="warning" className="btnReset"  onClick={this.cancel.bind(this)}>Cancelar</Button>
                    </Row>
                </Form>
            </Container>
        )
    }
}
