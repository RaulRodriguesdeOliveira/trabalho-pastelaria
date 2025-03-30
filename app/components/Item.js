import Image from "next/image"
import style from "../components/Item.module.css"

export default function Item (props) {
    return (
        <div className={style.item}>
            <h3 style={props.esgotado && {textDecoration: "line-through"}} className={style.name}>{props.name}</h3>
            {props.esgotado? <Image src="/pastel-esgotado.png" alt="pastel" width={100} height={100} /> : <Image src="/pastel.png" alt="pastel" width={100} height={100} />}
            <h5 className={style.preco}>R$ {props.valor}</h5>
        </div>
    )
}