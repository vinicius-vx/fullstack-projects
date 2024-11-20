using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GerenciamentoBilblioteca.Models
{
    class Livro
    {
        public int Id { get; set; }
        public string? Titulo { get; set; }
        public string? Autor { get; set; }
        public DateTime DataPublicacao { get; set; }

        private int QuantidadeEstoque;

        public Livro(int id, string? titulo, string? autor, int quantidadeEstoque)
        {
            Id = id;
            Titulo = titulo;
            Autor = autor;
            DataPublicacao = DateTime.Now;
            QuantidadeEstoque = quantidadeEstoque;
        }

        public bool Emprestar()
        {
            if (QuantidadeEstoque > 0)
            {
                QuantidadeEstoque--;
                return true;
            }
            return false;
        }

        public void DevolverLivro()
        {
            QuantidadeEstoque++;
        }

        public int ObterQuantidadeEmEstoque()
        {
            return QuantidadeEstoque;
        }

    }
}
