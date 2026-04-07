import styles from "./avisoSistema.module.css";

export default function AvisoSistema({ mensagem, corAlerta }) {
  return <div className={`${styles[corAlerta]}`}>{mensagem}</div>;
}
