using GerenciamentoDeConcessionária.Enums;

namespace GerenciamentoDeConcessionária.Models
{
    class Moto : Veiculo
    {
        public Moto(int id, string? marca, string? modelo, int ano, TipoDeCombustivel tipoCombustivel, decimal preco, TipoDeVeiculo tipoVeiculo) : base(id, marca, modelo, ano, tipoCombustivel, preco, tipoVeiculo)
        {
        }
        public override void ExibirDetalhes()
        {
            Console.WriteLine("Detalhes da Moto");
            Console.WriteLine("-----------------------");
            base.ExibirDetalhes();
            Console.WriteLine("-----------------------");
        }
    }
}
