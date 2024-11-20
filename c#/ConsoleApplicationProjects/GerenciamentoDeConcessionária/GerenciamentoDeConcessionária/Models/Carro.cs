using GerenciamentoDeConcessionária.Enums;

namespace GerenciamentoDeConcessionária.Models
{
    class Carro : Veiculo
    {
        public Carro(int id, string? marca, string? modelo, int ano, TipoDeCombustivel tipoCombustivel, decimal preco, TipoDeVeiculo tipoVeiculo) : base(id, marca, modelo, ano, tipoCombustivel, preco, tipoVeiculo)
        {
        }

        public override void ExibirDetalhes()
        {
            Console.WriteLine("Detalhes do Carro: ");
            Console.WriteLine("-----------------------");
            base.ExibirDetalhes();
            Console.WriteLine("-----------------------");
        }
    }
}
