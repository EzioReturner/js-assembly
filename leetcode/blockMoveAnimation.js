// 将目标id元素 按固定距离，固定时间移动，先快后慢

function createAnimation(id = 'testDiv', time = 5000, len = 500) {
  if (!id) return;
  const dom = document.getElementById(id);
  if (dom) {
    let animation;
    const start = Date.now();
    const move = () => {
      // 固定距离
      if (len) {
        const step = Math.ceil((len - dom.offsetLeft) / 20);
        dom.style.left = Number(dom.offsetLeft) + Number(step) + 'px';
        if (step > 0) {
          animation = requestAnimationFrame(move);
        } else {
          cancelAnimationFrame(animation);
        }
      } else {
        // 固定时间
        const spendTime = Date.now() - start;
        const step = (Math.abs(5000 - spendTime) / 1000).toFixed(2);
        dom.style.left = Number(dom.offsetLeft) + Number(step) + 'px';
        if (spendTime < time) {
          animation = requestAnimationFrame(move);
        } else {
          cancelAnimationFrame(animation);
        }
      }
    };
    animation = requestAnimationFrame(move);
  }
}