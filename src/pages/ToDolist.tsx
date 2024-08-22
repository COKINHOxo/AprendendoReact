import { Button } from "../shared/components/Button";
import { useToDoList } from "../shared/hooks/useToDoList";

type ItemProps = {
  id: number;
  text: string;
  concluida: boolean;
};

export default function ToDoList() {
  const {concluirItem, editando, editfromLista, inserirLista, item, lista, removefromLista, setItem} = useToDoList()

  function handleChangeValue(e: React.ChangeEvent<HTMLInputElement>): void {
    setItem({ ...item, text: e.target.value } as ItemProps)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container text-center bg-gray-200 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-thin text-gray-900 mb-6">{editando ? "Editando Item" : "Lista maneira!"}</h1>
        <div className="flex justify-center items-center space-x-2">
          <input
            value={item?.text || ""}
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            onChange={(e) => handleChangeValue(e)}
          />
          <Button tipo={editando ? "success" : "default"}  label={editando ? "Salvar" : "Adicionar"} click={() => inserirLista()} />
        </div>

        <ul className="mt-6 space-y-2">
          {lista.map((item) => (
            <li
              key={item.id}
              className={`border ${item.concluida ? "border-gray-500 bg-gray-300" : "border-gray-300 bg-gray-50"} rounded-lg p-4 flex justify-between items-center`}
            >
              <span className={`flex-shrink-0 ${item.concluida ? "text-gray-500 line-through" : ""}`}>
                {item.text}
              </span>
              <div className="space-x-1">
                <Button label="Remover" tipo="danger" click={() => removefromLista(item.id) }/>
                <Button disabled={item.concluida} label="Editar" tipo="success" click={() => editfromLista(item)}/>
                <Button disabled={item.concluida} label="Concluir" click={() => concluirItem(item.id)}/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
