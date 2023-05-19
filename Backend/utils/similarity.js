// const natural = require('natural');

// // Calculate the TF-IDF score for a given term in a set of documents
// function tfidf(term, document, documents) {
//     const tf = natural.TfIdf().tf(term, document);
//     const idf = natural.TfIdf().idf(term, documents);
//     if (!tf || !idf) {
//       return 0;
//     }
//     return tf * idf;
//   }

// // Calculate the cosine similarity between two arrays of TF-IDF scores
// function cosineSimilarity(a, b) {
//   const dotProduct = a.reduce((acc, score, i) => acc + score * b[i], 0);
//   const normA = Math.sqrt(a.reduce((acc, score) => acc + score ** 2, 0));
//   const normB = Math.sqrt(b.reduce((acc, score) => acc + score ** 2, 0));
//   return dotProduct / (normA * normB);
// }

// module.exports = { tfidf, cosineSimilarity };
