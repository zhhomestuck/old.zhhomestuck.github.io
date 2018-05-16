const vocabNum = Object.keys(WORD_INDEX).length;
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
  // prediction is a array
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
  console.log("probas", probas);
  return probas;
};

function index2word(index) {
  console.log("index:", index, "; index.toString():", index.toString());
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
  var output_sentence = [index2word(Math.floor(Math.random() * vocabNum))];
  console.log("output_sentence:", output_sentence);
  for (var i = 0; i < 10; i++) {
    y_test = model.predict(tf.tensor(sentence2indexs(output_sentence)));
    flatten.apply(y_test);
    y_data = await y_test.data();
    next_word = index2word(sample(y_test, temperature = 0.5));
    if (next_word == '\n' && output_sentence[output_sentence.length - 1] == '\n') {
      continue;
    }
    output_sentence.push(next_word);
    console.log("output_sentence:", output_sentence);
  }
  output_string = "";
  for (word in output_sentence) {
    output_string += word;
  }
  document.getElementById("gen-div").innerText = output_string;
}
