using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GerenciamentoBilblioteca.Models
{
    class Emprestimo
    {
        public Cliente? Cliente { get; private set; }
        public Livro? Livro { get; private set; }
        public DateTime? DataEmprestimo { get; private set; }

        public Emprestimo(Cliente cliente, Livro livro)
        {
            Cliente = cliente;
            Livro = livro;
            DataEmprestimo = DateTime.Now;
        }
    }
}
