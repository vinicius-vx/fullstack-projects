using GerenciamentoDeConcessionária.Enums;
using GerenciamentoDeConcessionária.Models;


namespace GerenciamentoDeConcessionária.Services
{
    class ConcessionariaService
    {
        private List<Carro> Carros = new List<Carro>();
        private List<Moto> Motos = new List<Moto>();
        private List<Caminhao> Caminhoes = new List<Caminhao>();
        private List<Veiculo> Veiculos = new List<Veiculo>();
        private List<Venda> Vendas = new List<Venda>();
        string msgNenhumVeiculo = "Não há nenhum veiculo para ser exibido";
        Random random = new Random();

        public class VeiculoDto
        {
            public string? Marca { get; set; }
            public string? Modelo { get; set; }
            public int Ano { get; set; }
            public TipoDeCombustivel TipoDeCombustivel { get; set; }
            public decimal Preco { get; set; }
        }

        public void Menu()
        {
            bool sair = false;

            Console.WriteLine("Bem vindo a loja Vini Veiculos | O Que deseja hoje?");
            Console.WriteLine("1 - Cadastrar novo Veículo");
            Console.WriteLine("2 - Exibir todos os veiculos");
            Console.WriteLine("3 - Filtrar Veículos");
            Console.WriteLine("4 - Registrar venda");
            Console.WriteLine("5 - Exibir Relatório de vendas");
            Console.WriteLine("6 - Sair");
            Console.WriteLine("---------------------------------------------------");

            while (!sair)
            {
                switch (Console.ReadLine())
                {
                    case "1":
                        CadastrarVeiculo();
                        break;
                    case "2":
                        ExibirTodosVeiculos();
                        Menu();
                        break;
                    case "3":
                        MenuFiltrarVeiculos();
                        break;
                    case "4":
                        MenuVenderVeiculo();
                        Menu();
                        break;
                    case "5":
                        RelatorioDeVendas();
                        Menu();
                        break;
                    case "6":
                        sair = true;
                        Console.WriteLine("Saindo ...");
                        break;
                    default:
                        Console.WriteLine("Opção iválida. Tente Novamente...");
                        break;

                }
            }

        }

        public void CadastrarVeiculo()
        {
            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine("Selecione qual tipo de veiculo deseja cadastrar: ");
            Console.WriteLine("1 - Carro");
            Console.WriteLine("2 - Moto");
            Console.WriteLine("3 - Caminhão");
            Console.WriteLine("4 - Voltar ao menu Principal");
            Console.WriteLine("---------------------------------------------------");

            switch (Console.ReadLine())
            {
                case "1":
                    var veiculoDto = MenuCadastrarVeiculo();
                    Carro carro = new(random.Next(0, 101), veiculoDto.Marca, veiculoDto.Modelo, veiculoDto.Ano, veiculoDto.TipoDeCombustivel, veiculoDto.Preco, TipoDeVeiculo.Carro);
                    if (carro != null)
                    {
                        Console.WriteLine("---------------------------------------------------");
                        Console.WriteLine("Carro cadatrado com sucesso");
                        carro.ExibirDetalhes();
                        Veiculos.Add(carro);
                        Menu();
                    }
                    break;
                case "2":
                    var motoDto = MenuCadastrarVeiculo();
                    Moto moto = new(random.Next(0, 101), motoDto.Marca, motoDto.Modelo, motoDto.Ano, motoDto.TipoDeCombustivel, motoDto.Preco, TipoDeVeiculo.Moto);
                    if (moto != null)
                    {
                        Console.WriteLine("---------------------------------------------------");
                        Console.WriteLine("Moto cadatrada com sucesso");
                        moto.ExibirDetalhes();
                        Veiculos.Add(moto);
                        Menu();
                    }
                    break;
                case "3":
                    var caminhaoDto = MenuCadastrarVeiculo();
                    Caminhao caminhao = new(random.Next(0, 101), caminhaoDto.Marca, caminhaoDto.Modelo, caminhaoDto.Ano, caminhaoDto.TipoDeCombustivel, caminhaoDto.Preco, TipoDeVeiculo.Caminhão);
                    if (caminhao != null)
                    {
                        Console.WriteLine("---------------------------------------------------");
                        Console.WriteLine("Caminhao cadatrada com sucesso");
                        caminhao.ExibirDetalhes();
                        Veiculos.Add(caminhao);
                        Menu();
                    }
                    break;
                case "4":
                    Menu();
                    break;
                default:
                    Console.WriteLine("Opção inválida. Tente Novamente");
                    break;
            }
        }

