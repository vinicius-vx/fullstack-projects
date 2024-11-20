using GerenciamentoBilblioteca.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GerenciamentoBilblioteca.Interfaces
{
    interface IBibliotecaService
    {
        void CadastrarLivro(Livro livro);
        void CadastrarCliente(Cliente cliente);
        void RealizarEmprestimo(int clienteId, string tituloLivro);
        void RealizarDevolucao(string tituloLivro);
        void ExibirRelatorioEmprestimos();
    }
}
