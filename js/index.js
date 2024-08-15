$(document).ready(() => {
  let lang = "EN";
  $("#current_languaje").text(lang);
  $("#languageSwitch").click(() => {
    lang = lang === "EN" ? "ES" : "EN";
    $("#current_languaje").text(lang);
    updateTexts();
  });

  // Función para actualizar los textos
  const updateTexts = () => {
    $("#intro").text(texts[lang].about.intro);
    $("#about_greetigs").text(texts[lang].about.about_greetigs);
    $("#about").text(texts[lang].about.about);
    $(".resume").text(texts[lang].resume);
    $(".age").text(texts[lang].age);
    $(".gh").text(texts[lang].gh);
    $("#projects_title").text(texts[lang].projects);
    $("#text_project1").text(texts[lang].textProject1);
    $("#text_project2").text(texts[lang].textProject2);
    $("#text_project3").text(texts[lang].textProject3);
    $("#text_project4").text(texts[lang].textProject4);
    $(".stacks").text(texts[lang].stacks);
    $("#email").text(texts[lang].email);
    $("#music").text(texts[lang].music);
    $(".contact").text(texts[lang].contact);
    $(".spotify").text(texts[lang].spotify);
    $("#hobbies_title").text(texts[lang].hobbies.title);
    $("#hobbie1").text(texts[lang].hobbies.hobbie1);
    $("#hobbie2").text(texts[lang].hobbies.hobbie2);
    $("#hobbie3").text(texts[lang].hobbies.hobbie3);
    $("#hobbie4").text(texts[lang].hobbies.hobbie4);
    $("#hobbie5").text(texts[lang].hobbies.hobbie5);
    $("#hobbie6").text(texts[lang].hobbies.hobbie6);
    $("#hobbie7").text(texts[lang].hobbies.hobbie7);
    $(".temp").text(texts[lang].temp);
    $(".modal-title").text(texts[lang].modal.title);
    $("#btn_send").text(texts[lang].modal.btn_send);
    $("#btn-close").text(texts[lang].modal.btn_close);
  };

  // Inicializar textos
  updateTexts();
  $("#btn_send").click(() => {
    const message = $("#message_input").val();
    const email = $("#email_input").val();
    $(".contact").css("color", "green");
    if (lang === "EN") {
      $(".contact").text("message Sended");
    } else {
      $(".contact").text("Mensaje enviado");
    }
    message = "";
    email = "";

    //Agregar funcionalidades futuras para que el msj se envíe a un servidor
  });
});
