using GerenciamentoBilblioteca.Models;
using GerenciamentoBilblioteca.Services;

BibliotecaService biblioteca = new BibliotecaService();
bool sair = false;

while (!sair)
{
    Console.WriteLine("\nMenu Principal:");
    Console.WriteLine("1. Cadastrar Livro");
    Console.WriteLine("2. Cadastrar Cliente");
    Console.WriteLine("3. Realizar Empréstimo");
    Console.WriteLine("4. Realizar Devolução");
    Console.WriteLine("5. Exibir Relatório de Empréstimos");
    Console.WriteLine("6. Sair");
    Console.Write("Escolha uma opção: ");

    switch (Console.ReadLine())
    {
        case "1":
            biblioteca.CadastrarLivro(new Livro(1, "C# Essencial", "Autor Exemplo", 5));
            break;
        case "2":
            biblioteca.CadastrarCliente(new Cliente("Vini", 1));
            break;
        case "3":
            biblioteca.RealizarEmprestimo(1, "C# Essencial");
            break;
        case "4":
            biblioteca.RealizarDevolucao("C# Essencial");
            break;
        case "5":
            biblioteca.ExibirRelatorioEmprestimos();
            break;
        case "6":
            sair = true;
            break;
        default:
            Console.WriteLine("Opção inválida.");
            break;
    }
}