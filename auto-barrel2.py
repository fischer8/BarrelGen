import os

def listar_arquivos_diretorio(diretorio):
    arquivos = []
    for nome_arquivo in os.listdir(diretorio):
        caminho_arquivo = os.path.join(diretorio, nome_arquivo)
        if os.path.isfile(caminho_arquivo) and nome_arquivo.endswith(('.js', '.jsx')) and not nome_arquivo.startswith('index'):
            arquivos.append(nome_arquivo)
    return arquivos

def listar_pastas_diretorio(diretorio):
    diretorios = []
    for nome_arquivo in os.listdir(diretorio):
        caminho_arquivo = os.path.join(diretorio, nome_arquivo)
        if os.path.isdir(caminho_arquivo):
            diretorios.append(nome_arquivo)
    return diretorios

diretorios = []

def gerar_auto_import(nomes, caminho_arquivo_saida):
    with open(caminho_arquivo_saida, 'w') as arquivo:
        for nome in nomes:
            diretorios.append(caminho_arquivo_saida.split('/')[1::][-2])
            nome_sem_extensao = os.path.splitext(nome)[0]
            arquivos2.append(nome_sem_extensao)
            arquivo.write("import " + nome_sem_extensao + " from './"+ nome_sem_extensao + "';\n")
        arquivo.write('\nexport {\n')
        for nome in nomes:
            nome_sem_extensao = os.path.splitext(nome)[0]
            arquivo.write(f'  {nome_sem_extensao},\n')
        arquivo.write('};\n')

def percorrer_diretorio_atual(diretorio):
    nomes_arquivos = listar_arquivos_diretorio(diretorio)
    # if nomes_arquivos and not os.path.exists(os.path.join(diretorio, 'index.js')): 
    nome_arquivo_saida = 'index.js'
    caminho_arquivo_saida = os.path.join(diretorio, nome_arquivo_saida)
    gerar_auto_import(nomes_arquivos, caminho_arquivo_saida)

    for nome_subdiretorio in os.listdir(diretorio):
        caminho_subdiretorio = os.path.join(diretorio, nome_subdiretorio)
        if os.path.isdir(caminho_subdiretorio):
            percorrer_diretorio_atual(caminho_subdiretorio)

def gerar_root_index(caminho_arquivo_saida):
    imports = {}
    with open(caminho_arquivo_saida, 'w') as arquivo:
        for diretorio, nome in zip(diretorios, arquivos2):
            nome_sem_extensao = os.path.splitext(nome)[0]
            imports.setdefault(diretorio, []).append(nome_sem_extensao)
        
        imports_ordenados = dict(sorted(imports.items()))
        
        for diretorio, componentes in imports_ordenados.items():
            componentes_ordenados = sorted(componentes)
            linha_import = f"import {{ {', '.join(componentes_ordenados)} }} from './{diretorio}';"
            arquivo.write(linha_import + '\n')
        
        arquivo.write('\nexport {\n')
        
        componentes_ordenados = sorted(arquivos2)
        for componente in componentes_ordenados:
            componente_sem_extensao = os.path.splitext(componente)[0]
            arquivo.write(f'  {componente_sem_extensao},\n')
        
        arquivo.write('};\n')

# def gerar_root_index(caminho_arquivo_saida):
#     with open(caminho_arquivo_saida, 'w') as arquivo:
#         for diretorio, nome in zip(diretorios, arquivos2):
#             nome_sem_extensao = os.path.splitext(nome)[0]
#             arquivo.write(f'export * from "./{diretorio}/{nome_sem_extensao}";\n')

# def gerar_root_index(caminho_arquivo_saida):
#     with open(caminho_arquivo_saida, 'w') as arquivo:
#         for diretorio in diretorios2:
#             arquivo.write(f'export * from "./{diretorio}";\n')


arquivos2 = []

diretorio_pasta = '/home/fischer/Desktop/test/test/Components'
caminho_arquivo_saida = os.path.join(diretorio_pasta, 'index.js')

percorrer_diretorio_atual(diretorio_pasta)
gerar_root_index(caminho_arquivo_saida)

print('Arquivos gerados com sucesso.')