        public void ExibirTodosVeiculos()
        {
            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine("Todos os Veiculos: ");

            Console.WriteLine("Carros: ");

            if (Carros.Count() > 0)
            {
                foreach (var carro in Carros)
                {
                    Console.WriteLine($"Id: {carro.Id} | Marca: {carro.Marca} | Modelo: {carro.Modelo} | Ano: {carro.Ano} | Tipo de Combustivel: {carro.TipoCombustivel} | Valor: {carro.Preco}");
                }
            }
            else
            {
                Console.WriteLine(msgNenhumVeiculo);
            }


            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine("Motos: ");

            if (Motos.Count() > 0)
            {
                foreach (var moto in Motos)
                {
                    Console.WriteLine($"Id: {moto.Id} | Marca: {moto.Marca} | Modelo: {moto.Modelo} | Ano: {moto.Ano} | Tipo de Combustivel: {moto.TipoCombustivel} | Valor: {moto.Preco}");
                }
            }
            else
            {
                Console.WriteLine(msgNenhumVeiculo);
            }

            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine("Caminhoes: ");

            if (Caminhoes.Count() > 0)
            {
                foreach (var caminhao in Caminhoes)
                {
                    Console.WriteLine($"Id: {caminhao.Id} |Marca: {caminhao.Marca} | Modelo: {caminhao.Modelo} | Ano: {caminhao.Ano} | Tipo de Combustivel: {caminhao.TipoCombustivel} | Valor: {caminhao.Preco}");
                }
            }
            else
            {
                Console.WriteLine(msgNenhumVeiculo);
            }

            Console.WriteLine("---------------------------------------------------");
        }

        public VeiculoDto MenuCadastrarVeiculo()
        {
            string marca;
            string modelo;
            int ano;
            TipoDeCombustivel tipoDeCombustivel;
            decimal preco;

            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine("Digite qual a marca do Veículo: ");
            marca = Console.ReadLine();

            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine("Digite qual o modelo do Veículo: ");
            modelo = Console.ReadLine();


            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine("Digite qual o ano do Veículo: ");
            ano = int.Parse(Console.ReadLine());

            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine("Selecione o tipo de combustivel do Veículo: ");
            Console.WriteLine("1 - Alcool ");
            Console.WriteLine("2 - Gasolina ");
            Console.WriteLine("3 - Diesel");
            Console.WriteLine("4 - Elétrico");

            switch (Console.ReadLine())
            {
                case "1":
                    tipoDeCombustivel = TipoDeCombustivel.Alcool;
                    break;
                case "2":
                    tipoDeCombustivel = TipoDeCombustivel.Gasolina;
                    break;
                case "3":
                    tipoDeCombustivel = TipoDeCombustivel.Diesel;
                    break;
                case "4":
                    tipoDeCombustivel = TipoDeCombustivel.Elétrico;
                    break;
                default:
                    throw new ArgumentException("Opção inválida para o tipo de combustível.");
            }

            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine("Qual o valor do Veículo: ");
            preco = int.Parse(Console.ReadLine());

            return new VeiculoDto
            {
                Marca = marca,
                Modelo = modelo,
                Ano = ano,
                TipoDeCombustivel = tipoDeCombustivel,
                Preco = preco
            };
        }

