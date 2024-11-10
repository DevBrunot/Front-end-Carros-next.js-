import Link from 'next/link';
import { Button, Stack, Typography } from '@mui/material';

export default function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Bem-vindo ao Gerenciador de Carros e Marcas
      </Typography>

      <Stack spacing={2} direction="row" justifyContent="center">
        <Link href="/carros">
          <Button variant="contained" color="primary" aria-label="Ver lista de carros">
            Lista de Carros
          </Button>
        </Link>

        <Link href="/marcas">
          <Button variant="contained" color="primary" aria-label="Ver lista de marcas">
            Lista de Marcas
          </Button>
        </Link>

        <Link href="/carros/criar">
          <Button variant="contained" color="secondary" aria-label="Criar novo carro">
            Criar Carro
          </Button>
        </Link>

        <Link href="/marcas/criar">
          <Button variant="contained" color="secondary" aria-label="Criar nova marca">
            Criar Marca
          </Button>
        </Link>
      </Stack>
    </div>
  );
}
