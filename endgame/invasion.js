const correctSequence = [5, 3, 4, 2, 1, 5];
let userSequence = [];


document.querySelectorAll('area').forEach(area => {
  area.addEventListener('click', () => {
    const id = Number(area.dataset.id);
    userSequence.push(id);

    if (userSequence.length === correctSequence.length) {
      const isCorrect = correctSequence.every((value, index) => {
        return userSequence[index] === value;
      });

      if (isCorrect) {
        alert("key: 'halls'");
      } else {
        [];
      }

      
      userSequence = [];
    }
  });
});