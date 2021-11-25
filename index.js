const yargs = require('yargs');
const { addNote, removeNote, listNotes, readNote } = require('./notes');
const { argv } = require('yargs');

yargs.command({
  command: 'list',
  describe: 'Lists your notes',
  handler: () => listNotes()
})

yargs.command({
  command: 'add',
  describe: 'Adds a new note',
  builder: {
    title: {
      title: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      title: 'Note body',
      demandOption: true,
      type: 'titlestring'
    }
  },
  handler: (argv) => addNote(argv.title, argv.body)
});

yargs.command({
  command: 'remove',
  describe: 'Removes a note',
  builder: {
    title: {
      title: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => removeNote(argv.title)
})

yargs.command({
  command: 'read',
  describe: 'Reads a the body of a specific note',
  builder: {
    title: {
      title: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    readNote(argv.title)
  }
})

yargs.parse();
