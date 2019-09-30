(() => { 
  const tabs = document.querySelectorAll('[data-tab]')

  const inativaTabs = () => {
    tabs.forEach(tab => tab.classList.remove('ativa'))
  }

  const ativaTab = tab => {
    tab.classList.add('ativa')
  }

  const escondeConteudos = () => {
    const conteudos = document.querySelectorAll('[data-content]')

    conteudos.forEach(conteudo => conteudo.classList.add('hide'))
  }

  const mostraConteudo = conteudo => {
    conteudo.classList.remove('hide')
  }

  tabs.forEach(
    tab => addEventListener('click', e => {
      const tabSelecionada = e.target
      const tabNumero = tabSelecionada.dataset.tab

      if(tabNumero) {
        const conteudoCorrespondente = document.querySelector(`[data-content="${tabNumero}"]`)
      
        inativaTabs()
        escondeConteudos()
  
        ativaTab(tabSelecionada)
        mostraConteudo(conteudoCorrespondente)
      }
    })
  )

})()