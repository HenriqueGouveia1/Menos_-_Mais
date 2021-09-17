import React from 'react'
import { FlatList } from 'react-native'
import Cards from './Cards'

const conselhos = [
    {
      id: 1,
      title: "Trabalhe, economize e invista.",
      desc: "Comce com 1 Real, mas pense no primeiro milhão.",
      info: "Gaste no máximo na velocidade dos juros simples e invista de olho no benefício dos juros compostos"
    },
    {
      id: 2,
      title: "Trabalhe, economize e invista.",
      desc: "Comece com 1 Real, mas pense no primeiro milhão.",
      info: "Gaste no máximo na velocidade dos juros simples e invista de olho no benefício dos juros compostos"
    },
    {
      id: 3,
      title: "Trabalhe, economize e invista.",
      desc: "Comece com 1 Real, mas pense no primeiro milhão.",
      info: "Gaste no máximo na velocidade dos juros simples e invista de olho no benefício dos juros compostos"
    }
  ];

export default function index() {
    return (
        <>
            <FlatList
                data={conselhos}
                data={servicos}
                removeClippedSubviews={false}
                renderItem={({ cards }) => <Cards {...cards} />}
               
            />
        </>
    )
}
