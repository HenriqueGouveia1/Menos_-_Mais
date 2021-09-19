import React, { Component, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import Header from './Header'

export default class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      Data: [
        {
          id: '1',
          title: 'Como aplicar a organização financeira?',
          desc: "Saiba o que está acontecendo com suas finanças, invista na sua educação financeira, crie metas possíveis,veja o que pode ser cortado.",
          infoAd: 'aaaaaaaaaaaaaa'
        },
        {
          id: '2',
          title: 'Trabalhe, economize e invista!',
          desc: "Comece com 1 Real, mas pense no primeiro milhão!",
          infoAd: 'Você pode optar por aplicações em renda fixa como o Tesouro Direto, CDBs e Fundos de Investimentos ou também em renda variável, por exemplo, as ações. A partir dos rendimentos, você estará ainda mais motivado a manter um bom planejamento financeiro e a separar uma quantia para aplicar.'
        },
        {
          id: '3',
          title: 'Usar o cartão de crédito de maneira consciente.',
          desc: 'Tenha um valor mensal separado para essas compras, Cuidado com as promoções!!!! Conheça suas necessidades.',
          infoAd: 'aaaaaaaaaaaaaa'
        },
        {
          id: '4',
          title: 'Como dar uma guinada na vida?',
          desc: '3 Atitudes Capazes de Mudar Sua Vida Financeira',
          infoAd: 'Praticar exercícios com regularidade. Todos nós praticamos algum exercício quando mais jovens, mas acabamos perdendo esse ótimo hábito com a chegada da vida profissional, das demandas sociais e do excesso de trabalho'
        },
        {
          id: '5',
          title: 'O que a educação financeira pode fazer por você?',
          desc: 'Com a educação financeira você aprende a analisar riscos, benefícios de uma compra e como ela pode impactar seu orçamento. Isso te ajuda nas tomadas de decisões, na hora de encarar um banco oferecendo um produto ou uma roupa em promoção.',
          infoAd: ''
        },
        {
          id: '6',
          title: 'O que é ter educação financeira?',
          desc: 'Saber lidar com suas finanças!',
          infoAd: 'Educação financeira é “o processo mediante o qual os indivíduos e as sociedades melhoram a sua compreensão em relação aos conceitos e produtos financeiros, de maneira que, com informação, formação e orientação, possam desenvolver os valores e as competências necessários para se tornarem mais.'
        },
        {
          id: '7',
          title: 'Como organizar as finanças pessoais?',
          desc: 'Saiba exatamente quanto você ganha por mês.',
          infoAd: 'Liste todos os gastos, analise se sobra ou falta dinheiro no final do mês, descubra o que é possível cortar ou priorizar, livre-se das dívidas, planeje suas finanças.Controle os gastos no cartão de crédito, prepare-se para os gastos extras.'
        },
        {
          id: '8',
          title: 'Como organizar o salário?',
          desc: 'Com a técnica 50 30 20!',
          infoAd: '50% para gastos essenciais e de primeira necessidade, 30% para desejos e gastos supérfluos, 20% para pagamento de dívidas ou investimentos, Calcule os percentuais com base na renda líquida, .Conheça seus principais gastos, Personalize sua ferramenta de gestão financeira.'
        },
        {
          id: '9',
          title: 'Qual é a forma de organizarmos melhor as despesas dentro de um orçamento?',
          desc: 'Varia de cada um mas...',
          infoAd: 'Pegue a lista de dívidas e organize da seguinte forma: no topo coloque os serviços essenciais como água, luz, gás. Logo abaixo, liste as dívidas dos juros mais altos, como cartões de crédito e cheque especial. Em seguida, organize as demais dívidas por credor. Assim você saberá quanto deve para cada instituição.'
        },
      ]
    }
  }

  onPress = () => {
    <View>{infoAd}</View>
    this.setState({
      expandir: { infoAd }
    });
  };

  render() {



    return (

      <SafeAreaView style={styles.container}>

        <Header />
        <Text style={styles.obs}>Obs: Verão de testes, algumas coisas como botão "Aperte para mais infos" ainda não funciona...</Text>
        <FlatList
          data={this.state.Data}

          renderItem={({ item }) =>

            <View style={styles.otem}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.desc}</Text>
              <TouchableOpacity >
                <Text style={styles.butao}>Aperte para mais infos</Text>
              </TouchableOpacity>
            </View>
          }
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82BE96',
    // marginTop: StatusBar.currentHeight || 0,


  },
  otem: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderBottomColor: 'gray',
    borderBottomWidth: 10,


  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  butao: {
    paddingTop: 8,
    flex: 1,
    color: 'blue',
    fontWeight: 'bold'
  },
  header: {
    backgroundColor: '#359253'
  },
  obs:{
    opacity: .6,
    color: 'black',
 
  }

});
