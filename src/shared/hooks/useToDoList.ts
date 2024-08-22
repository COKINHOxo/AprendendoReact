import { useEffect, useState } from "react";


type ItemProps = {
    id: number;
    text: string;
    concluida: boolean;
  };

export function useToDoList(){
    const [lista, setLista] = useState<ItemProps[]>([]);
    const [item, setItem] = useState<ItemProps>({ id: 0, text: "", concluida: false });
    const [editando, setEditando] = useState<boolean>(false);



    useEffect(() => {
      // ir no local storege, verificar se há uma lista salva, se tiver setLista com os dados.
    }, [])



    function salvarLista(listaNova: ItemProps[]) {
      // salvar lista (listaNova) atualizada no local storege
      setLista(listaNova)
    }


    function novoItem(): void {
      const newItem: ItemProps = {
        id: Math.random(),
        text: item.text,
        concluida: false,
      };
      salvarLista([...lista, newItem])
    }


    function editarItem(): void {
      const novaLista = lista.map((itemAtual) =>
        itemAtual.id === item.id ? { ...itemAtual, text: item.text } : itemAtual
      );
      setLista(novaLista); //1 
      setEditando(false);
    }


    function resetItem() {
      setItem({ id: 0, text: "", concluida: false });
    }
  

    function inserirLista() {
      if (editando) {
        editarItem()
      } else {
        novoItem();
      }
      resetItem()
    }
  
    function editfromLista(itemParaEditar: ItemProps) {
      setItem(itemParaEditar);
      setEditando(true);
    }
  
    function removefromLista(id: number) {
      const remover = lista.filter((item) => item.id !== id);
      setLista(remover); // 3
    }
  
    function concluirItem(id: number) {
      const novaLista = lista.map((item) =>
        item.id === id ? { ...item, concluida: true } : item
      );
      setLista(novaLista); //4
    }


    return{
        inserirLista,
        editfromLista,
        removefromLista,
        concluirItem,
        lista,
        item,
        setItem,
        editando
    }
}