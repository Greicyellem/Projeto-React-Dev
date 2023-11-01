const fetchProducts = async () => {
    const response = await fetch('http://localhost:3000/products');
    const products = await response.json();
    return products;
}

const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${productId}`, {
        method: 'DELETE',
      });
  
      if (response.status === 204) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
};
  
const searchProducts = async (searchTerm) => {
try {
    if (searchTerm) {
    const response = await fetch(`http://localhost:3000/products/search/${searchTerm}`);
    if (response.ok) {
        const data = await response.json();
        return data;
    }
    }
    return [];
    } catch (error) {
        console.error('Erro ao buscar produtos', error);
        return [];
    }
};

const createProduct = async (data) => {
  try {
    const response = await fetch(`http://localhost:3000/products`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(data)

    })

    return response.ok;
    
  } catch (error) {
    console.error("Erro ao criar o produto:" , error)
    return false;
  }
}

const fetchProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`);
      if (response.ok) {
        const product = await response.json();
        return product;
      }
    } catch (error) {
      console.error('Erro ao buscar o produto', error);
    }
    return null;
  };
  
const updateProduct = async (id, data) => {
try {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    });
    return response.ok;
} catch (error) {
    console.error('Erro ao atualizar o produto', error);
    return false;
}
};
  
  export { fetchProducts, deleteProduct, searchProducts, fetchProduct, updateProduct, createProduct };  