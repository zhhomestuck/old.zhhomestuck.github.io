const vocabSize = WORD_INDEX.length;
const seedSize = SEED_INDEX.length;
var model_loaded = false;
const model;

async function load_model() {
  var gen_btn = document.getElementById("gen-btn"),
      load_btn = document.getElementById("load-btn"),
      out_div = document.getElementById("output-div");
  load_btn.disabled = true;
  out_div.innerText = "正在載入model........"
  model = await tf.loadModel('https://zhhomestuck.github.io/rnnstuck/model/model.json');
  model_loaded = true;
  out_div.innerText = "model載入完成。";
  gen_btn.disabled = false;
  load_btn.style.display = "none";
};

function multinomial(probs) {
  var l = probs.length, pmax = 0.0;
  var acc_prob = [];
  for(var i in probs) {
    pmax += probs[i];
    acc_prob.push(pmax);
  }
  var r = Math.random() * pmax;
  for (var i in acc_prob) {
    if (r <= acc_prob[i])
      return i;
  }
}; 

function sample(prediction, temperature = 1.0) {
  // prediction is a array of probability
  var sum = 0.0;
  for (var i in prediction) {
    prediction[i] = Math.exp((Math.log(prediction[i]) / temperature));
    sum += prediction[i];
  }
  for (var i in prediction)
    prediction[i] /= sum;
  return multinomial(prediction);
};

function sentence2indexs(sentence) {
  var result = [];
  for (var w in sentence) {
    for (var i in WORD_INDEX) {
      if (WORD_INDEX[i] == sentence[w]) {
        result.push(i);
        break;
      }
    }
  }
  return [result];
};

async function generate()
{
  if (!model_loaded) return;
  
  var gen_btn = document.getElementById("gen-btn"),
       gen_div = document.getElementById("gen-div"),
       gen_st = document.getElementById("gen-status");
  gen_div.innerText = "";
  gen_st.innerText = "正在產生文字........";
  gen_btn.disabled = true;
  
  var output_sentence = [SEED_INDEX[Math.floor(Math.random() * seedSize)]];
  for (var i = 0; i < 6; i++) {
    const y = model.predict(tf.tensor(sentence2indexs(output_sentence)));
    y_data = await y.slice([0, y.shape[1] - 1, 0], [1, 1, vocabSize - 1]).data();
    next_word = WORD_INDEX[sample(y_data, temperature = 0.7)];
    y.dispose();
    output_sentence.push(next_word);
  }
  tf.tidy();
  output_string = "";
  for (var i = 0; i < output_sentence.length; i++) {
    output_string = output_string.concat(output_sentence[i]);
  }
  gen_btn.disabled = false;
  gen_div.innerText = output_string;
  gen_st.innerText = "";
}
