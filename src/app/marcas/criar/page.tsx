"use client"
import { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import axiosInstance from '@/utils/page';




export default function CriarMarca() {
  const [marca, setmarca] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/marcas/criar', { marca });
      alert('Marca criada com sucesso!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Typography variant="h4">Criar Marca</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Nome da Marca" value={marca} onChange={(e) => setmarca(e.target.value)} required />
        <Button type="submit" variant="contained" color="primary">Criar Marca</Button>
      </form>
    </div>
  );
}
