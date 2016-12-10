class Text{
  static select(){
    var texts = [
      "好きな食べ物はカツオのタタキです",
      "我輩はAIサムライと申す"
    ];
    var text = texts[Math.floor(Math.random() * texts.length)];
    return text;
  }

}

module.exports = Text;
