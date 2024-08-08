export interface imagemPoke{
    front_default: string
    front_shiny: string
}

export interface typePoke{
    type: { name: string}
}

export interface pokeDados{
    height: number,
    id: number,
    name: string,
    sprites: imagemPoke,
    types: typePoke[],
    weight: number
}