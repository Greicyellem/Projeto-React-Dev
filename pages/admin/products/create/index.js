import "tailwindcss/tailwind.css";
import Appbar from "@/app/components/Appbar";
import Drawer from "@/app/components/Drawer";
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { createProduct } from "@/app/utils/api";
import Bottom from "@/app/components/Bottom";

const CreateProduct = () => {
  const router = useRouter();
  const { register, handleSubmit, setValue } = useForm();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const onSubmit = async (data) => {
    const success = await createProduct(data);

    if (success) {
      alert("Produto criado");
      router.push(`/products`);
    }
  };

  return (
    <main className="min-h-screen">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>

      <div className="flex items-center justify-center">
        <div className="bg-white p-10 pb-20 mb-25 rounded shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-dark-green">Criar Produto</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-dark-green"
              >
                Título
              </label>
              <input
                {...register("title")}
                className="w-full border rounded py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-dark-green"
              >
                Preço
              </label>
              <input
                {...register("price")}
                className="w-full border rounded py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-dark-green"
              >
                Descrição
              </label>
              <textarea rows='3'
                {...register("description")}
                className="w-full border rounded py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-dark-green"
              >
                Categoria
              </label>
              <input
                {...register("category")}
                className="w-full border rounded py-2 px-3"
              />
            </div>

            <div className='mb-4'>
                            <label htmlFor='image' className='block text-sm font-medium text-dark-green'>Link da imagem</label>
                            <input {...register('image')} className='w-full border rounded py-2 px-3'></input>
                        </div>
           
            <button
              type="submit"
              className="bg-dark-red text-white font-semibold py-2 px-4 rounded hover:bg-dark-green"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
      <Bottom></Bottom>
    </main>
  );
};

export default CreateProduct;
