import React from 'react'

type Props = {
    title: string;
    content: string;
    commentQty: number;
    tags: string[];

    //8. Enum
    category: Category
}
export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
  P = "Python"
}

const Destructuring = ({title, content, commentQty, tags, category}: Props) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Quantidade de cometários: {commentQty}</p>
        <div>
            {tags.map(tag => (
                <span>#{tag}</span>
            ))}
            <h4>Categoria: {category}</h4>
        </div>
    </div>
  )
}

export default Destructuring