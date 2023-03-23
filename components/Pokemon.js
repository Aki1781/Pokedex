import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Pokemon = ({pokemon, index}) => {
    const pokeIndex = ('000' + (index + 1)).slice(-3)

    return (
        <Link href={`/pokemon/${pokemon.name}`}>
            <a>
                <div className="bg-rose-900 rounded-xl p-7 flex flex-col justify-center items-center relative">
                    <span className="absolute text-5xl text-amber-500 top-0 right-3 font-bold">#{pokeIndex}</span>
                    <Image
                        alt={pokemon.name}
                        width={150}
                        height={150}
                        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
                    />
                    <span className="uppercase font-semibold tracking-wider text-amber-400">
            {pokemon.name}
            </span>
                </div>
            </a>
        </Link>
    );
};

export default Pokemon;
