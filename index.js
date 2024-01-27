function superbowlWin(array) {
    const win = array.find(obj => obj.result === "W");
    if (win) {
      return win.year;
    }
    return undefined;
  }
