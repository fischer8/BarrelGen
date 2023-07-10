import os

def listar_arquivos_diretorio(diretorio):
    arquivos = []
    for nome_arquivo in os.listdir(diretorio):
        caminho_arquivo = os.path.join(diretorio, nome_arquivo)
        if os.path.isfile(caminho_arquivo) and nome_arquivo.endswith(('.js', '.jsx')) and not nome_arquivo.startswith('index'):
            arquivos.append(nome_arquivo)
    return arquivos

diretorios = []

def gerar_auto_import(nomes, caminho_arquivo_saida):
    with open(caminho_arquivo_saida, 'w') as arquivo:
        for nome in nomes:
            nome_sem_extensao = os.path.splitext(nome)[0]
            arquivo.write(f"export * from './{nome_sem_extensao}';\n")

def percorrer_diretorio_atual(diretorio):
    nomes_arquivos = listar_arquivos_diretorio(diretorio)
    nome_arquivo_saida = 'index.js'
    caminho_arquivo_saida = os.path.join(diretorio, nome_arquivo_saida)
    gerar_auto_import(nomes_arquivos, caminho_arquivo_saida)

    for nome_subdiretorio in os.listdir(diretorio):
        caminho_subdiretorio = os.path.join(diretorio, nome_subdiretorio)
        if os.path.isdir(caminho_subdiretorio):
            percorrer_diretorio_atual(caminho_subdiretorio)

def gerar_root_index(caminho_arquivo_saida):
    with open(caminho_arquivo_saida, 'w') as arquivo:
        for nome in arquivos2:
            nome_sem_extensao = os.path.splitext(nome)[0]
            arquivo.write(f"export * from './{nome_sem_extensao}';\n")

arquivos2 = []

diretorio_pasta = '/home/fischer/Desktop/test/test/Components'
caminho_arquivo_saida = os.path.join(diretorio_pasta, 'index.js')

percorrer_diretorio_atual(diretorio_pasta)
gerar_root_index(caminho_arquivo_saida)

print('Arquivos gerados com sucesso.')
