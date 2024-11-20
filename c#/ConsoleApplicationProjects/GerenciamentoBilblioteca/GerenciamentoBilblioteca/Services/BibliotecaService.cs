using GerenciamentoBilblioteca.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GerenciamentoBilblioteca.Services
{
    class BibliotecaService
    {
        private List<Livro> Livros = new List<Livro>();
        private List<Cliente> Clientes = new List<Cliente>();
        private List<Emprestimo> Emprestimos = new List<Emprestimo>();

        public void CadastrarLivro(Livro livro)
        {
            Livros.Add(livro);
            Console.WriteLine("Livro cadastrado com sucesso!");
        }

        public void CadastrarCliente(Cliente cliente)
        {
            Clientes.Add(cliente);
            Console.WriteLine("Cliente cadastrado com sucesso!");
        }

        public void RealizarEmprestimo(int clienteId, string tituloLivro)
        {
            Cliente cliente = Clientes.FirstOrDefault(c => c.Id == clienteId);
            Livro livro = Livros.FirstOrDefault(l => l.Titulo == tituloLivro);

            if (cliente != null && livro != null && livro.Emprestar())
            {
                Emprestimo emprestimo = new Emprestimo(cliente, livro);
                Emprestimos.Add(emprestimo);
                Console.WriteLine("Empréstimo realizado com sucesso!");
            }
            else
            {
                Console.WriteLine("Não foi possível realizar o empréstimo.");
            }
        }

        public void RealizarDevolucao(string tituloLivro)
        {
            Livro livro = Livros.FirstOrDefault(l => l.Titulo == tituloLivro);
            if (livro != null)
            {
                livro.DevolverLivro();
                Console.WriteLine("Livro devolvido com sucesso!");
            }
            else
            {
                Console.WriteLine("Livro não encontrado.");
            }
        }

        public void ExibirRelatorioEmprestimos()
        {
            Console.WriteLine("Relatório de Empréstimos:");
            foreach (var emprestimo in Emprestimos)
            {
                Console.WriteLine($"Cliente: {emprestimo.Cliente.Nome}, Livro: {emprestimo.Livro.Titulo}, Data: {emprestimo.DataEmprestimo}");
            }
        }
    }
}
