const vocabNum = WORD_INDEX.length;

function multinomial(n, probs) {
  var l = probs.length, result = [];
  for (var c = 0; c < n; c++) {
    var acc_prob = 0, r = Math.random();
    for (var i = 0; i < l; i++) {
      acc_prob += probs[i];
      if (r <= acc_prob) {
        result.push(i);
        break;
      }
    }
  }
  return result;
}; 

function sample(prediction, temperature = 1.0) {
  if (temperature <= 0) return prediction;
  var sum = 0;
  for (var item in prediction) {
    item = Math.exp((Math.log(item) / temperature));
    sum += item;
  }
  for (var item in prediction) {
    item /= sum;
  }
  probas = multinomial(1, prediction);
  return probas;
};

function index2word(index) {
  try {
    return WORD_INDEX.index;
  }
  catch {
    console.log("index2word: index out of range.");
  }
};

function sentence2indexs(sentence) {
  var result = [];
  for (var w in sentence) {
    for (var i = 0; i < vocabNum; i++) {
      if (WORD_INDEX.i == w) result.push(i);
    }
  }
  return result;
};

async function generate(n)
{
  const model = await tf.loadModel('rnnstuck_model/rnnstuck_model.json');
  var output_sentence = [index2word(Math.floor(Math.random() * vocabNum))];
for (var n = 0; n < 10; n++) {
    y_test = model.predict(tf.tensor(sentence2indexs(output_sentence)));
    console.log(y_test);
    /*next_word_index = sample(y_test[0, y_test.shape[1] - 1], temperature = 0.5)
    next_word = word_vector.wv.index2word[next_word_index[0]]
    if next_word == '\n' and output_sentence[-1] == '\n' : continue
    output_sentence.append(next_word)
        */
    }
    /*
    if out_i % 10 == 0 : print("i:", out_i)
    output_sentence.append('\n')
    output_string = ""
    for word in output_sentence :
        output_string += word
    outfile.write(output_string)
  */
}
