const notes = require('./notes')
const yargs = require('yargs')
const { string } = require('yargs')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: string,
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: string,
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: string,
        },
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: string,
        },
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// need this line for it all to work.
// not a big fan of yargs at this point
yargs.parse()