        public void MenuFiltrarVeiculos()
        {
            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine("Selecione qual tipo de filtro você deseja: ");
            Console.WriteLine("1 - Tipo de Combustível");
            Console.WriteLine("2 - Intervalo de Preços");
            Console.WriteLine("3 - Voltar ao menu Principal");
            Console.WriteLine("---------------------------------------------------");

            switch (Console.ReadLine())
            {
                case "1":
                    Console.WriteLine("Selecione o tipo de combustivel do Veículo: ");
                    Console.WriteLine("1 - Alcool");
                    Console.WriteLine("2 - Gasolina");
                    Console.WriteLine("3 - Diesel");
                    Console.WriteLine("4 - Elétrico");

                    switch (Console.ReadLine())
                    {
                        case "1":
                            FiltrarVeiculoByTipoDeCombustivel(TipoDeCombustivel.Alcool);
                            break;
                        case "2":
                            FiltrarVeiculoByTipoDeCombustivel(TipoDeCombustivel.Gasolina);
                            break;
                        case "3":
                            FiltrarVeiculoByTipoDeCombustivel(TipoDeCombustivel.Diesel);
                            break;
                        case "4":
                            FiltrarVeiculoByTipoDeCombustivel(TipoDeCombustivel.Elétrico);
                            break;
                        default:
                            throw new ArgumentException("Opção inválida.");
                    }
                    break;
                case "2":
                    break;
                case "3":
                    Menu();
                    break;
            }
        }

        public void FiltrarVeiculoByTipoDeCombustivel(TipoDeCombustivel tipoDeCombustivel)
        {
            var carrosFiltrados = Carros.Where(c => c.TipoCombustivel == tipoDeCombustivel);
            var motosFiltradas = Motos.Where(c => c.TipoCombustivel == tipoDeCombustivel);
            var caminhoesFiltrados = Caminhoes.Where(c => c.TipoCombustivel == tipoDeCombustivel);

            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine($"Veiculos Filtrados pelo Tipo de Combustivel - {tipoDeCombustivel}: ");
            Console.WriteLine("Carros: ");

            if (carrosFiltrados.Count() > 0)
            {
                foreach (var carro in carrosFiltrados)
                {
                    Console.WriteLine($"Marca: {carro.Marca} | Modelo: {carro.Modelo} | Ano: {carro.Ano} | Tipo de Combustivel: {carro.TipoCombustivel} | Valor: {carro.Preco}");
                }
            }
            else
                Console.WriteLine(msgNenhumVeiculo);


            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine("Motos: ");

            if (motosFiltradas.Count() > 0)
            {
                foreach (var moto in motosFiltradas)
                {
                    Console.WriteLine($"Marca: {moto.Marca} | Modelo: {moto.Modelo} | Ano: {moto.Ano} | Tipo de Combustivel: {moto.TipoCombustivel} | Valor: {moto.Preco}");
                }
            }
            else
                Console.WriteLine(msgNenhumVeiculo);


            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine("Caminhões: ");

            if (caminhoesFiltrados.Count() > 0)
            {
                foreach (var caminhao in caminhoesFiltrados)
                {
                    Console.WriteLine($"Marca: {caminhao.Marca} | Modelo: {caminhao.Modelo} | Ano: {caminhao.Ano} | Tipo de Combustivel: {caminhao.TipoCombustivel} | Valor: {caminhao.Preco}");
                }
            }
            else
            {
                Console.WriteLine(msgNenhumVeiculo);
                Console.WriteLine("---------------------------------------------------");
            }
            Menu();
        }

        public void MenuVenderVeiculo()
        {
            ExibirTodosVeiculos();
            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine("O Que você deseja comprar?");
            Console.WriteLine("1 - Carro");
            Console.WriteLine("2 - Moto");
            Console.WriteLine("3 - Caminhão");
            Console.WriteLine("4 - Voltar ao menu principal");

            switch (Console.ReadLine())
            {
                case "1":
                    VenderVeiculo(1);
                    break;
                case "2":
                    VenderVeiculo(2);
                    break;
                case "3":
                    VenderVeiculo(3);
                    break;
                case "4":
                    Menu();
                    break;
                default:
                    Console.WriteLine("Opção incorreta");
                    break;
            }
        }

