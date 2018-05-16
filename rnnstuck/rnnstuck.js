const vocabSize = Object.keys(WORD_INDEX).length;
const seedSize = Object.keys(SEED_INDEX).length;
const flatten = tf.layers.flatten();
var model_loaded = false;
model = null;

async function load_model() {
  var gen_btn = document.getElementById("gen-btn"),
      load_btn = document.getElementById("load-btn"),
      out_div = document.getElementById("output-div");
  out_div.innerText = "正在載入model........"
  model = await tf.loadModel('https://zhhomestuck.github.io/rnnstuck/model/model.json');
  model_loaded = true;
  out_div.innerText = "model載入完成。";
  gen_btn.disabled = false;
  load_btn.disabled = true;
}

function multinomial(probs) {
  var l = probs.length, result = 0;
  var acc_prob = 0, r = Math.random();
  for (var i = 0; i < l; i++) {
    acc_prob += probs[i];
    if (r <= acc_prob) {
      result = i;
      break;
    }
  }
  return result;
}; 

function sample(prediction, temperature = 1.0) {
  // prediction is a array
  var sum = 0;
  for (var item in prediction) {
    item = Math.exp((Math.log(item) / temperature));
    sum += item;
  }
  for (var item in prediction) {
    item /= sum;
  }
  probas = multinomial(prediction);
  console.log("prediction:", prediction);
  console.log("probas:", probas);
  return probas;
};

function index2word(index) {
  console.log("index:", index.toString());
  index = index.toString();
  console.log("WORD_INDEX[index]:", WORD_INDEX[index]);
  if (WORD_INDEX[index] === undefined) console.log("index2word: index out of range.");
  return WORD_INDEX[index];
};

function sentence2indexs(sentence) {
  var result = [];
  for (var w in sentence) {
    for (var i in WORD_INDEX) {
      if (WORD_INDEX[i] == w) {
        result.push(i);
      }
    }
  }
  return [result];
};

async function generate(n)
{
  if (!model_loaded) return;
  var output_sentence = [index2word(SEED_SIZE[Math.floor(Math.random() * seedSize]))];
  console.log("output_sentence:", output_sentence);
  for (var i = 0; i < 100; i++) {
    y_test = model.predict(tf.tensor(sentence2indexs(output_sentence)));
    flatten.apply(y_test);
    y_data = await y_test.data();
    next_word = index2word(sample(y_test, temperature = 0.8));
    if (next_word == '\n' && output_sentence[output_sentence.length - 1] == '\n') {
      continue;
    }
    output_sentence.push(next_word);
    console.log("output_sentence:", output_sentence);
  }
  output_string = "";
  for (var i = 0; i < output_sentence.length; i++) {
    console.log(output_sentence[i]);
    output_string = output_string.concat(output_sentence[i]);
  }
  document.getElementById("gen-div").innerText = output_string;
}
