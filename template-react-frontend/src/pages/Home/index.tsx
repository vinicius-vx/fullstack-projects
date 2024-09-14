import "./style.css";
import DeleteButton from "../../assets/delete.png";
import api from "../../services/api";
import { useEffect, useState, useRef } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputAge = useRef<HTMLInputElement>(null);

  async function getUsers() {
    const usersFromApi = await api.get("/users");
    setUsers(usersFromApi.data);
  }

  async function createUsers() {
    await api.post("/users", {
      name: inputName.current?.value,
      email: inputEmail.current?.value,
      age: inputAge.current?.value,
    });

    getUsers();
  }

  async function deleteUsers(id) {
    await api.delete(`/users/${id}`);
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" type="text" name="nome" ref={inputName} />
        <input placeholder="Idade" type="number" name="idade" ref={inputAge} />
        <input placeholder="Email" type="email" name="email" ref={inputEmail} />
        <button type="button" onClick={createUsers}>
          Cadastrar
        </button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade: <span>{user.age} </span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={DeleteButton} alt="" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
