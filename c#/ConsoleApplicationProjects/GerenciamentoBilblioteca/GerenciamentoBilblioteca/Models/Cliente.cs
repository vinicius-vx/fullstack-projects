using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GerenciamentoBilblioteca.Models
{
    class Cliente : Pessoa
    {
        public Cliente(string nome, int id) : base(nome, id) { }

        public override void ExibirDetalhes()
        {
            Console.WriteLine($"Cliente: {Nome} (ID: {Id})");
        }
    }
}
