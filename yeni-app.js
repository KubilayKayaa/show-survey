const surveyJSON =
  '{"surveyId":"1","surveyHeader":"İstanbulu Nasıl Buluyorsunuz?","surveyDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis malesuada est. Nullam eleifend suscipit enim. Sed dignissim vehicula turpis eu mattis. Praesent congue, enim ut euismod ultricies, est est vulputate sem, id porta erat orci sed velit. Nullam nec vulputate nulla. Mauris at lorem vitae risus ultrices convallis tincidunt quis erat. Proin et imperdiet odio, non eleifend dolor. Vestibulum bibendum nec dui eu imperdiet.","surveyMedia":"https://cdn.hipwallpaper.com/i/4/9/cZY26m.jpg","surveyLang":"1","surveyPageType":"1","deletedQuestion":"","surveyOptions":[[{"background":"https://allhdwallpapers.com/wp-content/uploads/2015/06/Istanbul-4.jpg","surveyEndText":"Form Kapanış Mesajı","redirectUrl":"https://vizyon2050.istanbul"}]],"Data": [{"surveyQuestionId":"1","surveyId":"1","header":"Kısa Metin","type":"1","questionMedia":"","questionData":[],"otherquestion":"0","questionOptions":[{"questionClass":"0","required":"1"}]},{"surveyQuestionId":"2","surveyId":"1","header":"Paragraf","type":"2","questionMedia":"","questionData":[],"otherquestion":"0","questionOptions":[{"questionClass":"1","required":"0"}]},{"surveyQuestionId":"3","surveyId":"1","header":"Tarih","type":"3","questionMedia":"https://img.freepik.com/free-vector/man-answering-survey-computer-monitor_1262-19275.jpg?size=626&ext=jpg","questionData":[],"otherquestion":"0","questionOptions":[{"questionClass":"2","required":"0"}]},{"surveyQuestionId":"4","surveyId":"1","header":"Tarih Saat","type":"4","questionMedia":"","questionData":[],"otherquestion":"0","questionOptions":[{"questionClass":"3","required":"1"}]},{"surveyQuestionId":"5","surveyId":"1","header":"Dosya Yükleme","type":"5","questionMedia":"https://img.freepik.com/free-vector/man-answering-survey-computer-monitor_1262-19275.jpg?size=626&ext=jpg","questionData":[],"otherquestion":"0","questionOptions":[{"questionClass":"4","required":"1"}]},{"surveyQuestionId":"6","surveyId":"1","header":"E posta","type":"6","questionMedia":"","questionData":[],"otherquestion":"0","questionOptions":[{"questionClass":"5","required":"1"}]},{"surveyQuestionId":"7","surveyId":"1","header":"Telefon","type":"7","questionMedia":"https://img.freepik.com/free-vector/man-answering-survey-computer-monitor_1262-19275.jpg?size=626&ext=jpg","questionData":[],"otherquestion":"0","questionOptions":[{"questionClass":"6","required":"1"}]},{"surveyQuestionId":"8","surveyId":"1","header":"Değerlendirme","type":"8","questionMedia":"","questionData":[{"rankOneSelect":"1","rankTwoSelect":"5","ratingTextFirst":"Çok Kötü","ratingTextSecond":"Çok İyi"}],"otherquestion":"0","questionOptions":[{"questionClass":"7","required":"1"}]},{"surveyQuestionId":"9","surveyId":"1","header":"Çoklu Seçim","type":"9","questionMedia":"","questionData":[{"value":"","content":"Çoklu Seçim 1","image":""},{"value":"","content":"Çoklu Seçim 2","image":""}],"otherquestion":"1","questionOptions":[{"questionClass":"8","required":"1"}]},{"surveyQuestionId":"10","surveyId":"1","header":"Çoktan Seçmeli","type":"10","questionMedia":"","questionData":[{"value":"","content":"Çoktan Seçmeli 1","image":"https://www.questionpro.com/blog/wp-content/uploads/2018/08/70-Online-Survey.jpg"},{"value":"","content":"Çoktan Seçmeli 2","image":"https://www.questionpro.com/blog/wp-content/uploads/2018/08/70-Online-Survey.jpg"}],"otherquestion":"1","questionOptions":[{"questionClass":"9","required":"1"}]},{"surveyQuestionId":"11","surveyId":"1","header":"Açılır Menü","type":"11","questionMedia":"","questionData":[{"value":"","content":"Açılır Menü 1"},{"value":"2","content":"Açılır Menü 2"},{"value":"3","content":"Açılır Menü 3"}],"otherquestion":"1","questionOptions":[{"questionClass":"10","required":"1"}]}]}';

let surveyObj = JSON.parse(surveyJSON);

showQuestionStart = (header, description, questionNumber, image) => {
  return `<div class="container-fluid container-survey-header-show d-flex align-items-center justify-content-center flex-column" style="background: linear-gradient(0deg, rgba(31, 31, 31, 0.836), rgba(49, 49, 49, 0.733)), url(${image});"> <h1 class="container-survey-header">${header}</h1> <p class="container-survey-description">${description}</p><p class="container-survey-question-number"><span>${questionNumber}</span> sorudan oluşan anketimize başlamak ister misiniz?</p><a href="#" class="button startSurvey swiper-button-next">ANKETE BAŞLA</a> </div>`;
};

showQuestionEnd = (msg) => {
  return `<div class="show-question-completed d-flex align-items-center justify-content-center flex-column"> <i class="fas fa-check"></i> <p class="completed-header">Anket Başlığı</p><h2>Anketimizi tamamladınız!</h2> <p class="showSurveyMsg">${msg}</p> <p class="sendAnswersQues">Cevapları göndermek ister misiniz?</p><a href="#" class="button getJSONPageTwo">GÖNDER</a> </div>`;
};

