export const centerTextPlugin = {
    id: 'centerText', // this is required
    beforeDraw(chart) {
      const { width, height, ctx } = chart;
      const text = chart.options.plugins.centerText?.text || '';
  
      ctx.save();
      const fontSize = (height / 100).toFixed(2);
      ctx.font = `${fontSize}em sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#333';
      ctx.fillText(text, width / 2, height / 2);
      ctx.restore();
    }
  };
  
  