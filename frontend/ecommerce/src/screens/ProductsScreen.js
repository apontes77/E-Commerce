import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveProduct, listProducts, deleteProduct } from '../actions/productActions';

function ProductsScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [file_url, setFile_url] = useState('');
  const [brand, setBrand] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const productList = useSelector(state => state.productList);
  const products = [listProducts()];
  const { loading, error } = productList;

  const productSave = useSelector(state => state.productSave);
  const { loading: loadingSave, success: successSave, error: errorSave } = productSave;

  const productDelete = useSelector(state => state.productDelete);
  const { loading: loadingDelete, success: successDelete, error: errorDelete } = productDelete;
  const dispatch = useDispatch();


  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listProducts());
    return () => {};
  }, [successSave, successDelete]);

  const openModal = (product) => {
    setModalVisible(true);
    setId(product._id);
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
    setFile_url(product.file_url);
    setBrand(product.brand);
    setCountInStock(product.countInStock);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveProduct({
      _id: id,
      name, price, file_url, brand,
      countInStock, description
    }));
  }
  const deleteHandler = (product) => {
    dispatch(deleteProduct(product._id));
  }
  return <div className="content content-margined">

    <div className="product-header">
      <h3>Produtos</h3>
      <button className="button primary" onClick={() => openModal({})}>Inserir Produto</button>
    </div>
    {modalVisible &&
      <div className="form">
        <form onSubmit={submitHandler} >
          <ul className="form-container">
            <li>
              <h2>Inserir Produto</h2>
            </li>
            <li>
              {loadingSave && <div>Carregando...</div>}
              {errorSave && <div>{errorSave}</div>}
            </li>

            <li>
              <label htmlFor="name">
                Nome
          </label>
              <input type="text" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="price">
                Preço
          </label>
              <input type="text" name="price" value={price} id="price" onChange={(e) => setPrice(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="image">
                Imagem
          </label>
              <input type="text" name="image" value={file_url} id="image" onChange={(e) => setFile_url(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="brand">
                Marca
          </label>
              <input type="text" name="brand" value={brand} id="brand" onChange={(e) => setBrand(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="countInStock">
                Quantidade em Estoque
          </label>
              <input type="text" name="countInStock" value={countInStock} id="countInStock" onChange={(e) => setCountInStock(e.target.value)}>
              </input>
            </li>
            
            <li>
              <label htmlFor="description">
                Descrição
          </label>
              <textarea name="description" value={description} id="description" onChange={(e) => setDescription(e.target.value)}></textarea>
            </li>
            <li>
              <button type="submit" className="button primary">{id ? "Atualizar" : "Inserir"}</button>
            </li>
            <li>
              <button type="button" onClick={() => setModalVisible(false)} className="button secondary">Voltar</button>
            </li>
          </ul>
        </form>
      </div>
    }


    <div className="product-list">

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Marca</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (<tr key={product._id}>
            <td>{product._id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.brand}</td>
            <td>
              <button className="button" onClick={() => openModal(product)} >Editar</button>
              {' '}
              <button className="button" onClick={() => deleteHandler(product)} >Excluir</button>
            </td>
          </tr>))}
        </tbody>
      </table>

    </div>
  </div>
}
export default ProductsScreen;