// Provare a riprodurre uno slider di immagini.
// Bonus: aggiungiamo autoplay.

var app = new Vue(
  {
    el: "main",
    data: {
      imageIndex: 0,
      images: ["img/castelluccio.jpg","img/cascata.jpg","img/5terre.jpg","img/sardegna.jpg","img/trentino.jpg"],
    },

    methods: {
      nextImage: function() {
        this.imageIndex++;
        if (this.imageIndex == this.images.length) {
          this.imageIndex = 0;
        }
      },
      prevImage: function() {
        this.imageIndex--;
        if (this.imageIndex == -1) {
          this.imageIndex = this.images.length -1;
        }
      }
    }

  }
);
