using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GerenciamentoBilblioteca.Models
{
    abstract class Pessoa
    {
        public int Id { get; set; }
        public string? Nome { get; set; }

        public Pessoa(string nome, int id)
        {
            Nome = nome;
            Id = id;
        }

        public abstract void ExibirDetalhes();
    }
}
