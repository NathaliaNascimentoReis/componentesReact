import styles from "./BotaoVerde.module.css";

export default function BotaoVerde() {
  return (
    <main>
      <button className={styles.botao}>
        <p className={styles.botaoTexto}>Confirmar Cadastro</p>
      </button>
    </main>
  );
}
