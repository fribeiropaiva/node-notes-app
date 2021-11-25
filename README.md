# Notes App
A node command line note taking app

1 - If you don't have node, install it first.<br/>
2 - Run 'npm install'<br/>
3 - Use 'node index.js command', in the terminal, to use the app. See available commands below.

Available commands:
- 'list': list all notes. No required arguments

- 'read': read a given note. Argument '--title' is required:<br/>
  ex: node index.js read --title="Note title"
  
- 'add': adds a new note. Arguments '--title' and '--body' are required:<br/>
  ex: node index.js add --title="Note title" --body="Note body"

- 'remove': removes a given note. Argument '--title' is required:<br/>
  ex: node index.js remove --title="Note title"
  

