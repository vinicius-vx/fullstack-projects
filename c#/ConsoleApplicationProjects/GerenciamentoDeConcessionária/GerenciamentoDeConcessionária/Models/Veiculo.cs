using GerenciamentoDeConcessionária.Enums;

namespace GerenciamentoDeConcessionária.Models
{
    abstract class Veiculo
    {
        public int Id { get; set; }
        public string? Marca { get; set; }
        public string? Modelo { get; set; }
        public int Ano { get; set; }
        public TipoDeCombustivel TipoCombustivel { get; private set; }
        public decimal Preco { get; private set; }
        public TipoDeVeiculo TipoVeiculo { get; set; }

        public Veiculo(int id, string? marca, string? modelo, int ano, TipoDeCombustivel tipoCombustivel, decimal preco, TipoDeVeiculo tipoVeiculo)
        {
            Id = id;
            Marca = marca;
            Modelo = modelo;
            Ano = ano;
            TipoCombustivel = tipoCombustivel;
            Preco = preco;
            TipoVeiculo = tipoVeiculo;
        }

        public virtual void ExibirDetalhes()
        {
            Console.WriteLine($"Id: {Id} | Marca: {Marca} | Modelo: {Modelo} | Ano: {Ano} | Tipo de Combustivel: {TipoCombustivel} | Valor: {Preco}");
        }
    }


}
