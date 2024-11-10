"use client"

import { useEffect, useState } from 'react';
import { Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import axiosInstance from '@/utils/page';




interface Marca {
  id: number;
  modelo: string;
  marcaNome: string;
  marca:string;
}

export default function ListaMarcas() {
  const [marcas, setMarcas] = useState<Marca[]>([]);

  useEffect(() => {
    axiosInstance.get('/marcas')
      .then(response => setMarcas(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = async (id: any) => {
    try {
      await axiosInstance.delete(`/marcas/${id}`);
      setMarcas((prevMarcas) => prevMarcas.filter(marca => marca.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Typography variant="h4">Lista de Marcas</Typography>
      <List>
        {marcas.map((nome) => (
          <ListItem key={nome.id}>
            <ListItemText 
            primary={nome.id} 
            secondary={`Marca: ${nome ||''} id: ${nome.id}`} 
            />
            <Button variant='contained' color='error' onClick={() => handleDelete(nome.id)}>
              Deletar
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
