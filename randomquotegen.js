var currentQuote = '';
var currentAuthor = '';

function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(response) {
      var res = JSON.parse(response);
      currentQuote = res.quote;
      currentAuthor = res.author;

      $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
      $('.text').text(res.quote);
      $('.author').text(res.author);
    }
  })
}
