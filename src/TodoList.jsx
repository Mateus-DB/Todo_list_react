import React from 'react'
import { useState } from 'react';
import img from './assets/checklist-1295319_640.png';
import './TodoList.css';

function TodoList() {

    const [lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("");

    function adicionaItem(form) {
        form.preventDefault();

        if (!novoItem) {
            return;
        }
        setLista([...lista, { text: novoItem, isCompleted: false }])
        setNovoItem('');
        document.querySelector('#input-entrada').focus();


    };

    function clicou(index) {
        const listaAux = [...lista];
        listaAux[index].isCompleted = !listaAux[index].isCompleted;
        setLista(listaAux)
    }

    function deleta(index) {
        const listaAux = [...lista];
        listaAux.splice(index, 1);
        setLista(listaAux)
    }

    function deletaTodas() {
        setLista([])

    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={adicionaItem}>
                <input id='input-entrada' type="text" placeholder='Adicione uma tarefa' value={novoItem} onChange={(e) => { setNovoItem(e.target.value) }} />
                <button className='add' type='submit'>Add</button>
            </form>

            <div className="listaTarefas">
                <div style={{ textAlign: 'center' }}>
                    {
                        lista.length < 1 ? <img className='icone-central' src={img} />
                            :
                            lista.map((item, index) => (
                                <div key={index} className={item.isCompleted ? 'item completo' : 'item'}>
                                    <span onClick={() => { clicou(index) }} >{item.text}</span>
                                    <button onClick={() => { deleta(index) }} className='del'>Deletar</button>

                                </div>
                            ))

                    }

                    {
                        lista.length > 0 && <button onClick={() => { deletaTodas() }} className='deleteAll'>Deletar todas</button>
                    }


                </div>
            </div>
        </div>
    )
}

export default TodoList