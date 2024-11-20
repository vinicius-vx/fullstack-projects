namespace GerenciamentoDeConcessionária.Models
{
    class Venda
    {
        public Veiculo? DadosVeiculo { get; set; }
        public Cliente? DadosCliente { get; set; }
        public decimal ValorVenda { get; set; }
        public DateTime DataVenda { get; set; } = DateTime.Now;
    }
}