        public void VenderVeiculo(int idMenu)
        {
            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine("Digite o Id do Veiculo?");
            int id = int.Parse(Console.ReadLine());
            Venda venda = new Venda();
            venda.DadosCliente = new Cliente("Vinicius Xavier", "012.345.678-90");

            switch (idMenu)
            {
                case 1:
                    var carro = Carros.FirstOrDefault(c => c.Id == id);

                    if (carro != null)
                    {
                        venda.DadosVeiculo = carro;
                        venda.ValorVenda = carro.Preco + 3000;
                        Carros.RemoveAll(c => c.Id == id);
                        Vendas.Add(venda);
                        Console.WriteLine("---------------------------------------------------");
                        Console.WriteLine($"Venda concluida! Parabéns {venda.DadosCliente.Nome} pela conquista! Minha Nave Minha Vida aprovada para {venda.DadosVeiculo.Marca} {venda.DadosVeiculo.Modelo} {venda.DadosVeiculo.Ano}!");
                        Console.WriteLine($"Valor pago: {venda.ValorVenda}");
                        Console.WriteLine("---------------------------------------------------");
                    }
                    else
                    {
                        Console.WriteLine("Venda não concluida");
                    }
                    break;
                case 2:
                    var moto = Motos.FirstOrDefault(c => c.Id == id);

                    if (moto != null)
                    {
                        venda.DadosVeiculo = moto;
                        Motos.RemoveAll(c => c.Id == id);
                        Vendas.Add(venda);
                        Console.WriteLine("---------------------------------------------------");
                        Console.WriteLine($"Venda concluida! Parabéns {venda.DadosCliente.Nome} pela conquista! Minha Nave Minha Vida aprovada para {venda.DadosVeiculo.Marca} {venda.DadosVeiculo.Modelo} {venda.DadosVeiculo.Ano}!");
                        Console.WriteLine($"Valor pago: {venda.ValorVenda}");
                        Console.WriteLine("---------------------------------------------------");
                    }
                    else
                    {
                        Console.WriteLine("Venda não concluida");
                    }
                    break;
                case 3:
                    var caminhao = Caminhoes.FirstOrDefault(c => c.Id == id);

                    if (caminhao != null)
                    {
                        venda.DadosVeiculo = caminhao;
                        Caminhoes.RemoveAll(c => c.Id == id);
                        Vendas.Add(venda);
                        Console.WriteLine("---------------------------------------------------");
                        Console.WriteLine($"Venda concluida! Parabéns {venda.DadosCliente.Nome} pela conquista! Minha Nave Minha Vida aprovada para {venda.DadosVeiculo.Marca} {venda.DadosVeiculo.Modelo} {venda.DadosVeiculo.Ano}!");
                        Console.WriteLine($"Valor pago: {venda.ValorVenda}");
                        Console.WriteLine("---------------------------------------------------");
                    }
                    else
                    {
                        Console.WriteLine("Venda não concluida");
                    }
                    break;
            }
        }

        public void RelatorioDeVendas()
        {
            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine("Relatório de Vendas");

            if (Vendas.Count > 0)
            {
                foreach (var venda in Vendas)
                {
                    Console.WriteLine($"Data de venda: {venda.DataVenda} | Cliente: {venda.DadosCliente?.Nome} | Veiculo: {venda.DadosVeiculo?.Marca} {venda.DadosVeiculo?.Modelo} {venda.DadosVeiculo?.Ano} | Valor Pago: {venda.ValorVenda}");
                }
            } else
            {
                Console.WriteLine("Nenhuma venda foi realizada");
            }
            Console.WriteLine("---------------------------------------------------");
        }
    }
}