showQuestionSlide = (data, isReq, questionId, type, otherQuestion, image) => {
  return `<div class="swiper-slide" style="background: linear-gradient(0deg, rgba(31, 31, 31, 0.836), rgba(49, 49, 49, 0.733)), url(${image});"><div class="show-question d-flex align-items-start justify-content-center flex-column" surveyQuestionId='${questionId}' isReq="${isReq}" type="${type}" otherquestion="${otherQuestion}"><div class="show-question-header d-flex align-items-center"> <h2>${
    surveyObj.Data[data].surveyQuestionId
  }</h2> <p>${surveyObj.Data[data].header} <small>${
    isReq == 1 ? "(*Zorunlu)" : ""
  }</small></p></div><div class="show-question-contents d-flex justify-content-start flex-column"></div></div></div></div>`;
};

showQuestion = (data, isReq, questionId, type, otherQuestion, image) => {
  return `<div class="show-question d-flex align-items-start justify-content-center flex-column" surveyQuestionId='${questionId}' isReq="${isReq}" type="${type}" otherquestion="${otherQuestion}"><div class="show-question-header d-flex align-items-center"> <h2>${
    surveyObj.Data[data].surveyQuestionId
  }</h2> <p>${surveyObj.Data[data].header} <small>${
    isReq == 1 ? "(*Zorunlu)" : ""
  }</small></p></div><div class="show-question-contents d-flex justify-content-start flex-column"></div></div></div>`;
};

questionRank = () => {
  return `<div class="questions-rank-container d-flex align-items-center hide"> <div class="question-rank-text"> <p> <span class="allQuestionNumber">11</span> sorudan <span class="currentQuestionNumber">0</span> cevaplandı </p><div class="question-rank-bar"> <div class="swiper-pagination"></div></div></div><div class="question-rank-icons d-flex"> <div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div>`;
};
questionInput = (data) => {
  return `<div class="question-input"> <div class="field-wrapper"> <input type="text" name='${data}' > <div class="field-placeholder"><span>${data}</span></div></div></div>`;
};

questionLongText = () => {
  return `<div class="question-longtext"> <textarea cols="30" rows="8"></textarea> </div>`;
};

questionRadio = (surveyId, value) => {
  return `<div class="ranking-radio-items d-flex align-items-center flex-column"> <label>${value}</label><input type="radio" name="questionRanking${surveyId}" value="${value}"> </div>`;
};

questionRadioAndCheckboxContent = (type) => {
  return `<div class="${type}-contents"></div>`;
};
let radioCount = 0;
let checkCount = 0;
questionRadioAndCheckbox = (data, value, type, image, id) => {
  type == "radio" ? radioCount++ : checkCount++;
  if (image != "") {
    return `<div class="show-question-${type}-content-with-image d-flex align-items-center flex-column"> <img src="${image}"> <div class="show-question-${type}-card d-flex align-items-start"> <input type="${type}" id="${type}ContentImg${
      type == "radio" ? radioCount : checkCount
    }" name="${type}ContentImg${id}" value="${
      value == "" ? `${data}` : value
    }"> <label for="${type}ContentImg${
      type == "radio" ? radioCount : checkCount
    }">${data}</label> </div></div>`;
  } else {
    return `<div class="show-question-${type}-content d-flex align-items-center"> <input type="${type}" id='${type}Content${
      type == "radio" ? radioCount : checkCount
    }' name='${type}Content${id}' value="${
      value == "" ? `${data}` : value
    }"> <label for='${type}Content${
      type == "radio" ? radioCount : checkCount
    }'>${data}</label> </div>`;
  }
};
questionTextArea = () => {
  return `<div class="question-longtext"><textarea cols="30" rows="8" ></textarea></div>`;
};

questionDate = () => {
  return `<div class="question-datetime"> <input type="date"> </div>`;
};

questionDateTime = () => {
  return `<div class="question-datetime"> <input type="datetime-local"> </div>`;
};

questionFileUpload = () => {
  return `<div class="question-file-upload"> <div class="question-file"> <i class="fas fa-cloud-upload-alt"></i> <p>Yüklemek istediğiniz dosyayı sürükleyin</p><p><small>veya</small></p><div class="button-wrapper"> <span class="label">Dosya Yükle</span> <input type="file" name="upload" class="upload-box"> </div><p>Dosya limiti: <b>10 MB</b></p></div></div>`;
};

questionEmail = () => {
  return `<div class="question-input"> <div class="field-wrapper"> <input type="email" name="email" placeholder="E Posta Adresiniz"> <div class="field-placeholder"><span>E Posta Adresiniz</span></div></div></div>`;
};

questionPhone = () => {
  return `<div class="question-input"> <div class="field-wrapper"> <input type="text" name="phone" class="phones" placeholder="Telefon Numaranız"> <div class="field-placeholder"><span>Telefon Numaranız</span></div></div></div>`;
};

questionRankingRadio = () => {
  return `<div class="question-ranking-radio"> <div class="question-ranking d-flex align-items-center justify-content-between"> </div><div class="question-ranking-text d-flex justify-content-between"> </div></div>`;
};

questionParag = (data) => {
  return `<p>${data}</p>`;
};

questionContinueButton = () => {
  return `<a href="#" class="button continueBtn ">DEVAM</a>`;
};
questiongetJSONPageOne = () => {
  return `<a href="#" class="button getJSONPageOne">DEVAM</a>`;
};

questionSelect = () => {
  return `<div class="question-select" ><select></select></div>`;
};

questionOption = (data, value) => {
  return `<option value="${value == "" ? `${data}` : value}">${data}</option>`;
};

questionImage = (data) => {
  return `<img class="surveyQuestionImage" src="${data}">`;
};

$(document).on(
  "change",
  ".show-question-contents .checkbox-contents input[type=checkbox]",
  function (e) {
    let inputElement = e.target.parentElement.parentElement;
    let parentElement = e.target.parentElement.parentElement.parentElement;
    if (this.value == -99) {
      if (this.checked) {
        $(inputElement).after("<br>" + questionTextArea());
      } else {
        $(parentElement).find(".question-longtext").remove();
      }
    }
  }
);
$(document).on(
  "change",
  ".show-question-contents .show-question-checkbox-content input[type=checkbox]",
  function (e) {
    let inputElement = e.target.parentElement;
    let parentElement = e.target.parentElement.parentElement;
    if (this.value == -99) {
      if (this.checked) {
        $(inputElement).after("<br>" + questionTextArea());
      } else {
        $(parentElement).find(".question-longtext").remove();
      }
    }
  }
);

