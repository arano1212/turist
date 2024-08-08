import mongoose from 'mongoose'
import { database } from './index.js'

const { user, password, host, name } = database
const URI = `mongodb+srv://${user}:${password}@${host}/${name}?retryWrites=true&w=majority&appName=Cluster0`

const { connection } = mongoose

connection.on('error', () => {
  console.error('Error database connection 🔴')
})

connection.on('open', () => {
  console.info('database connection 🟢 ')
})

mongoose.connect(URI)
