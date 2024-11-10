"use client"

import { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText, Button } from '@mui/material';

import React from 'react';
import axiosInstance from '@/utils/page';


export default function ListaCarros() {
  const [carros, setCarros] = useState<any[]>([]);

  useEffect(() => {
    axiosInstance.get('/carros')
      .then(response => setCarros(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = async (id: any) => {
    try {
      await axiosInstance.delete(`/carros/${id}`);
      setCarros((prevCarros) => prevCarros.filter(carro => carro.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Typography variant="h4">Lista de Carros</Typography>
      <List>
        {carros.map((carro) => (
          <ListItem key={carro.id}>
            <ListItemText primary={carro.nome} secondary={`Marca: ${carro.marca?.nome}`} />
            <Button variant="contained" color="error" onClick={() => handleDelete(carro.id)}>
              Deletar
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
