#!/usr/bin/env python3

import os

directory_folder = ''

def list_directory_files(directory):
    files = []
    for file_name in os.listdir(directory):
        file_path = os.path.join(directory, file_name)
        if os.path.isfile(file_path) and file_name.endswith(('.js', '.jsx')) and not file_name.startswith('index'):
            files.append(file_name)
    return files

def list_directory_folders(directory):
    folders = []
    for file_name in os.listdir(directory):
        file_path = os.path.join(directory, file_name)
        if os.path.isdir(file_path):
            folders.append(file_name)
    return folders

files = []
directories = []

def generate_auto_import(names, output_file_path):
    with open(output_file_path, 'w') as arquivo:
        for name in names:
            directories.append(output_file_path.split('/')[1::][-2])
            name_without_extension = os.path.splitext(name)[0]
            files.append(name_without_extension)
            arquivo.write("import " + name_without_extension + " from './"+ name_without_extension + "';\n")
        arquivo.write('\nexport {\n')
        for name in names:
            name_without_extension = os.path.splitext(name)[0]
            arquivo.write(f'  {name_without_extension},\n')
        arquivo.write('};\n')

def traverse_current_directory(directory):
    file_names = list_directory_files(directory)
    output_file_name = 'index.js'
    output_file_path = os.path.join(directory, output_file_name)
    generate_auto_import(file_names, output_file_path)

    for sub_directory_name in os.listdir(directory):
        sub_directory_path = os.path.join(directory, sub_directory_name)
        if os.path.isdir(sub_directory_path):
            traverse_current_directory(sub_directory_path)

def generate_root_index(output_file_path):
    imports = {}
    with open(output_file_path, 'w') as file:
        for directory, name in zip(directories, files):
            name_without_extension = os.path.splitext(name)[0]
            imports.setdefault(directory, []).append(name_without_extension)

        sorted_imports = dict(sorted(imports.items()))

        for directory, components in sorted_imports.items():
            sorted_components = sorted(components)
            import_line = f"import {{ {', '.join(sorted_components)} }} from './{directory}';"
            file.write(import_line + '\n')

        file.write('\nexport {\n')
        sorted_files = sorted(files)
        for component in sorted_files:
            component_without_extension = os.path.splitext(component)[0]
            file.write(f'  {component_without_extension},\n')
        file.write('};\n')

output_file_path = os.path.join(directory_folder, 'index.js')

traverse_current_directory(directory_folder)
generate_root_index(output_file_path)

print('Files generated successfully.')
