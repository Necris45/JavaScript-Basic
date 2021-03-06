/*
1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
(использовать createElement / appendChild)
 */

const chess = {
  gameContainerEl: document.getElementById('game'),

  renderMap() {
    const rows = [8, 7, 6, 5, 4, 3, 2, 1, 0];
    const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    for (let row = 0; row < rows.length; row++) {
      const tr = document.createElement('tr');
      this.gameContainerEl.appendChild(tr);

      for (let col = 0; col < cols.length; col++) {
        const td = document.createElement('td');
        tr.appendChild(td);

        if (rows[row] === 0 && cols[col] !== 0) {
          td.innerHTML = cols[col];
        } else if (cols[col] === 0 && rows[row] !== 0) {
          td.innerHTML = rows[row].toString();
        }

        if (this.isCellIsBlack(row, col)) {
          td.style.backgroundColor = 'grey';
        }
      }
    }
  },

  isCellIsBlack(rowNum, colNum) {
    if (colNum === 0 || rowNum === 8) {
      return false;
    }
    return (rowNum + colNum) % 2 === 0;
  },
};

chess.renderMap();

