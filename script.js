// script.js
document.addEventListener('DOMContentLoaded', () => {
  const terminalOutput = document.getElementById('terminal-output');
  const terminalInput = document.getElementById('terminal-input');

  const displayOutput = (text) => {
      terminalOutput.innerHTML += `<div class="output-line">${text}</div>`;
      terminalOutput.scrollTop = terminalOutput.scrollHeight; // 最新の出力にスクロール
  };

  const processCommand = (command) => {
      switch (command.trim()) {
          case 'info':
              displayOutput('名前: haya1007');
              displayOutput('職業: インフラエンジニア');
              break;
          case 'games':
              displayOutput('やってるゲーム: LOL, 音ゲー, EFT, 寿司打');
              break;
          case 'social':
              displayOutput('GitHub: https://github.com/haya1007');
              displayOutput('X: https://x.com/pippipipiip');
              displayOutput('YouTube: https://www.youtube.com/@ekko-hy');
              break;
          case 'clear':
              terminalOutput.innerHTML = '';
              break;
          case '': // 空のコマンドは何もしない
              break;
          default:
              displayOutput(`コマンド '${command}' は存在しません。`);
      }
  };

  terminalInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
          const command = terminalInput.value;
          displayOutput(`<span class="prompt-text">guest@haya1007:~$</span> ${command}`);
          processCommand(command);
          terminalInput.value = ''; // 入力欄をクリア
      }
  });

  // ページ読み込み時に初期メッセージを表示
  displayOutput('ようこそ！利用可能なコマンド: info, games, social, clear');
});