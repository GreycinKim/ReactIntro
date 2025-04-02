import componentsImg from '../assets/components.png'

export default function CoreConcept({title, image, description}){
    return(
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}