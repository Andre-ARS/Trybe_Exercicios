import { connect } from 'mongoose';

const options = {
  autoIndex: false, // Não cria index para cada inserção de dado no banco.
  dbName: 'glassesStore', // Define qual banco de dados vou utilizar.
};

connect('mongodb://localhost:27017/', options);