$(document).on(
  "change",
  ".show-question-contents .radio-contents input[type=radio]",
  function (e) {
    let inputElement = e.target.parentElement.parentElement;
    let parentElement = e.target.parentElement.parentElement.parentElement;
    if (this.value == -99) {
      $(inputElement).after("<br>" + questionTextArea());
    } else {
      $(parentElement).find(".question-longtext").remove();
    }
  }
);
$(document).on(
  "change",
  ".show-question-contents .show-question-radio-content input[type=radio]",
  function (e) {
    let inputElement = e.target.parentElement;
    let parentElement = e.target.parentElement.parentElement;
    if (this.value == -99) {
      $(inputElement).after(questionTextArea());
    } else {
      $(parentElement).find(".question-longtext").remove();
    }
  }
);

$(document).on(
  "change",
  ".show-question .question-select select",
  function (e) {
    let parentElement = e.target.parentElement;
    if (this.value == -99) {
      $(parentElement).after(questionTextArea());
    } else {
      $(parentElement).next(".question-longtext").remove();
    }
  }
);

class Answer {
  constructor(questionId, questionType, questionData) {
    this.questionId = questionId;
    this.questionType = questionType;
    this.questionData = questionData;
  }
}

function createJSONForSurveys(surveyId, userId, surveyData) {
  return `{"surveyId":"${surveyId}","userId":"${userId}","Data": ${JSON.stringify(
    surveyData
  )}}`;
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

$(document).on("click", ".getJSONPageTwo", function (e) {
  const question = document.querySelectorAll(".show-question");
  let AnswerArray = [];
  let Data = [];
  for (i = 0; i < question.length; i++) {
    let questionId = $(question[i]).attr("surveyquestionid");
    let isReq = $(question[i]).attr("isreq");
    let questionType = $(question[i]).attr("type");

    if (
      questionType == 1 ||
      questionType == 3 ||
      questionType == 4 ||
      questionType == 6 ||
      questionType == 7
    ) {
      const questionData = $(question[i]).find("input").val();
      Data.push({
        questionId: questionId,
        questionType: questionType,
        questionData: questionData,
      });
    } else if (questionType == 2) {
      const questionData = $(question[i]).find("textarea").val();
      Data.push({
        questionId: questionId,
        questionType: questionType,
        questionData: questionData,
      });
    } else if (questionType == 5) {
      const questionData = "123";
      Data.push({
        questionId: questionId,
        questionType: questionType,
        questionData: "",
      });
    } else if (questionType == 8) {
      const valueInput = $(question[i]).find("input[type=radio]:checked").val();
      let questionData = "";
      if (valueInput == -99) {
        questionData = $(question[i]).find("textarea").val();
      } else {
        questionData = valueInput;
      }
      Data.push({
        questionId: questionId,
        questionType: questionType,
        questionData: questionData,
      });
    } else if (questionType == 9) {
      var questionData = "";
      $.each($(question).find("input[type='checkbox']:checked"), function () {
        if ($(this).val() == -99) {
          questionData += "Diğer : " + $(question).find("textarea").val();
        } else {
          questionData += $(this).val() + ",";
        }
      });
      Data.push({
        questionId: questionId,
        questionType: questionType,
        questionData: questionData,
      });
    } else if (questionType == 10) {
      const valueInput = $(question[i]).find("input[type=radio]:checked").val();
      let questionData = "";
      if (valueInput == -99) {
        questionData = "Diğer " + $(question[i]).find("textarea").val();
      } else {
        questionData = valueInput;
      }
      Data.push({
        questionId: questionId,
        questionType: questionType,
        questionData: questionData,
      });
    } else if (questionType == 11) {
      const valueInput = $(question[i]).find("select").val();
      let questionData = "";
      if (valueInput == -99) {
        questionData = $(question[i]).find("textarea").val();
      } else {
        questionData = valueInput;
      }
      Data.push({
        questionId: questionId,
        questionType: questionType,
        questionData: questionData,
      });
    }
  }

  AnswerArray.push({
    Data: Data,
  });
  // console.log(JSON.stringify(AnswerArray));
  //burada
  console.log(createJSONForSurveys(surveyObj.surveyId, uuidv4(), Data));

  let sendAlertText = document.querySelector(".sendAlertText");

  sendAlertTextDetect = (alert) => {
    setTimeout(() => {
      sendAlertText.classList.remove("hide");
      sendAlertText.classList.add("showBlock");

      sendAlertText.innerHTML = alert;
    }, 100);
    setTimeout(() => {
      sendAlertText.classList.remove("showBlock");
      sendAlertText.classList.add("hide");
    }, 3000);
  };
  sendAlertTextDetect("Cevaplar Gönderildi. Birazdan yönlendirileceksiniz.");
});

$(document).on("click", ".getJSONPageOne", function (e) {
  const question = document.querySelectorAll(".show-question");
  let AnswerArray = [];
  let Data = [];
  let alertText = document.querySelector(".alertText");

  alertTextDetect = (alert) => {
    setTimeout(() => {
      alertText.classList.remove("hide");
      alertText.classList.add("showBlock");

      alertText.innerHTML = alert;
    }, 100);
    setTimeout(() => {
      alertText.classList.remove("showBlock");
      alertText.classList.add("hide");
    }, 3000);
  };
  for (i = 0; i < question.length; i++) {
    let questionId = $(question[i]).attr("surveyquestionid");
    let isReq = $(question[i]).attr("isreq");
    let questionType = $(question[i]).attr("type");

    if (questionType == 1 || questionType == 3 || questionType == 4) {
      let questionData = $(question[i]).find("input").val();
      if (isReq == 1 && questionData == "") {
        alertTextDetect(`${i + 1}. soru boş bırakılamaz.`);
        return false;
      }
      Data.push({
        questionId: questionId,
        questionType: questionType,
        questionData: questionData,
      });
    } else if (questionType == 2) {
      let questionData = $(question[i]).find("textarea").val();
      Data.push({
        questionId: questionId,
        questionType: questionType,
        questionData: questionData,
      });
    } else if (questionType == 5) {
      const questionData = "123";
      Data.push({
        questionId: questionId,
        questionType: questionType,
        questionData: "",
      });
    } else if (questionType == 6) {
      let questionData = $(question[i]).find("input").val();
      let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (isReq == 1) {
        if (questionData == "") {
          alertTextDetect(`${i + 1}. soru boş bırakılamaz.`);
          return false;
        } else {
          if (questionData.match(pattern)) {
            Data.push({
              questionId: questionId,
              questionType: questionType,
              questionData: questionData,
            });
          } else {
            alertTextDetect(`${i + 1}. soruda E Posta adresi yanlış girildi.`);
            return false;
          }
        }
      } else {
        Data.push({
          questionId: questionId,
          questionType: questionType,
          questionData: questionData,
        });
      }
    } else if (questionType == 7) {
      let questionData = $(question[i]).find("input").val();
      if (isReq == 1) {
        if (questionData == "") {
          alertTextDetect(`${i + 1}. soru boş bırakılamaz.`);
          return false;
        } else {
          if (questionData.length != 15) {
            alertTextDetect(
              `${i + 1}. soruda telefon bilgileri eksik girildi.`
            );
            return false;
          } else {
            Data.push({
              questionId: questionId,
              questionType: questionType,
              questionData: questionData,
            });
          }
        }
      } else {
        Data.push({
          questionId: questionId,
          questionType: questionType,
          questionData: questionData,
        });
      }
    } else if (questionType == 8) {
      const valueInput = $(question[i]).find(
        "input[type=radio]:checked"
      ).length;

      if (isReq == 1) {
        if (valueInput == 0) {
          alertTextDetect(`${i + 1}. boş bırakılamaz.`);
          return false;
        } else {
          Data.push({
            questionId: questionId,
            questionType: questionType,
            questionData: questionData,
          });
        }
      } else {
        Data.push({
          questionId: questionId,
          questionType: questionType,
          questionData: questionData,
        });
      }
    } else if (questionType == 9) {
      var questionData = "";
      $.each($(question).find("input[type='checkbox']:checked"), function () {
        if ($(this).val() == -99) {
          questionData += "Diğer : " + $(question).find("textarea").val();
        } else {
          questionData += $(this).val() + ",";
        }
      });
      if (isReq == 1) {
        if (questionData == "") {
          alertTextDetect(`${i + 1}. boş bırakılamaz.`);
          return false;
        } else {
          Data.push({
            questionId: questionId,
            questionType: questionType,
            questionData: questionData,
          });
        }
      } else {
        Data.push({
          questionId: questionId,
          questionType: questionType,
          questionData: questionData,
        });
      }
    } else if (questionType == 10) {
      const valueInput = $(question[i]).find(
        "input[type=radio]:checked"
      ).length;
      let questionData = "";
      if (valueInput == -99) {
        questionData = "Diğer " + $(question[i]).find("textarea").val();
      } else {
        questionData = valueInput;
      }
      if (isReq == 1) {
        if (questionData == 0) {
          alertTextDetect(`${i + 1}. boş bırakılamaz.`);
          return false;
        } else {
          Data.push({
            questionId: questionId,
            questionType: questionType,
            questionData: questionData,
          });
        }
      } else {
        Data.push({
          questionId: questionId,
          questionType: questionType,
          questionData: questionData,
        });
      }
    } else if (questionType == 11) {
      const valueInput = $(question[i]).find("select").val();
      let questionData = "";
      if (valueInput == -99) {
        questionData = $(question[i]).find("textarea").val();
      } else {
        questionData = valueInput;
      }
      if (isReq == 1) {
        if (questionData == -1) {
          alertTextDetect(`${i + 1}. boş bırakılamaz.`);
          return false;
        } else {
          Data.push({
            questionId: questionId,
            questionType: questionType,
            questionData: questionData,
          });
        }
      } else {
        Data.push({
          questionId: questionId,
          questionType: questionType,
          questionData: questionData,
        });
      }
    }
  }

  AnswerArray.push({
    Data: Data,
  });
  // console.log(JSON.stringify(AnswerArray));
  //burada
  console.log(createJSONForSurveys(surveyObj.surveyId, uuidv4(), Data));

  let sendAlertText = document.querySelector(".sendAlertText");

  sendAlertTextDetect = (alert) => {
    setTimeout(() => {
      sendAlertText.classList.remove("hide");
      sendAlertText.classList.add("showBlock");

      sendAlertText.innerHTML = alert;
    }, 100);
    setTimeout(() => {
      sendAlertText.classList.remove("showBlock");
      sendAlertText.classList.add("hide");
    }, 3000);
  };
  sendAlertTextDetect("Cevaplar Gönderildi. Birazdan yönlendirileceksiniz.");
});

console.log(surveyObj);

$(document).ready(function () {
  if (surveyObj.surveyPageType == 1) {
    document.body.innerHTML += `<div class="swiper-container"><div class="swiper-wrapper"></div></div>`;
    $(".swiper-wrapper").append(
      `<div class="swiper-slide swiper-slide-header">${showQuestionStart(
        surveyObj.surveyHeader,
        surveyObj.surveyDescription,
        surveyObj.Data.length,
        surveyObj.surveyMedia
      )}</div>`
    );
    $(".startSurvey").click(function () {
      $(".questions-rank-container").removeClass("hide");
      $(".questions-rank-container").addClass("show");
    });
    for (let i = 0; i < surveyObj.Data.length; i++) {
      let type = surveyObj.Data[i].type;
      if (type == 1) {
        $(".swiper-wrapper").append(
          showQuestionSlide(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].type,
            surveyObj.Data[i].type,
            "",
            surveyObj.surveyOptions[0][0].background
          )
        );
        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionInput(surveyObj.Data[i].header));

        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionContinueButton);
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents input`
        ).keyup(function (e) {
          if (e.keyCode === 13) {
            e.preventDefault();
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents a`
            ).click();
          }
        });
      } else if (type == 2) {
        $(".swiper-wrapper").append(
          showQuestionSlide(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].type,
            surveyObj.Data[i].type,
            "",
            surveyObj.surveyOptions[0][0].background
          )
        );
        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionTextArea());
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionContinueButton);
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents textarea`
        ).keyup(function (e) {
          if (e.keyCode === 13) {
            e.preventDefault();
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents a`
            ).click();
          }
        });
      } else if (type == 3) {
        $(".swiper-wrapper").append(
          showQuestionSlide(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].type,
            surveyObj.Data[i].type,
            "",
            surveyObj.surveyOptions[0][0].background
          )
        );
        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionDate());
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionContinueButton);
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents input`
        ).keyup(function (e) {
          if (e.keyCode === 13) {
            e.preventDefault();
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents a`
            ).click();
          }
        });
      } else if (type == 4) {
        $(".swiper-wrapper").append(
          showQuestionSlide(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].type,
            surveyObj.Data[i].type,
            "",
            surveyObj.surveyOptions[0][0].background
          )
        );
        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionDateTime());
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionContinueButton);
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents input`
        ).keyup(function (e) {
          if (e.keyCode === 13) {
            e.preventDefault();
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents a`
            ).click();
          }
        });
      } else if (type == 5) {
        $(".swiper-wrapper").append(
          showQuestionSlide(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].type,
            surveyObj.Data[i].type,
            "",
            surveyObj.surveyOptions[0][0].background
          )
        );
        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionFileUpload());
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionContinueButton);
      } else if (type == 6) {
        $(".swiper-wrapper").append(
          showQuestionSlide(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].type,
            surveyObj.Data[i].type,
            "",
            surveyObj.surveyOptions[0][0].background
          )
        );
        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionEmail());
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionContinueButton);
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents input`
        ).keyup(function (e) {
          if (e.keyCode === 13) {
            e.preventDefault();
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents a`
            ).click();
          }
        });
      } else if (type == 7) {
        $(".swiper-wrapper").append(
          showQuestionSlide(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].type,
            surveyObj.Data[i].type,
            "",
            surveyObj.surveyOptions[0][0].background
          )
        );
        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionPhone());
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionContinueButton);
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents input`
        ).keyup(function (e) {
          if (e.keyCode === 13) {
            e.preventDefault();
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents a`
            ).click();
          }
        });
      } else if (type == 8) {
        $(".swiper-wrapper").append(
          showQuestionSlide(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].type,
            surveyObj.Data[i].type,
            surveyObj.Data[i].otherquestion,
            surveyObj.surveyOptions[0][0].background
          )
        );
        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionRankingRadio());
        let rankOne = surveyObj.Data[i].questionData[0].rankOneSelect;
        let rankTwo = surveyObj.Data[i].questionData[0].rankTwoSelect;
        let ratingTextFirst = surveyObj.Data[i].questionData[0].ratingTextFirst;
        let ratingTextSecond =
          surveyObj.Data[i].questionData[0].ratingTextSecond;
        for (let j = rankOne; j <= rankTwo; j++) {
          $(".question-ranking").append(
            questionRadio(surveyObj.Data[i].type, j)
          );
        }
        $(".question-ranking-text").append(questionParag(ratingTextFirst));
        $(".question-ranking-text").append(questionParag(ratingTextSecond));
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionContinueButton);
      } else if (type == 9) {
        $(".swiper-wrapper").append(
          showQuestionSlide(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].surveyQuestionId,
            surveyObj.Data[i].type,
            surveyObj.Data[i].otherquestion,
            surveyObj.surveyOptions[0][0].background
          )
        );
        let otherQuestion = $(
          `.show-question[type='${surveyObj.Data[i].type}']`
        ).attr("otherquestion");
        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }
        if (surveyObj.Data[i].questionData[0].image != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionRadioAndCheckboxContent("checkbox"));

          for (let j = 0; j < surveyObj.Data[i].questionData.length; j++) {
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents .checkbox-contents`
            ).append(
              questionRadioAndCheckbox(
                surveyObj.Data[i].questionData[j].content,
                surveyObj.Data[i].questionData[j].value,
                "checkbox",
                surveyObj.Data[i].questionData[j].image,
                surveyObj.Data[i].surveyQuestionId
              )
            );
          }

          if (otherQuestion == 1) {
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents .checkbox-contents`
            ).append(
              questionRadioAndCheckbox(
                "Diğer",
                -99,
                "checkbox",
                "https://www.questionpro.com/blog/wp-content/uploads/2018/08/70-Online-Survey.jpg",
                surveyObj.Data[i].surveyQuestionId
              )
            );
          }
        } else {
          for (let j = 0; j < surveyObj.Data[i].questionData.length; j++) {
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
            ).append(
              questionRadioAndCheckbox(
                surveyObj.Data[i].questionData[j].content,
                surveyObj.Data[i].questionData[j].value,
                "checkbox",
                surveyObj.Data[i].questionData[j].image,
                surveyObj.Data[i].surveyQuestionId
              )
            );
          }

          if (otherQuestion == 1) {
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
            ).append(
              questionRadioAndCheckbox(
                "Diğer",
                -99,
                "checkbox",
                "",
                surveyObj.Data[i].surveyQuestionId
              )
            );
          }
        }

        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionContinueButton);

        //jsonda bu soru için otherStatusu 1 ise diğer adında ve value değeri -99 olan bir checkbox ekle.
      } else if (type == 10) {
        $(".swiper-wrapper").append(
          showQuestionSlide(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].surveyQuestionId,
            surveyObj.Data[i].type,
            surveyObj.Data[i].otherquestion,
            surveyObj.surveyOptions[0][0].background
          )
        );
        let otherQuestion = $(
          `.show-question[type='${surveyObj.Data[i].type}']`
        ).attr("otherquestion");
        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }
        if (surveyObj.Data[i].questionData[0].image != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionRadioAndCheckboxContent("radio"));

          for (let j = 0; j < surveyObj.Data[i].questionData.length; j++) {
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents .radio-contents`
            ).append(
              questionRadioAndCheckbox(
                surveyObj.Data[i].questionData[j].content,
                surveyObj.Data[i].questionData[j].value,
                "radio",
                surveyObj.Data[i].questionData[j].image,
                surveyObj.Data[i].surveyQuestionId
              )
            );
          }

          if (otherQuestion == 1) {
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents .radio-contents`
            ).append(
              questionRadioAndCheckbox(
                "Diğer",
                -99,
                "radio",
                "https://www.questionpro.com/blog/wp-content/uploads/2018/08/70-Online-Survey.jpg",
                surveyObj.Data[i].surveyQuestionId
              )
            );
          }
        } else {
          for (let j = 0; j < surveyObj.Data[i].questionData.length; j++) {
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
            ).append(
              questionRadioAndCheckbox(
                surveyObj.Data[i].questionData[j].content,
                surveyObj.Data[i].questionData[j].value,
                "radio",
                surveyObj.Data[i].questionData[j].image,
                surveyObj.Data[i].surveyQuestionId
              )
            );
          }

          if (otherQuestion == 1) {
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
            ).append(
              questionRadioAndCheckbox(
                "Diğer",
                -99,
                "radio",
                "",
                surveyObj.Data[i].surveyQuestionId
              )
            );
          }
        }

        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionContinueButton);
      } else if (type == 11) {
        $(".swiper-wrapper").append(
          showQuestionSlide(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].surveyQuestionId,
            surveyObj.Data[i].type,
            surveyObj.Data[i].otherquestion,
            surveyObj.surveyOptions[0][0].background
          )
        );

        let otherQuestion = $(
          `.show-question[type='${surveyObj.Data[i].type}']`
        ).attr("otherquestion");

        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }

        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionSelect());

        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents select`
        ).append(questionOption("Seçiniz", -1));
        for (let j = 0; j < surveyObj.Data[10].questionData.length; j++) {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents select`
          ).append(
            questionOption(
              surveyObj.Data[i].questionData[j].content,
              surveyObj.Data[i].questionData[j].value
            )
          );
        }
        if (otherQuestion == 1) {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents select`
          ).append(questionOption("Diğer", -99));
        }
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionContinueButton);
      }
    }

    $(".swiper-wrapper").append(
      `<div class="swiper-slide swiper-slide-header">${showQuestionEnd(
        surveyObj.surveyOptions[0][0].surveyEndText
      )}</div>`
    );
  } else {
    document.body.innerHTML += `<div class="container-fluid"></div>`;
    for (let i = 0; i < surveyObj.Data.length; i++) {
      let type = surveyObj.Data[i].type;
      if (type == 1) {
        $(".container-fluid").append(
          showQuestion(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].type,
            surveyObj.Data[i].type,
            "",
            surveyObj.surveyOptions[0][0].background
          )
        );
        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionInput(surveyObj.Data[i].header));
      } else if (type == 2) {
        $(".container-fluid").append(
          showQuestion(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].type,
            surveyObj.Data[i].type,
            "",
            surveyObj.surveyOptions[0][0].background
          )
        );
        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionTextArea());
      } else if (type == 3) {
        $(".container-fluid").append(
          showQuestion(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].type,
            surveyObj.Data[i].type,
            "",
            surveyObj.surveyOptions[0][0].background
          )
        );
        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionDate());
      } else if (type == 4) {
        $(".container-fluid").append(
          showQuestion(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].type,
            surveyObj.Data[i].type,
            "",
            surveyObj.surveyOptions[0][0].background
          )
        );
        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionDateTime());
      } else if (type == 5) {
        $(".container-fluid").append(
          showQuestion(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].type,
            surveyObj.Data[i].type,
            "",
            surveyObj.surveyOptions[0][0].background
          )
        );
        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionFileUpload());
      } else if (type == 6) {
        $(".container-fluid").append(
          showQuestion(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].type,
            surveyObj.Data[i].type,
            "",
            surveyObj.surveyOptions[0][0].background
          )
        );
        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionEmail());
      } else if (type == 7) {
        $(".container-fluid").append(
          showQuestion(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].type,
            surveyObj.Data[i].type,
            "",
            surveyObj.surveyOptions[0][0].background
          )
        );
        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionPhone());
      } else if (type == 8) {
        $(".container-fluid").append(
          showQuestion(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].type,
            surveyObj.Data[i].type,
            surveyObj.Data[i].otherquestion,
            surveyObj.surveyOptions[0][0].background
          )
        );
        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }
        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionRankingRadio());
        let rankOne = surveyObj.Data[i].questionData[0].rankOneSelect;
        let rankTwo = surveyObj.Data[i].questionData[0].rankTwoSelect;
        let ratingTextFirst = surveyObj.Data[i].questionData[0].ratingTextFirst;
        let ratingTextSecond =
          surveyObj.Data[i].questionData[0].ratingTextSecond;
        for (let j = rankOne; j <= rankTwo; j++) {
          $(".question-ranking").append(
            questionRadio(surveyObj.Data[i].type, j)
          );
        }
        $(".question-ranking-text").append(questionParag(ratingTextFirst));
        $(".question-ranking-text").append(questionParag(ratingTextSecond));
      } else if (type == 9) {
        $(".container-fluid").append(
          showQuestion(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].surveyQuestionId,
            surveyObj.Data[i].type,
            surveyObj.Data[i].otherquestion,
            surveyObj.surveyOptions[0][0].background
          )
        );
        let otherQuestion = $(
          `.show-question[type='${surveyObj.Data[i].type}']`
        ).attr("otherquestion");
        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }
        if (surveyObj.Data[i].questionData[0].image != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionRadioAndCheckboxContent("checkbox"));

          for (let j = 0; j < surveyObj.Data[i].questionData.length; j++) {
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents .checkbox-contents`
            ).append(
              questionRadioAndCheckbox(
                surveyObj.Data[i].questionData[j].content,
                surveyObj.Data[i].questionData[j].value,
                "checkbox",
                surveyObj.Data[i].questionData[j].image,
                surveyObj.Data[i].surveyQuestionId
              )
            );
          }

          if (otherQuestion == 1) {
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents .checkbox-contents`
            ).append(
              questionRadioAndCheckbox(
                "Diğer",
                -99,
                "checkbox",
                "https://www.questionpro.com/blog/wp-content/uploads/2018/08/70-Online-Survey.jpg",
                surveyObj.Data[i].surveyQuestionId
              )
            );
          }
        } else {
          for (let j = 0; j < surveyObj.Data[i].questionData.length; j++) {
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
            ).append(
              questionRadioAndCheckbox(
                surveyObj.Data[i].questionData[j].content,
                surveyObj.Data[i].questionData[j].value,
                "checkbox",
                surveyObj.Data[i].questionData[j].image,
                surveyObj.Data[i].surveyQuestionId
              )
            );
          }

          if (otherQuestion == 1) {
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
            ).append(
              questionRadioAndCheckbox(
                "Diğer",
                -99,
                "checkbox",
                "",
                surveyObj.Data[i].surveyQuestionId
              )
            );
          }
        }

        //jsonda bu soru için otherStatusu 1 ise diğer adında ve value değeri -99 olan bir checkbox ekle.
      } else if (type == 10) {
        $(".container-fluid").append(
          showQuestion(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].surveyQuestionId,
            surveyObj.Data[i].type,
            surveyObj.Data[i].otherquestion,
            surveyObj.surveyOptions[0][0].background
          )
        );
        let otherQuestion = $(
          `.show-question[type='${surveyObj.Data[i].type}']`
        ).attr("otherquestion");
        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }
        if (surveyObj.Data[i].questionData[0].image != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionRadioAndCheckboxContent("radio"));

          for (let j = 0; j < surveyObj.Data[i].questionData.length; j++) {
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents .radio-contents`
            ).append(
              questionRadioAndCheckbox(
                surveyObj.Data[i].questionData[j].content,
                surveyObj.Data[i].questionData[j].value,
                "radio",
                surveyObj.Data[i].questionData[j].image,
                surveyObj.Data[i].surveyQuestionId
              )
            );
          }

          if (otherQuestion == 1) {
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents .radio-contents`
            ).append(
              questionRadioAndCheckbox(
                "Diğer",
                -99,
                "radio",
                "https://www.questionpro.com/blog/wp-content/uploads/2018/08/70-Online-Survey.jpg",
                surveyObj.Data[i].surveyQuestionId
              )
            );
          }
        } else {
          for (let j = 0; j < surveyObj.Data[i].questionData.length; j++) {
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
            ).append(
              questionRadioAndCheckbox(
                surveyObj.Data[i].questionData[j].content,
                surveyObj.Data[i].questionData[j].value,
                "radio",
                surveyObj.Data[i].questionData[j].image,
                surveyObj.Data[i].surveyQuestionId
              )
            );
          }

          if (otherQuestion == 1) {
            $(
              `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
            ).append(
              questionRadioAndCheckbox(
                "Diğer",
                -99,
                "radio",
                "",
                surveyObj.Data[i].surveyQuestionId
              )
            );
          }
        }
      } else if (type == 11) {
        $(".container-fluid").append(
          showQuestion(
            i,
            surveyObj.Data[i].questionOptions[0].required,
            surveyObj.Data[i].surveyQuestionId,
            surveyObj.Data[i].type,
            surveyObj.Data[i].otherquestion,
            surveyObj.surveyOptions[0][0].background
          )
        );

        let otherQuestion = $(
          `.show-question[type='${surveyObj.Data[i].type}']`
        ).attr("otherquestion");

        if (surveyObj.Data[i].questionMedia != "") {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
          ).append(questionImage(surveyObj.Data[i].questionMedia));
        }

        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents`
        ).append(questionSelect());

        $(
          `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents select`
        ).append(questionOption("Seçiniz", -1));
        for (let j = 0; j < surveyObj.Data[10].questionData.length; j++) {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents select`
          ).append(
            questionOption(
              surveyObj.Data[i].questionData[j].content,
              surveyObj.Data[i].questionData[j].value
            )
          );
        }
        if (otherQuestion == 1) {
          $(
            `.show-question[type='${surveyObj.Data[i].type}'] .show-question-contents select`
          ).append(questionOption("Diğer", -99));
        }
      }
    }
    $(`.container-fluid`).append(questiongetJSONPageOne());
  }
  $(".swiper-container").append(questionRank());
  $(".phones").mask("(999) 999-99-99");

  var swiper = new Swiper(".swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    parallax: true,
    touchRatio: 0,
    speed: 1000,
  });

  let answeredQuestion = 0;

  updateAnsweredQuestion = (answeredQuestion) => {
    $(".currentQuestionNumber").text(answeredQuestion);
  };

  $(".continueBtn").click(function (e) {
    let questionContainer = e.target.parentElement.parentElement;
    let questionRequired = questionContainer.getAttribute("isReq");
    let questionType = questionContainer.getAttribute("type");
    let alertText = document.querySelector(".alertText");

    alertTextDetect = (alert) => {
      setTimeout(() => {
        alertText.classList.remove("hide");
        alertText.classList.add("showBlock");

        alertText.innerHTML = alert;
      }, 100);
      setTimeout(() => {
        alertText.classList.remove("showBlock");
        alertText.classList.add("hide");
      }, 3000);
    };

    if (questionType == 1) {
      let answer = questionContainer.querySelector(".question-input input");
      if (questionRequired == 1) {
        if (answer.value == "") {
          alertTextDetect("Boş Bırakılamaz.");
          return false;
        } else {
          answeredQuestion++;
          updateAnsweredQuestion(answeredQuestion);
          swiper.slideNext();
        }
      } else {
        answeredQuestion++;
        updateAnsweredQuestion(answeredQuestion);
        swiper.slideNext();
      }
    } else if (questionType == 2) {
      let answer = questionContainer.querySelector(
        ".question-longtext textarea"
      );
      if (questionRequired == 1) {
        if (answer.value == "") {
          alertTextDetect("Boş Bırakılamaz.");

          return false;
        } else {
          answeredQuestion++;
          updateAnsweredQuestion(answeredQuestion);
          swiper.slideNext();
        }
      } else {
        answeredQuestion++;
        updateAnsweredQuestion(answeredQuestion);
        swiper.slideNext();
      }
    } else if (questionType == 3) {
      let answer = questionContainer.querySelector(
        ".question-datetime input[type='date']"
      );
      if (questionRequired == 1) {
        if (answer.value == "") {
          alertTextDetect("Boş Bırakılamaz.");
          return false;
        } else {
          answeredQuestion++;
          updateAnsweredQuestion(answeredQuestion);
          swiper.slideNext();
        }
      } else {
        answeredQuestion++;
        updateAnsweredQuestion(answeredQuestion);
        swiper.slideNext();
      }
    } else if (questionType == 4) {
      let answer = questionContainer.querySelector(
        ".question-datetime input[type='datetime-local']"
      );
      if (questionRequired == 1) {
        if (answer.value == "") {
          alertTextDetect("Boş Bırakılamaz.");
          return false;
        } else {
          answeredQuestion++;
          updateAnsweredQuestion(answeredQuestion);
          swiper.slideNext();
        }
      } else {
        answeredQuestion++;
        updateAnsweredQuestion(answeredQuestion);
        swiper.slideNext();
      }
    } else if (questionType == 6) {
      let answer = questionContainer.querySelector(".question-input input");
      let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (questionRequired == 1) {
        if (answer.value == "") {
          alertTextDetect("Boş Bırakılamaz.");
          return false;
        } else {
          if (answer.value.match(pattern)) {
            answeredQuestion++;
            updateAnsweredQuestion(answeredQuestion);
            swiper.slideNext();
          } else {
            alertTextDetect("E Posta adresi yanlış");
          }
        }
      } else {
        answeredQuestion++;
        updateAnsweredQuestion(answeredQuestion);
        swiper.slideNext();
      }
    } else if (questionType == 7) {
      let answer = questionContainer.querySelector(".question-input input");
      if (questionRequired == 1) {
        if (answer.value == "") {
          alertTextDetect("Boş Bırakılamaz.");
          return false;
        } else {
          if (answer.value.length == 15) {
            answeredQuestion++;
            updateAnsweredQuestion(answeredQuestion);
            swiper.slideNext();
          } else {
            alertTextDetect("Eksik Numara Girdiniz.");
          }
        }
      } else {
        answeredQuestion++;
        updateAnsweredQuestion(answeredQuestion);
        swiper.slideNext();
      }
    } else if (questionType == 8) {
      let answer = questionContainer.querySelectorAll(
        ".question-ranking .ranking-radio-items input:checked"
      ).length;

      if (questionRequired == 1) {
        if (answer == 0) {
          alertTextDetect("Boş Bırakılamaz.");
          return false;
        } else {
          answeredQuestion++;
          updateAnsweredQuestion(answeredQuestion);
          swiper.slideNext();
        }
      } else {
        answeredQuestion++;
        updateAnsweredQuestion(answeredQuestion);
        swiper.slideNext();
      }
    } else if (questionType == 9) {
      let answer = questionContainer.querySelectorAll(
        ".show-question-checkbox-content-with-image input:checked"
      ).length;
      let answer2 = questionContainer.querySelectorAll(
        ".show-question-checkbox-content input:checked"
      ).length;

      if (questionRequired == 1) {
        if (answer == 0 && answer2 == 0) {
          alertTextDetect("Boş Bırakılamaz.");
        } else {
          answeredQuestion++;
          updateAnsweredQuestion(answeredQuestion);
          swiper.slideNext();
        }
      } else {
        answeredQuestion++;
        updateAnsweredQuestion(answeredQuestion);
        swiper.slideNext();
      }
    } else if (questionType == 10) {
      let answer = questionContainer.querySelectorAll(
        ".show-question-radio-content-with-image input:checked"
      ).length;
      let answer2 = questionContainer.querySelectorAll(
        ".show-question-radio-content input:checked"
      ).length;

      if (questionRequired == 1) {
        if (answer == 0 && answer2 == 0) {
          alertTextDetect("Boş Bırakılamaz.");
        } else {
          answeredQuestion++;
          updateAnsweredQuestion(answeredQuestion);
          swiper.slideNext();
        }
      } else {
        answeredQuestion++;
        updateAnsweredQuestion(answeredQuestion);
        swiper.slideNext();
      }
    } else if (questionType == 11) {
      let answer = questionContainer.querySelector(
        ".question-select select"
      ).value;
      if (questionRequired == 1) {
        if (answer == -1) {
          alertTextDetect("Boş Bırakılamaz.");
        } else {
          answeredQuestion++;
          updateAnsweredQuestion(answeredQuestion);
          swiper.slideNext();
        }
      } else {
        answeredQuestion++;
        updateAnsweredQuestion(answeredQuestion);
        swiper.slideNext();
      }
    }
  });
  let buttonPrev = document.querySelector(".swiper-button-prev");
  let swiperSlides = document.querySelectorAll(".swiper-slide");
  if (buttonPrev && swiperSlides) {
    buttonPrev.addEventListener("click", () => {
      swiperSlides.forEach((slide) => {
        if (
          slide.classList.contains("swiper-slide-active") &&
          slide.getAttribute("aria-label") == "1 / 13"
        ) {
          swiper.slideNext();
        }
      });
    });
  }
});

$(function () {
  $(".field-wrapper .field-placeholder").on("click", function () {
    $(this).closest(".field-wrapper").find("input").focus();
  });
  $(".field-wrapper input").on("keyup", function () {
    var value = $.trim($(this).val());
    if (value) {
      $(this).closest(".field-wrapper").addClass("hasValue");
    } else {
      $(this).closest(".field-wrapper").removeClass("hasValue");
    }
  });
  $(".field-wrapperTextArea textarea").on("keyup", function () {
    var value = $.trim($(this).val());
    if (value) {
      $(this).closest(".field-wrapperTextArea").addClass("hasValue");
    } else {
      $(this).closest(".field-wrapperTextArea").removeClass("hasValue");
    }
  });
});
