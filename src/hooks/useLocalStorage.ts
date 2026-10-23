// Importa os dois hooks do React que o nosso hook usa por dentro.
import { useEffect, useState } from "react";

// Hook genérico: funciona como useState, mas guarda o valor no localStorage.
// <T> é um tipo genérico: o hook aceita string, number, array etc.
// key = nome com que o valor é salvo no navegador (ex.: "favoritos").
// initialValue = valor usado se ainda não houver nada salvo.
export function useLocalStorage<T>(key: string, initialValue: T) {
  // O useState recebe uma FUNÇÃO. Ela roda só na primeira renderização,
  // evitando ler o localStorage a cada renderização do componente.
  const [value, setValue] = useState<T>(() => {
    // try/catch: ler o localStorage ou fazer JSON.parse pode dar erro
    // (storage bloqueado, JSON inválido). Se der, não quebramos a tela.
    try {
      // Busca o texto salvo com essa chave. Retorna null se não existir.
      const saved = localStorage.getItem(key);
      // Se existir, converte o texto de volta para o tipo original (JSON.parse).
      // Se não existir, usa o valor inicial.
      return saved ? (JSON.parse(saved) as T) : initialValue;
    } catch {
      // Deu erro na leitura: usa o valor inicial.
      return initialValue;
    }
  });

  // O useEffect roda DEPOIS da renderização, sempre que key ou value mudarem.
  // É ele que grava no localStorage a cada mudança.
  useEffect(() => {
    // try/catch: gravar pode falhar (storage cheio ou bloqueado).
    try {
      // localStorage só guarda texto, então convertemos com JSON.stringify.
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // localStorage indisponível: segue sem persistir
    }
    // Array de dependências: o efeito só roda quando key ou value mudam.
  }, [key, value]);

  // Devolve o valor e a função de alterar, igual ao useState.
  // "as const" faz o TypeScript tratar o retorno como tupla [T, setter],
  // e não como um array genérico.
  return [value, setValue] as const;
}
