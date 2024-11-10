"use client"

import { useState, useEffect } from 'react';
import { TextField, Button, Typography, MenuItem } from '@mui/material';
import axiosInstance from '@/utils/page';




interface Marca {
  id: number;
  modelo?: string;
  ano: Number;
  nome:String;
  
 
}

export default function CriarCarro() {
  const [modelo, setModelo] = useState<string>('');
  const [nome, setNome] = useState <string>('');
  const [marcaId, setMarcaId] = useState<string>('');
  const [ano, setAno] = useState <string>('');
  const [marcas, setMarcas] = useState<Marca[]>([]);

  useEffect(() => {
    axiosInstance.get('/marcas')
      .then(response => setMarcas(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/carros/criar', { modelo, ano, nome, marcaId: Number(marcaId) });
      alert('Carro criado com sucesso!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Typography variant="h4">Criar Carro</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Modelo"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Ano"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Marca"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        
        
        <TextField
          select
          label="Marca"
          value={nome}
          onChange={(e) => setMarcaId(e.target.value)}
          required
          fullWidth
          margin="normal"
        >
            
          {marcas.map((marca) => (
            <MenuItem key={marca.id} value={marca.id}>
              {marca.id}
              
            </MenuItem>

          ))}
        </TextField>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '50px' }}>
          Criar Carro
        </Button>
      </form>
    </div>
  );
}


