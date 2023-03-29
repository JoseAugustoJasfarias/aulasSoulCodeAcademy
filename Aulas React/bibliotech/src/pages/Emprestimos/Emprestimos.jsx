import { useEffect, useState } from 'react';
import { Badge, Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';

import { getEmprestimos } from '../../firebase/emprestimo';

import './Emprestimos .css';

export function Emprestimos() {
  const [emprestimos, setEmprestimos] = useState(null);

  useEffect(() => {
    getEmprestimos().then(busca => {
      setEmprestimos(busca);
    });
  }, []);

  return (
    <div className="emprestimos">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <h1>Emprestimos</h1>
          <Button as={Link} to="/emprestimos/adicionar" variant="success">
            Adicionar emprestimo
          </Button>
        </div>
        <hr />
        {emprestimos === null ? (
          <Loader />
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Leitor</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Livro</th>
                <th>Status</th>
                <th>Data de Empréstimo</th>
              </tr>
            </thead>
            <tbody>
              {emprestimos.map(emprestimo => {
                const dataEmprestimo = emprestimo.dataEmprestimo?.toDate()?.toLocaleDateString('pt-br');
                return (
                  <tr>
                    <td>{emprestimo.leitor}</td>
                    <td>{emprestimo.email}</td>
                    <td>{emprestimo.telefone}</td>
                    <td>{emprestimo.livro.titulo}</td>
                    <td>
                      <Badge
                        bg={
                          emprestimo.status === 'Pendente'
                            ? 'warning'
                            : 'success'
                        }
                      >
                        {emprestimo.status}
                      </Badge>
                    </td>
                    <td>{dataEmprestimo}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </Container>
    </div>
  );
}
